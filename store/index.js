export const state = () => ({
  section: '#none',
  manualSection: '',
})

export const getters = {}

export const mutations = {
  setSection(state, { section, isManual }) {
    if (isManual) {
      state.manualSection = section
      state.section = section
    } else {
      if (state.manualSection == '') {
        state.section = section
      } else {
        // Only consider IntersectionObserver When manual section scrolling finished
        if (section == state.manualSection) state.manualSection = ''
      }
    }
  },
}
