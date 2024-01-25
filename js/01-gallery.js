import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const divSelector = document.querySelector(".gallery");

const divGallery = (items) => {
    return items
        .map(item => `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`)
        .join("");
    
}

const makeGallery = divGallery(galleryItems);

divSelector.innerHTML = makeGallery;

divSelector.addEventListener("click", (event) => {
    event.preventDefault();

    if (event.target.nodeName !== "IMG") { 
        return
    }

    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
    `);
    instance.show();

    divSelector.addEventListener("keydown", (event) => {
        if (event.code === "Escape") {
            instance.close();
        }
    })



})