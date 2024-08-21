import { createStore } from 'vuex';
import axios from 'axios';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import router from '@/router';
import { useCookies } from 'vue3-cookies';

export default createStore({
  state: {
    products: [],
    user: null,
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const response = await axios.get('/api/products');
        commit('setProducts', response.data);
      } catch (error) {
        toast.error('Failed to fetch products.');
      }
    },
    async login({ commit }, credentials) {
      try {
        const response = await axios.post('/api/login', credentials);
        commit('setUser', response.data.user);
        useCookies().set('token', response.data.token);
        router.push('/');
        toast.success('Login successful!');
      } catch (error) {
        toast.error('Login failed.');
      }
    },
    logout({ commit }) {
      commit('setUser', null);
      useCookies().remove('token');
      router.push('/login');
      toast.info('Logged out successfully.');
    },
  },
  getters: {
    isLoggedIn(state) {
      return !!state.user;
    },
  },
});
