import axios from 'axios';
import { createStore } from 'vuex';

const url = 'https://node-eomp-2.onrender.com'

export default createStore({
  state: {
    products: null, // Example state
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
  },
  actions: {
     async fetchProducts({ commit }) {
      console.log('i tried');
      
      // Example action to fetch products
      try {
        console.log('here');
        
        const data = await (await axios.get(`${url}/products`)).data
        console.log(data);
        commit('setProducts', data);
      } catch (error) {
        console.log(error)
      }


      

      
    },
  },
  getters: {
    recentProducts: state => {
      return state.products.slice(0, 5); // Example: return the first 5 products
    },
  },
});
