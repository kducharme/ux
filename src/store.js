import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    SET_PRODUCTS: (state, products) => {
      state.products = products;
    }
  },
  actions: {
    getProducts(context) {
      fetch(`http://localhost:3000/products`)
        .then(r => r.json())
        .then(products => {
          context.commit("SET_PRODUCTS", products);
        });
    },
  }
})
