<template>
    <div class="container">
      <div class="background-gradient"></div>
      <div class="row">
        <h2 class="display-2">Products</h2>
      </div>
      <div class="row justify-content-center my-2" v-if="allproducts?.length">
        <!-- <p v-for="(prod, index) in allproducts" :key="index" > {{ prod.prodName }}</p> -->

        <Card v-for="(product, index) in allproducts" :key="index">
          <template #cardHeader>
            
            <img :src="product.prodURL" loading="lazy" class="img-fluid" :alt="product.prodName">
          </template>
          <template #cardBody>
            <h2>{{product.prodName}}</h2>


          </template>
        </Card>
      </div>
      <div v-else>
        <Spinner />
      </div>
    </div>
  </template>
  
  <script>
  
  import Card from '@/components/Card.vue';
import Spinner from '@/components/Spinner.vue'
  import store from '@/store'
  
  export default {
    name: 'ProductList',
    components: {
      Spinner,
      Card
    },

    computed : {
      allproducts(){
        return store.state.products
      }
    },
    
    methods: {

      products(){
        return store.state.products
      }
     
    },
    mounted() {
      this.$store.dispatch('fetchProducts')
    }
  
  }

  </script>
  
  <style scoped>
  .background-gradient {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:  linear-gradient(to bottom right, #008080, #001F4D,#666e7a,#554671 ,#3f1d5a); 
  z-index: -2;
}
  .container {
    padding: 20px;
  }
  
  .img-fluid {
    max-width: 100%;
    height: auto;
  }
  
  .button-wrapper button {
    margin: 5px;
  }
  
  .btn-success {
    background-color: #280e39;
  }
  
  .btn-dark {
    background-color: #1b4774;
  }
  
  .btn-success:hover, .btn-dark:hover {
    opacity: 0.8;
  }
  
  .spinner {
    margin-top: 20px;
  }
  </style>
  