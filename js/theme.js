document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('#themeInput')
  const switchTheme = ({ target: { checked } }) =>
    document.documentElement.setAttribute('data-theme', checked ? 'dark' : 'light')

  input.addEventListener('change', switchTheme)
})
