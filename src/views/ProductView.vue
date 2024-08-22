<template>
    <div class="container">
      <div class="row">
        <h2 class="display-2">Products</h2>
      </div>
      <div class="row gap-2 justify-content-center my-2" v-if="filteredProducts?.length">
        <!-- <Card v-for="product in sortedProducts" :key="product.productID">
          <template #cardHeader>
            {{ product.productURL }}
            <img :src="product.prodURL" loading="lazy" class="img-fluid" :alt="product.prodName">
          </template>
          <template #cardBody>
            <h5 class="card-title fw-bold">{{ product.prodName }}</h5>
            <p class="lead"><span class="text-success fw-bold">Amount</span>: R{{ product.amount }}</p>
            <div class="button-wrapper d-md-flex d-block justify-content-between">
              <router-link :to="{ name: 'product', params: { id: product.productID } }">
                <button class="btn btn-success">View</button>
              </router-link>
              <button class="btn btn-dark">Cart</button>
            </div>
          </template>
        </Card> -->
      </div>
      <div v-else>
        <Spinner />
      </div>
    </div>
  </template>
  
  <script>
  import Spinner from '@/components/Spinner.vue'
  
  export default {
    name: 'ProductList',
    components: {
      Spinner,
    }}

  // import { mapState } from 'vuex'
  // import Spinner from '@/components/Spinner.vue'
  // import Card from '@/components/Card.vue'
  
  // export default {
  //   name: 'ProductList',
  //   components: {
  //     Spinner,
  //     Card
  //   },
  //   data() {
  //     return {
  //       query: '',
  //       currentFilter: 'All',
  //       isAscending: true
  //     }
  //   },
  //   computed: {
  //     ...mapState({
  //       products: state => state.products
  //     }),
  //     filteredProducts() {
  //       return this.products.filter(product => 
  //         product.prodName.toLowerCase().includes(this.query.toLowerCase()) &&
  //         (this.currentFilter === 'All' || product.prodCat.toLowerCase() === this.currentFilter.toLowerCase())
  //       )
  //     },
  //     sortedProducts() {
  //       return this.filteredProducts.slice().sort((a, b) => {
  //         return this.isAscending
  //           ? a.prodName.localeCompare(b.prodName)
  //           : b.prodName.localeCompare(a.prodName)
  //       })
  //     }
  //   },
  //   methods: {
  //     toggleSort() {
  //       this.isAscending = !this.isAscending
  //     },
  //     changeFilter() {
  //       const filters = ['All', 'leash', 'vest']
  //       const currentIndex = filters.indexOf(this.currentFilter)
  //       this.currentFilter = filters[(currentIndex + 1) % filters.length]
  //     }
  //   },
  //   mounted() {
  //     this.$store.dispatch('fetchProducts')
  //   }
  // }
  </script>
  
  <style scoped>
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
    background-color: #28a745;
  }
  
  .btn-dark {
    background-color: #343a40;
  }
  
  .btn-success:hover, .btn-dark:hover {
    opacity: 0.8;
  }
  
  .spinner {
    margin-top: 20px;
  }
  </style>
  