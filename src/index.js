import avatar from './avatar.jpg'
import './index.css'

let img = new Image()
let root = document.getElementById('root')

img.src = avatar
img.classList.add('avatar')

root.append(img)