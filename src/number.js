function number() {
  const number = document.createElement('div')
  number.setAttribute('id', 'number')
  number.innerHTML = 3000
  document.body.appendChild(number)
}

export default number