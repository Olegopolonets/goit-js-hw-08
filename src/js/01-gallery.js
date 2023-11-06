// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryList = document.querySelector('.gallery');

console.log(galleryList);

/* Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї. */
const arrImages = galleryItems.map(item => {
  return `<li class="gallery__item"> <a class="gallery__link" href="${item.original}"><img src = "${item.preview}" alt="${item.description}" data-source="${item.original}" data-lightbox="image" class="gallery__image"></a></li>`;
});

galleryList.insertAdjacentHTML('beforeend', `${arrImages.join('')}`);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
console.log(galleryItems);
