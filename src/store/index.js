import { createStore } from 'vuex';
import axios from 'axios';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const apiURL = 'https://node-eomp-2.onrender.com';

export default createStore({
  state: {
    products: null,
    users: null,
    currentUser: null,
    product: null,
    isLoading: false 
  },
  mutations: {
    setProducts(state, value) {
      state.products = value;
    },
    setProduct(state, value) {
      state.product = value;
    },
    setUsers(state, value) {
      state.users = value;
    },
    setCurrentUser(state, value) {
      state.currentUser = value;
    },
    setLoading(state, value) {
      state.isLoading = value;
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      commit('setLoading', true); 
      try {
        const { data } = await axios.get(`${apiURL}/products`);
        commit('setProducts', data);
        toast.success("Products fetched successfully!");
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch products.");
      } finally {
        commit('setLoading', false); 
      }
    },
    async fetchProduct({ commit }, productId) {
      commit('setLoading', true); 
      try {
        const { data } = await axios.get(`${apiURL}/products/${productId}`);
        commit('setProduct', data);
        toast.success("Product fetched successfully!");
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch product.");
      } finally {
        commit('setLoading', false); 
      }
    },
    async fetchUsers({ commit }) {
      commit('setLoading', true); 
      try {
        const { data } = await axios.get(`${apiURL}/users`);
        commit('setUsers', data);
        toast.success("Users fetched successfully!");
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch users.");
      } finally {
        commit('setLoading', false); 
      }
    },
    async login({ commit }, credentials) {
      try {
        const { data } = await axios.post(`${apiURL}/login`, credentials);
        commit('setCurrentUser', data);
        toast.success("Login successful!");
      } catch (error) {
        console.error(error);
        toast.error("Login failed. Please check your credentials.");
      }
    },
    async register({ commit }, userData) {
      try {
        const { data } = await axios.post(`${apiURL}/register`, userData);
        commit('setCurrentUser', data);
        toast.success("Registration successful!");
      } catch (error) {
        console.error(error);
        toast.error("Registration failed. Please try again.");
      }
    }
  },
  getters: {
    recentProducts: state => {
      return state.products ? state.products.slice(0, 5) : [];
    },
    allUsers: state => {
      return state.users;
    },
    currentProduct: state => {
      return state.product;
    },
    currentUser: state => {
      return state.currentUser;
    },
    isLoading: state => state.isLoading 
  },
  modules: {}
});
