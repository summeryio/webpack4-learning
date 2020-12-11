
// 异步 async 引入lodash
// function getComponent() {
//   return import(/*webpackChunkName: 'lodash'*/'lodash').then(({default: _}) => {
//     let element = document.createElement('div')
//     element.innerHTML = _.join(['aaa', 'bbb', 'ccc'], '|')
//     return element
//   })
// }

// getComponent().then(element => {
//   document.body.appendChild(element)
// })


// 同步 引入lodash
import _ from 'lodash'
let element = document.createElement('div')
element.innerHTML = _.join(['aaa', 'bbb', 'ccc'], '|')
document.body.appendChild(element)