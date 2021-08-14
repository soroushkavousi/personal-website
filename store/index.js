export const state = () => ({
  selectedPageIndex: 0,
})

export const getters = {
  selectedPageIndex: (state) => {
    return state.selectedPageIndex
  },
}

export const mutations = {
  setSelectedPageIndex(state, index) {
    state.selectedPageIndex = index
  },
}
