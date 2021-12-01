export default function({$axios, store, app}){
  app.router.beforeEach((to, from, next) => {
    // to and from are both route objects. must call `next`.
    $axios.get('https://api.youddian.com/api/contactConfig').then(res => {
      store.commit('M_GET_CONTACT_INFO', res.data.data)
      next()
    })
  })
}