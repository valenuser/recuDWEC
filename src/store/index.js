import { createStore } from 'vuex'
import {inmuebles} from './data'
export default createStore({
  state: {
    inmuebles:inmuebles,
    users:[],
    user:''
  },
  mutations: {
  }
})
