import { createStore } from 'vuex'
import {inmuebles} from './data'
export default createStore({
  state: {
    inmuebles:inmuebles,
    users:[],
    user:'',
    ids:1
  },
  mutations: {
    REGISTER_USER(state,user){
        const data = {
          ...user,
          id:state.ids
        }

        state.users.push(data)

        state.ids = state.ids + 1

    },
    LOGIN_USER(state,user){
      state.user = user
    },
    ADD_RESERVE(state,data){
      const piso = state.inmuebles.find( el => el.id == data.id)
      state.inmuebles[state.inmuebles.indexOf(piso)].fechasOcupadas.push(data.date)
      console.log(state.inmuebles[state.inmuebles.indexOf(piso)]);
    }
  }
})
