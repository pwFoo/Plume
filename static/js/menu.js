// It should normally be working fine even without this code
// But :focus-within is not yet supported by Webkit/Blink

const button = document.getElementById('menu')
const menu = document.getElementById('content')

button.addEventListener('click', () => {
  menu.classList.add('show')
})

menu.addEventListener('click', () => {
  menu.classList.remove('show')
})
