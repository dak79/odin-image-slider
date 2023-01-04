export const slideUi = (hook, images) => {
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
  btn.classList.add('slide-btns')

  if (id === 'next') {
    btn.innerHTML = `<svg id ="btn-${id}" style="width:24px;height:24px" viewBox="0 0 24 24">
                      <path id ="btn-${id}" fill="currentColor" d="M16,18H18V6H16M6,18L14.5,12L6,6V18Z" />
                    </svg>`
  } else {
    btn.innerHTML = `<svg id ="btn-${id}" style="width:24px;height:24px" viewBox="0 0 24 24">
                      <path id ="btn-${id}" fill="currentColor" d="M6,18V6H8V18H6M9.5,12L18,6V18L9.5,12Z" />
                    </svg>`
  }

  return btn
}
