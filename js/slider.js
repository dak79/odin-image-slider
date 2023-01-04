// TODO: Rename varable i

export const slideShow = (images, i) => {
  showSlide(images, i)
  const btns = document.querySelectorAll('.slide-btns')
  btns.forEach((btn) =>
    btn.addEventListener('click', () => {
      i = changeSlide(event, images, i)
      showSlide(images, i)
    })
  )
}

// TODO: hide previous img and show the second
// TODO: reneame variable
const showSlide = (images, i) => {
  const imgs = document.querySelectorAll('.slides')


  const show = images.find((image) => image.id === i)
  const imgA = Array.from(imgs)
  const b = imgA.find((img) => img.dataset.number === String(i))
  b.classList.toggle('active')
}

// TODO: gestisci i > images.length and i < 0
// TODO: rename i
const changeSlide = (event, images, i) => {
  if (String(event.target.id) === 'btn-next') {
    i++
  } else {
    i--
  }

  return i
}

