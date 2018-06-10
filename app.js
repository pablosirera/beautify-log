window.onload = function() {
  let style = `
    background-color: black;
    color: #bada55;
    padding: 45%;
  `

  beautyLog.new('nuevo', style)

  style = `
    color: white;
    padding:20px;
  `
  beautyLog.error('Error 🆘', style)
}