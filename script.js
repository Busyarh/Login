
document.querySelector('#button').addEventListener('click', function(e) {
  e.preventDefault()
  const errorMessage = document.querySelector('#err')
const passInput = document.querySelector('#pass')

// const passPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const passPattern = /bolaji_001/
const passValue = passInput.value 

if (!passPattern.test(passValue)) {
  passInput.classList.add('error')
  errorMessage.style.display = 'block'
} else {
  passInput.classList.remove('error')
  errorMessage.style.display = 'none' 
  window.location.href = 'https://busyarh.github.io/EPCB/';
}
})



