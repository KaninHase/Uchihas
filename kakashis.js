 const eye = document.querySelector('.eye');
const innerEye = document.querySelector('.eye .inner-eye');

eye.addEventListener('mouseover', () => {
eye.classList.add('animate-eye')
})

 eye.addEventListener('mouseleave', () => {
eye.classList.remove('animate-eye')
})

innerEye.addEventListener('mouseover', () => {
innerEye.classList.add('rotate-inner-eye')
})

innerEye.addEventListener('mouseleave', () => {
   innerEye.classList.remove('rotate-inner-eye') })
