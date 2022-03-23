export const state = () => ({
  selectedPageIndex: 0,
  xs: 600,
  sm: 960,
  md: 1264,
  lg: 1904,
})

export const getters = {
  selectedPageIndex: (state) => {
    return state.selectedPageIndex
  },
  sm: (state) => {
    return state.sm
  },
}

export const mutations = {
  setSelectedPageIndex(state, index) {
    state.selectedPageIndex = index
  },
}
