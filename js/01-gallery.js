import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const divSelector = document.querySelector(".gallery");

const divGallery = galleryItems
  .map(item =>
  `<div class="gallery__item">
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


divSelector.innerHTML = divGallery;

const instance = basicLightbox.create(`
  <img src="" width="800" height="600">
  `,
  {
    onShow: (instance) => window.addEventListener("keydown", onEscape),
    onClose: (instance) => window.removeEventListener("keydown", onEscape),
  }
);


function onImgClick (event) {
event.preventDefault();
  const imgSource = event.target.dataset.source;
if (!imgSource) {
    return
}
  instance.element().querySelector("img").src = imgSource

  instance.show();
}

divSelector.addEventListener("click", onImgClick);

function onEscape (event) {
  if (event.code === "Escape") {
    instance.close();

  }

    }



