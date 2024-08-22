<template>
  <div class="container full-screen">
    <video src="https://mapulecodes.github.io/fridayimages/images/banner3.mp4" class="video-fluid" autoplay loop muted></video>
    <img src="https://mapulecodes.github.io/fridayimages/images/Banner.png" class="img-fluid" alt="Landing Image">
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

  <!-- Section -->
  <div class="shop-by-section">
    <h2 class="section-title">Shop By</h2>
    <div class="shop-by-grid">
      <router-link to="/puppies" class="shop-by-item">
        <img src="https://mapulecodes.github.io/fridayimages/images/puppy.jpg" alt="Puppies">
        <p>Puppies</p>
      </router-link>
      <router-link to="/cats" class="shop-by-item">
        <img src="https://mapulecodes.github.io/fridayimages/images/cat.jpg" alt="Cats">
        <p>Cats</p>
      </router-link>
    </div>
  </div>

``  <!-- Testimonials -->
  <div class="testimonials-section">
    <h2 class="section-title">What Our Customers Say</h2>
  
  </div>

  <!-- Featured Products -->
  <div class="featured-products-section">
    <h2 class="section-title">Featured Products</h2>
    <div class="featured-products-grid">
      <router-link to="/products/1" class="featured-product-item">
        <img src="https://mapulecodes.github.io/fridayimages/images/product1.jpg" alt="Product 1">
        <p>Product 1</p>
      </router-link>
      <router-link to="/products/2" class="featured-product-item">
        <img src="https://mapulecodes.github.io/fridayimages/images/product2.jpg" alt="Product 2">
        <p>Product 2</p>
      </router-link>
      <!-- products -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<style scoped>
.full-screen {
  height: calc(100vh - 56px); 
  width: 100vw;
  position: relative;
  overflow: hidden;
}

.video-fluid {
  width: 100%;
  height: calc(100vh - 56px);
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

.shop-by-item p {
  margin-top: 10px;
  font-size: 1.2rem;
}

.testimonials-section,
.featured-products-section {
  padding: 40px 20px;
}

.featured-products-grid {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.featured-product-item {
  text-align: center;
}

.featured-product-item img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
}

.featured-product-item p {
  margin-top: 10px;
  font-size: 1.2rem;
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
  .featured-product-item img {
    width: 100%;
    height: auto;
  }
}
</style>
