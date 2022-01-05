// import createPersistedState from "vuex-persistedstate";

export const state = () => ({
  contactInfo: '',
  isMobile: false
})

export const mutations = {
  M_GET_CONTACT_INFO(state, info){
    state.contactInfo = info
    // console.log(info)
  }
}


// export const plugins = [
//   createPersistedState({
//     // 存储方式：localStorage、sessionStorage、cookies
//     storage: window.localStorage,
//     // 存储的 key 的key值
//     key: "store",
//     render(state) {
//       return { ...state };
//     }
//   })
// ]
