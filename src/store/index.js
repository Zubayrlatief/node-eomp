import { createStore } from 'vuex';

export default createStore({
  state: {
    products: [], // Example state
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
  },
  actions: {
    fetchProducts({ commit }) {
      // Example action to fetch products
      fetch('/api/products')
        .then(response => response.json())
        .then(data => {
          commit('setProducts', data);
        });
    },
  },
  getters: {
    recentProducts: state => {
      return state.products.slice(0, 5); // Example: return the first 5 products
    },
  },
});
