import avatar from './avatar.jpg'
import style from './index.scss'

let img = new Image()
let root = document.getElementById('root')

img.src = avatar
img.classList.add(style.avatar)

root.append(img)