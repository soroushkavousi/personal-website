export default (context, inject) => {
  inject('clamp', clamp)
  inject('calculateCurrentY', calculateCurrentY)

  function clamp(num, min, max) {
    return num <= min ? min : num >= max ? max : num
  }

  function calculateCurrentY(cx, x1, x2, y1, y2) {
    let ratio = (cx - x1) / (x2 - x1)
    let yRange = y2 - y1
    let cy = ratio * yRange + y1
    return cy
  }
}
