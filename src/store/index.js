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

        console.log(state.users);
    }
  }
})
