export const showSlide = (images) => {
  const imgs = document.querySelectorAll('.slides');

  let i = 3;
  const show = images.find((image) => image.id === i);
  console.log(show);
  const imgA = Array.from(imgs);
  console.log(imgA);
  console.log(imgA.find((img) => img.dataset.number === String(i)));
  const b = imgA.find((img) => img.dataset.number === String(i));
  b.classList.toggle('active');
};

// TODO: function for button to increment/decrement i
//        - until number in images array is 1 or max length
//
// TODO: fix showSlide
//
