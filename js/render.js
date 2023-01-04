import { slideUi } from './ui.js'
import { slideShow } from './slider.js'

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
  let firstImgId = 1
  slideUi(hook, pictures)
  slideShow(pictures, firstImgId, true)
}
