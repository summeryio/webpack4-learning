// 设置 "useBuiltIns": "usage" 后无需引入
// import "core-js/stable";
// import "regenerator-runtime/runtime";

const arr = [
  new Promise(() => {}),
  new Promise(() => {}),
]

arr.map(item => {
  console.log(item);
})