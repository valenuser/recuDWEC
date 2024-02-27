import { createStore } from 'vuex'
import {data} from './data'
export default createStore({
  state: {
    data:data,
    users:[],
    user:''
  },
  mutations: {
  }
})
