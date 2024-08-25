<template>
  <div class="container pt-5 content">
    <div class="background-gradient"></div>
    <div class="row pt-5">
      <h2 class="headings heading">Product Details</h2>
    </div>
    <div class="row justify-content-center" v-if="product">
      <CardComp>
        <template #cardHeader>
            <img 
              :src="product.prodURL" 
              loading="lazy" 
              class="img-fluid prod-img" 
              :alt="product.prodName" />
          </template>
        
        <template #cardHearder>
          <h5 class="card-title"><b>{{ product.prodName }}</b></h5>
          <h5 class="card-description">{{ product.prodDescription }}</h5>
        </template>
        <template #cardBody>
            <div class="product-details">
              <p class="product-name">{{ product.prodName }}</p>
              <p class="product-price">R {{ product.amount }}</p>
            </div>
          </template>
      </CardComp>
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import CardComp from '@/components/Card.vue';
import Spinner from '@/components/Spinner.vue';

export default {
  name: 'ProductDetails',
  components: {
    CardComp,
    Spinner
  },
  computed: {
    productId() {
      return this.$route.params.id;
    },
    product() {
      return this.$store.state.products.find(p => p.prodID === parseInt(this.productId, 10));
    }
  },
  mounted() {
    if (!this.product) {
      this.$store.dispatch('fetchProduct', this.productId);
    }
  }
};
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
.headings {
  font-size: 2rem;
  font-weight: bold;
}
.prod-img {
  max-width: 100%; 
  height: 300px;
  object-fit: cover;
}
.card-title {
  font-size: 1.5rem;
  font-weight: bold;
}
.card-description {
  font-size: 1.2rem;
}
.card-footer {
  margin-top: 1rem;
}
.img-fluid {
  max-width: 100%;
  height: auto;
}
</style>
