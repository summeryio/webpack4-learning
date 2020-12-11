
function getComponent() {
  return import('lodash').then(({default: _}) => {
    let element = document.createElement('div')
    element.innerHTML = _.join(['aaa', 'bbb', 'ccc'], '|')
    return element
  })
}

getComponent().then(element => {
  document.body.appendChild(element)
})