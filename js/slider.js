/**
 * Enable slideshow logic.  
 * @param {Array.Object} images - Array of pictures
 * @param {number} imgId - Id of picture
 * @param {boolean} isFirst - First rendering
 */
export const slideShow = (images, imgId, isFirst) => {
  showSlide(false, images, imgId, isFirst)

  isFirst = false
  const btns = document.querySelectorAll('.slide-btns')
  btns.forEach((btn) =>
    btn.addEventListener('click', (event) => {
      imgId = changeSlide(event, images, imgId)

      showSlide(event, images, imgId, isFirst)
    })
  )
}

/**
 * Show slide
 * @param {Event} event - Mouse Event. 
 * @param {Array.Object} images - Array of pictures.
 * @param {number} currentImgId - Id of picture.
 * @param {boolean} isFirst - First rendering.
 */
const showSlide = (event, images, currentImgId, isFirst) => {
  const imgs = Array.from(document.querySelectorAll('.slides'))

  if (isFirst) {
    showImg(imgs, currentImgId)
  } else {
    if (currentImgId <= images.length && currentImgId > 0) {
      let prevImgId

      if (event.target.id === String('btn-next')) {
        prevImgId = currentImgId - 1
      } else {
        prevImgId = currentImgId + 1
      }

      showImg(imgs, currentImgId, prevImgId)
    }
  }
}

/**
 * Show image 
 * @param {Array.Node} imgs - Array of nodes (each img element created). 
 * @param {number} currentId - Current image id.
 * @param {number} prevId - Previous image id.
 */
const showImg = (imgs, currentId, prevId) => {
  const currentImg = imgs.find(
    (img) => img.dataset.number === String(currentId)
  )
  const prevImg = imgs.find((img) => img.dataset.number === String(prevId))
  if (
    parseInt(currentId) <= imgs.length &&
    !currentImg.classList.contains('active')
  ) {
    if (currentImg) {
      currentImg.classList.toggle('active')
    }
    if (prevImg) {
      prevImg.classList.toggle('active')
    }
  }
}

/**
 * Increment or decrement current id. 
 * @param {Event} event - Mouse Event. 
 * @param {Array.Object} images - Array of pictures. 
 * @param {number} imgId - Current id. 
 * @returns {number} - Increment/decrement current id. 
 */
const changeSlide = (event, images, imgId) => {
  if (String(event.target.id) === 'btn-next') {
    if (imgId < images.length) imgId++
  } else {
    if (imgId > 1) imgId--
  }
  return imgId
}
