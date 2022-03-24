export default (context, inject) => {
  inject('clamp', clamp)
  inject('logBreakpoint', logBreakpoint)
  inject('calculateCurrentY', calculateCurrentY)

  function clamp(num, min, max) {
    return num <= min ? min : num >= max ? max : num
  }

  let lastBreakpointName = ''
  function logBreakpoint(currentBreakpointName) {
    console.log(`lastBreakpointName: ${lastBreakpointName}`)
    if (currentBreakpointName == lastBreakpointName) return
    lastBreakpointName = currentBreakpointName
    console.log(`Breakpoint CHANGED: ${currentBreakpointName}`)
  }

  function calculateCurrentY(cx, x1, x2, y1, y2) {
    let ratio = (cx - x1) / (x2 - x1)
    let yRange = y2 - y1
    let cy = ratio * yRange + y1
    console.log(
      `cx: ${cx} | (x1, x2): (${x1}, ${x2}) | (y1, y2): (${y1}, ${y2}) | ratio: ${ratio} | yRange: ${yRange} | cy ${cy}`
    )
    return cy
  }
}
