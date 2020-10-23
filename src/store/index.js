import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
  },
  mutations: {
    authUser(state, userData) {
      state.idToken = userData.token;
      state.userId = userData.userId;
    },
  },
  actions: {
    // signup({commit}, authData){
    //   axios.post('/ffyokrn',{
    //     email: authData.email,
    //     password:authData.password,
    //     returnSecureToken : true
    //   })
    //   .then(res =>
    //     commit('authUser',)).catch(error => console.log(error))
    // },
    // login({commit}, authData){
    //   axios.post('dfsdf',{
    //     email: authData.email,
    //     password: authData.passeotf,
    //     returnSecureToken:true
    //   })
    // module.exports.hell = ( event, context, callback = {
    //   const response = {
    //     statusCode : 200,
    //     body : JSON.stringify({
    //       message : 'Go Serverless V1.0 !
    //       YOur function executed successfully successfully!'
    //     })
    //   }
    // })
    //   // you can access
    //   // this.$store.dispatch('signup',{email})
    // }
  },
  modules: {},
});
