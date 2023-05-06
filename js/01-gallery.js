import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryList = document.querySelector('.gallery')

const galleryMarcup = galleryItems.map(({ preview, original, description }) =>
    `<li class="gallery__item">
    <a class="gallery__link" href="#" rel="noopener noreferrer">
    <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
    </a>
    </li>`
).join('');

galleryList.innerHTML = galleryMarcup;
// console.log(galleryMarcup)
console.log(galleryList)
 
let lightbox;

galleryList.addEventListener('click', (event) => {
    if (event.target.nodeName === 'IMG') { 
        const imgSrc = event.target.dataset.source;
        lightbox = basicLightbox.create(`<img width="1280" height="855" src="${imgSrc}">`)
        lightbox.show()
    }
})

document.addEventListener('keydown', (event) => {
    if (event.key === "Escape" && lightbox) {
        lightbox.close()
    }
})
    
   