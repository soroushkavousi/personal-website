export const state = () => ({
  section: 'ABOUT',
})

export const getters = {}

export const mutations = {
  setSection(state, section) {
    state.section = section
  },
}
