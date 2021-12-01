export const state = () => ({
  contactInfo: ''
})

export const mutations = {
  M_GET_CONTACT_INFO(state, info){
    state.contactInfo = info
    // console.log(info)
  }
}

// export const actions = {
//   GET_CONTACT_INFO(s){
//     console.log(s)
//     // commit('M_GET_CONTACT_INFO')
//   }
// }