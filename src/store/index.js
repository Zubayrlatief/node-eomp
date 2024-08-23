import axios from 'axios';
import { createStore } from 'vuex';

const url = 'https://node-eomp-2.onrender.com'

export default createStore({
  state: {
    products: null,
    users: null,
    currentUser: null,
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setUsers(state, users) {
      state.users = users;
    },
    setCurrentUser(state, user) {
      state.currentUser = user;
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      console.log('i tried');
      
      // fetch products
      try {
        console.log('here');
        
        const data = await (await axios.get(`${url}/products`)).data
        console.log(data);
        commit('setProducts', data);
      } catch (error) {
        console.log(error)
      }
    },
    async fetchUsers({ commit }) {
      try {
        const data = await (await axios.get(`${url}/users`)).data
        console.log(data);
        commit('setUsers', data);
      } catch (error) {
        console.log(error)
      }
    },
    async login({ commit }, credentials) {
      try {
        const response = await axios.post(`${url}/login`, credentials)
        const user = response.data
        commit('setCurrentUser', user)
      } catch (error) {
        console.log(error)
      }
    },
    async register({ commit }, userData) {
      try {
        const response = await axios.post(`${url}/register`, userData)
        const user = response.data
        commit('setCurrentUser', user)
      } catch (error) {
        console.log(error)
      }
    },
  },
  getters: {
    recentProducts: state => {
      return state.products.slice(0, 5); //  return the first 5 products
    },
    allUsers: state => {
      return state.users;
    },
    isLoggedIn: state => {
      return state.currentUser !== null;
    },
    currentUser: state => {
      return state.currentUser;
    },
  },
});