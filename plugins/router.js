import Config from '../assets/js/settings'

export default function ({ $axios, store, app }) {
  app.router.beforeEach((to, from, next) => {
    // to and from are both route objects. must call `next`.
    $axios.get(Config.BASE_URL + '/info').then(res => {
      // console.log(res.data.data)
     
      store.commit('M_GET_CONTACT_INFO', res.data.data)
      next()
    })
  })
}