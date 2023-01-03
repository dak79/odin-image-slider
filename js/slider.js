export const render = () => {
  const hook = document.querySelector('#hook')
  const pictures = [
    {
      name: 'img1.JPG',
      url: '../assets/img1.JPG',
      alt: 'Cirsium Arvense',
    },
    {
      name: 'img2.JPG',
      url: '../assets/img2.JPG',
      alt: 'Cirsium Oleraceum',
    },
    {
      name: 'img3.JPG',
      url: '../assets/img3.JPG',
      alt: 'Eupatorium Cannabinum',
    },
    {
      name: 'img4.JPG',
      url: '../assets/img4.JPG',
      alt: 'Heracleum sphondylium',
    },
    {
      name: 'img5.JPG',
      url: '../assets/img5.JPG',
      alt: 'Calystegia sepium',
    },
    {
      name: 'img6.JPG',
      url: '../assets/img6.JPG',
      alt: 'Calystegia sepium',
    },
  ]
  /* hook.innerHTML = '<h1>Hello<h1>' */
  slideUi(hook, pictures)
}

const slideUi = (hook, images) => {
  const slideContainer = document.createElement('div')
  slideContainer.classList.add('slide-container')

  images.map((image) => {
    const slide = document.createElement('div')
    slide.classList.add('slide')

    const picture = document.createElement('img')
    picture.setAttribute('src', `${image.url}`)
    picture.setAttribute('alt', `${image.alt}`)
    picture.classList.add('pictures')

    slide.appendChild(picture)
    slideContainer.appendChild(slide)
  })

  hook.appendChild(slideContainer)
}
