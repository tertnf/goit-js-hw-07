import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryMarkup = createGallaryMarkup(galleryItems);
const galleryRef = document.querySelector("div.gallery");
galleryRef.insertAdjacentHTML("beforeend", galleryMarkup);
function createGallaryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`;
    })
    .join("");
}

galleryRef.addEventListener("click", onGalaryClick);

function onGalaryClick(event) {
  const isPreviewIMG = event.target.classList.contains("gallery__image");

  if (!isPreviewIMG) {
    return;
  }
  event.preventDefault();
  console.log(event.target.dataset.source);
}
