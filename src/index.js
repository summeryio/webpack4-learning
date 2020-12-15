document.addEventListener('click', () => {
  import('./click.js').then(({default: fn}) => {
    fn()
  })
})