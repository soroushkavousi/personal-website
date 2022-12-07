export const state = () => ({
  name: 'lg',
  xs: 640,
  sm: 800,
  md: 1280,
  lg: 1600,
  isXsOrDown: false,
  isSmOrDown: false,
  isMdOrDown: false,
  isLgOrDown: true,
})

export const mutations = {
  update(state, width) {
    let lastName = state.name
    if (width <= state.xs) state.name = 'xs'
    else if (width <= state.sm) state.name = 'sm'
    else if (width <= state.md) state.name = 'md'
    else if (width <= state.lg) state.name = 'lg'
    else state.name = 'xl'

    // if (state.name != lastName)
    //   console.log(`New Breakpoint: ${state.name} with width ${width}`)

    switch (state.name) {
      case 'xs':
        state.isXsOrDown = true
        state.isSmOrDown = true
        state.isMdOrDown = true
        state.isLgOrDown = true
        break
      case 'sm':
        state.isXsOrDown = false
        state.isSmOrDown = true
        state.isMdOrDown = true
        state.isLgOrDown = true
        break
      case 'md':
        state.isXsOrDown = false
        state.isSmOrDown = false
        state.isMdOrDown = true
        state.isLgOrDown = true
        break
      case 'lg':
        state.isXsOrDown = false
        state.isSmOrDown = false
        state.isMdOrDown = false
        state.isLgOrDown = true
        break
      case 'xl':
        state.isXsOrDown = false
        state.isSmOrDown = false
        state.isMdOrDown = false
        state.isLgOrDown = false
        break
    }
  },
}
