import axios from 'axios';
import { createStore } from 'vuex';
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const url = 'https://node-eomp-2.onrender.com';

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
      try {
        const data = await (await axios.get(`${url}/products`)).data;
        commit('setProducts', data);
        toast.success("Products fetched successfully!");
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch products.");
      }
    },
    async fetchUsers({ commit }) {
      try {
        const data = await (await axios.get(`${url}/users`)).data;
        commit('setUsers', data);
        toast.success("Users fetched successfully!");
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch users.");
      }
    },
    async login({ commit }, credentials) {
      try {
        const response = await axios.post(`${url}/login`, credentials);
        const user = response.data;
        commit('setCurrentUser', user);
        toast.success("Login successful!");
      } catch (error) {
        console.error(error);
        toast.error("Login failed. Please check your credentials.");
      }
    },
    async register({ commit }, userData) {
      try {
        const response = await axios.post(`${url}/register`, userData);
        const user = response.data;
        commit('setCurrentUser', user);
        toast.success("Registration successful!");
      } catch (error) {
        console.error(error);
        toast.error("Registration failed. Please try again.");
      }
    },
  },
  getters: {
    recentProducts: state => {
      return state.products ? state.products.slice(0, 5) : [];
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
