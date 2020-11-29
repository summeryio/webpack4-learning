function counter() {
  const counter = document.createElement('div')
  counter.setAttribute('id', 'counter')

  counter.innerHTML = 1
  counter.addEventListener('click', () => {
    counter.innerHTML = parseInt(counter.innerHTML) + 1
  })
  document.body.appendChild(counter)
}

export default counter