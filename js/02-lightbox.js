import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const ulSelector = document.querySelector(".gallery");

const ulGallery = galleryItems
    .map(item => 
        `<li>
        <a class="gallery__item" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
        </a>
        </li>`
    )
    .join("");

ulSelector.innerHTML = ulGallery;

const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: "alt",
    captionDelay: 250,

});


