import './style.css'

const button = document.createElement('button')
button.innerHTML = 'add'
document.body.appendChild(button)

button.addEventListener('click', () => {
  const div = document.createElement('div')
  div.innerHTML = 'item'
  document.body.append(div)
})