export default function (to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition
  }
  if (to.hash) {
    var hashSection = document.querySelector(to.hash)
    if (hashSection != null) {
      return window.scrollTo({
        top: hashSection.offsetTop,
        behavior: 'smooth',
      })
    }
  }
  return window.scrollTo({ top: 0, behavior: 'smooth' })
}
