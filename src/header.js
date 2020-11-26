function Header() {
  var oRoot = document.getElementById('root')
  var createDiv = document.createElement('div')
  
  createDiv.innerHTML = 'Header'
  oRoot.append(createDiv)
}

module.exports = Header