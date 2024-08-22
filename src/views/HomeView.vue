<template>
  <div class="container full-screen">
    <video src="https://mapulecodes.github.io/fridayimages/images/banner2v.mp4" class="video-fluid" autoplay loop muted></video>
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
</template>

<script>
export default {
  name: 'HomeView'
}
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
  height: 100%;
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
  top: 0;
  left: 0;
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
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
  }
}
</style>
