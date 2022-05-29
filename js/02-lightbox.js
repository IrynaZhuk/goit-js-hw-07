import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallaryContainer = document.querySelector(".gallery");
const items = createGallaryItems(galleryItems);

gallaryContainer.insertAdjacentHTML('beforeend', items);

function createGallaryItems(galleryItems) {
  return galleryItems.map(({preview, original, description}) => {
        return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
  }).join("")  
}

gallaryContainer.addEventListener('click', onGallaryContainerClickHandler)

function onGallaryContainerClickHandler (event) {
  event.preventDefault();

  const bigImg = new SimpleLightbox('.gallery a');
  bigImg.next();

//   $('.gallery a').on('open.simplelightbox', function(){
//     captionsData: "alt" = event.target.description;
// })
}