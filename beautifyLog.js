window.beautyLog = (function () {
  return {
    new: (text, style) => {
      console.log(`%c${text}`, style)
    },
    error: (text, style) => {
      console.error(`%c${text}`, style)
    }
  }
}());