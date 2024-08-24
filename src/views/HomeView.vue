<template>
  <div class="container full-screen">
    <div class="background-gradient"></div>
    <video
      src="https://mapulecodes.github.io/fridayimages/images/banner3.mp4"
      class="video-fluid"
      autoplay
      loop
      muted
    ></video>
    <img
      src="https://mapulecodes.github.io/fridayimages/images/Banner.png"
      class="img-fluid"
      alt="Landing Image"
    />
    <div class="overlay-content">
      <h1 class="header">Zubayr & Mapule Pet Shop</h1>
      <router-link to="/products">
        <button class="btn btn-primary contact-btn">Shop Now</button>
      </router-link>
    </div>
    <div class="mobile-content">
      <h1 class="header">Zubayr & Mapule Pet Shop</h1>
      <a href="#products" class="btn btn-primary shop-btn">Shop Now</a>
    </div>
  </div>

  <!-- Shop By Section -->
  <div class="shop-by-section">
    <h2 class="section-title">Shop By</h2>
    <div class="shop-by-grid">
      <router-link to="/puppies" class="shop-by-item">
        <img
          src="https://mapulecodes.github.io/fridayimages/images/docategory.png"
          alt="Puppies"
        />
        <p>Puppies</p>
      </router-link>
      <router-link to="/cats" class="shop-by-item">
        <img
          src="https://mapulecodes.github.io/fridayimages/images/catcategory.png"
          alt="Cats"
        />
        <p>Cats</p>
      </router-link>
    </div>
  </div>

  <!-- Testimonials -->
  <div class="testimonials-section">
    <h2 class="section-title">What Our Customers Say</h2>
    <div class="testimonial-item">
      <img
        src="https://mapulecodes.github.io/fridayimages/images/susan.jpg"
        alt="Customer 1"
      />
      <p>"The best pet shop I've ever visited! The staff is amazing and so helpful."</p>
    </div>
    <div class="testimonial-item">
      <img
        src="https://mapulecodes.github.io/fridayimages/images/alex.jpg"
        alt="Customer 2"
      />
      <p>"I found the perfect kitten here. The service was outstanding, and the quality is unmatched."</p>
    </div>
  </div>

  <!-- Featured Products -->
  <div class="featured-products-section">
    <h2 class="section-title">Featured Products</h2>
    <div v-if="latestProducts && latestProducts.length" class="row gap-2 justify-content-center products-div">
      <div v-for="product in latestProducts" :key="product.prodID" class="product-item">
        <img :src="product.prodURL" alt="Product Image" class="prod-img">
        <h5>{{ product.prodName }}</h5>
        <p>R{{ product.amount }}</p>
      </div>
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import Spinner from '@/components/Spinner.vue'

export default {
  name: 'HomeView',
  components: {
    Spinner
  },
  data() {
    return {
      latestProducts: null
    };
  },
  async mounted() {
    await this.fetchLatestProducts();
  },
  methods: {
    async fetchLatestProducts() {
      try {
        await this.$store.dispatch('fetchProducts');
        const products = this.$store.getters.recentProducts;
        console.log('Fetched products:', products); 
        this.latestProducts = products.length > 2 ? products.slice(0, 2) : products;
      } catch (error) {
        console.error("Failed to fetch the latest products:", error);
      }
    }
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

.full-screen {
  height: calc(100vh - 56px);
  width: 100vw;
  position: relative;
  overflow: hidden;
}

.video-fluid {
  width: 100%;
  height: 90vh;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

.img-fluid {
  display: none;
}

.overlay-content {
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: white;
  padding: 20px;
  z-index: 10;
}

.header {
  font-size: 2rem;
  margin-bottom: 20px;
  color: white;
}

.contact-btn {
  font-size: 1.25rem;
}

.mobile-content {
  display: none;
}

.shop-by-section {
  padding: 40px 20px;
}

.section-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
}

.shop-by-grid {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.shop-by-item {
  text-align: center;
}

.shop-by-item img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
}

.testimonials-section {
  padding: 40px 20px;
  background: linear-gradient(to bottom right, #008080, #001F4D, #666e7a); 
  text-align: center;
}

.testimonial-item {
  margin-bottom: 20px;
}

.testimonial-item img {
  width: 100px; 
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
}

.testimonial-item p {
  font-size: 1.1rem;
  color: white;
}

.featured-products-section {
  padding: 40px 20px;
}

.product-item {
  text-align: center;
  margin: 0 auto; 
  display: flex;
  flex-direction: column;
  align-items: center; 
  perspective: 1000px; 
}

.prod-img {
  transition: transform 0.6s;
  transform-style: preserve-3d; 
}

.product-item:hover .prod-img {
  transform: rotateY(180deg); 
}

.prod-img {
  width: 200px;
  height: auto;
  border: 2px solid rgb(120, 32, 142); 
  display: block; 
}

@media screen and (max-width: 768px) {
  .video-fluid {
    display: none;
  }
  .img-fluid {
    display: block;
    width: 100%;
    height: auto;
    position: relative;
  }
  .overlay-content {
    display: none;
  }
  .mobile-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    color: white;
    text-align: center;
  }

  .shop-by-grid,
  .featured-products-grid {
    flex-direction: column;
    align-items: center;
  }

  .shop-by-item img,
  .prod-img {
    width: 100%;
    height: auto;
  }
}
</style>
