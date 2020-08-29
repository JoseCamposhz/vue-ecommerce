import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  mutations,
  getters: {
    total: state => {
      const reducer = (acc, currentValue) => acc + currentValue.product_price * currentValue.product_count;
      const res = state.shoppingCart.reduce(reducer, 0);
      return res;
    }
  },
  actions: {}
})

export default store