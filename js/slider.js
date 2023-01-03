export const render = () => {
  const hook = document.querySelector('#hook')
  const pictures = [
    {
      id: 1,
      name: 'img1.JPG',
      url: '../assets/img1.JPG',
      alt: 'Cirsium Arvense',
    },
    {
      id: 2,
      name: 'img2.JPG',
      url: '../assets/img2.JPG',
      alt: 'Cirsium Oleraceum',
    },
    {
      id: 3,
      name: 'img3.JPG',
      url: '../assets/img3.JPG',
      alt: 'Eupatorium Cannabinum',
    },
    {
      id: 4,
      name: 'img4.JPG',
      url: '../assets/img4.JPG',
      alt: 'Heracleum sphondylium',
    },
    {
      id: 5,
      name: 'img5.JPG',
      url: '../assets/img5.JPG',
      alt: 'Calystegia sepium',
    },
    {
      id: 6,
      name: 'img6.JPG',
      url: '../assets/img6.JPG',
      alt: 'Calystegia sepium',
    },
  ]
  /* hook.innerHTML = '<h1>Hello<h1>' */
  slideUi(hook, pictures)
  showSlide(pictures);
}

const slideUi = (hook, images) => {
  const slideContainer = document.createElement('div')
  slideContainer.classList.add('slide-container')

  images.map((image) => {
    const slide = document.createElement('div')
    slide.classList.add('slides')
    slide.setAttribute('data-number', `${image.id}`)

    const picture = document.createElement('img')
    picture.setAttribute('src', `${image.url}`)
    picture.setAttribute('alt', `${image.alt}`)
    picture.setAttribute('data-number', `${image.id}`)
    picture.classList.add('pictures')

    slide.appendChild(picture)
    slideContainer.appendChild(slide)
  })

  hook.appendChild(slideContainer)
}

const showSlide = (images) => {
  const imgs = document.querySelectorAll('.slides') 

  let i = 3
  const show = images.find(image => image.id === i)
  console.log(show)
  const imgA = Array.from(imgs)
  console.log(imgA)
  console.log(imgA.find(img => img.dataset.number === String(i)))
  const b = imgA.find(img => img.dataset.number === String(i))
  b.classList.toggle('active')
  
}













