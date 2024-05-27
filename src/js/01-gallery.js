// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';
// // Add imports above this line
// import { galleryItems } from './gallery-items';
// // Change code below this line

// console.log(galleryItems);

// const galleryEls = document.querySelector('.gallery');

// const createImageItem = ({ preview, original, description }) => {
//   return `<a class="gallery__item" href="${original}">
//       <img class="gallery__image" src="${preview}" alt="${description}" />
//     </a>
//     `;
// };

// const arrImages = galleryItems.map(createImageItem).join('');
// galleryEls.insertAdjacentHTML('beforeend', arrImages);

// galleryEls.addEventListener('click', event => {
//   event.preventDefault();
//   gallery.on('show.Simplelightbox');
// });
// let gallery = new SimpleLightbox('.gallery a', {
//   captionsData: 'alt',
//   captionDelay: 250,
// });
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
const ulEl = document.querySelector('.gallery');

const createElement = ({ preview, original, description }) => {
  return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li> `;
};
console.log(createElement);

const galleryEl = galleryItems.map(createElement).join('');
console.log(galleryEl);
ulEl.insertAdjacentHTML('beforeend', galleryEl);

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
