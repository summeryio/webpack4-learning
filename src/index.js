async function getComponent() {
  const {default: _} = await import(/*webpackChunkName: 'lodash'*/'lodash')
  let element = document.createElement('div')
  element.innerHTML = _.join(['aaa', 'bbb', 'cccdd'], '|')
  return element
}

document.addEventListener('click', () => {
  getComponent().then(element => {
    document.body.appendChild(element)
  })
})