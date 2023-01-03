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
  showSlide(pictures)
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

    const btnPrev = btnUi('prev')
    slide.appendChild(btnPrev)

    slide.appendChild(picture)

    const btnNext = btnUi('next')
    slide.appendChild(btnNext)

    slideContainer.appendChild(slide)
  })
  hook.appendChild(slideContainer)
}

const btnUi = (id) => {
  const btn = document.createElement('button')
  btn.setAttribute('type', 'button')
  btn.id = `btn-${id}`
  btn.classList.add('btn')

  if (id === 'next') {
    btn.innerHTML = `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M16,18H18V6H16M6,18L14.5,12L6,6V18Z" />
                    </svg>`
  } else {
    btn.innerHTML = `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M6,18V6H8V18H6M9.5,12L18,6V18L9.5,12Z" />
                    </svg>`
  }

  return btn
}

const showSlide = (images) => {
  const imgs = document.querySelectorAll('.slides')

  let i = 3
  const show = images.find((image) => image.id === i)
  console.log(show)
  const imgA = Array.from(imgs)
  console.log(imgA)
  console.log(imgA.find((img) => img.dataset.number === String(i)))
  const b = imgA.find((img) => img.dataset.number === String(i))
  b.classList.toggle('active')
}
