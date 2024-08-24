<template>
  <div class="container">
    <div class="background-gradient"></div>
    <div class="row">
      <h2 class="display-2">Products</h2>
    </div>
    <div class="row justify-content-center my-2" v-if="allproducts?.length">
      <Card v-for="(product, index) in allproducts" :key="index">
        <template #cardHeader>
          <img :src="product.prodURL" loading="lazy" class="img-fluid" :alt="product.prodName">
        </template>
        <template #cardBody>
          <div class="product-info">
         
            <div class="product-details">
              <p>ID: {{ product.prodID }}</p>
              <p>Name: {{ product.prodName }}</p>
              <p>Category: {{ product.Category }}</p>
              <p>Quantity: {{ product.quantity }}</p>
              <p>Price: R {{ product.amount }}</p>
            </div>
            <updateProduct :product="product" />
          </div>
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
import Spinner from '@/components/Spinner.vue';
import store from '@/store';

export default {
  name: 'ProductList',
  components: {
    Spinner,
    Card
  },
  computed: {
    allproducts() {
      return store.state.products;
    }
  },
  methods: {
    products() {
      return store.state.products;
    }
  },
  mounted() {
    this.$store.dispatch('fetchProducts');
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
  background: linear-gradient(to bottom right, #008080, #001F4D, #666e7a, #554671, #3f1d5a); 
  z-index: -2;
}
.container {
  padding: 20px;
}
.img-fluid {
  max-width: 100%;
  height: auto;
}
.prod-img {
  max-width: 100px; 
  height: auto;
}
.product-info {
  display: flex;
  align-items: center;
}
.product-details {
  margin-left: 20px;
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
