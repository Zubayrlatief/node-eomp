<template>
  <div class="wrapper">
    <NavBar/>
    <main class="container-fluid">
      <router-view />
          <Footer />
    </main>
  
  </div>
  
</template>
<script>

import Footer from '@/components/Footer.vue'
import NavBar from '@/components/NavBar.vue'


export default {
  components: {

    Footer,
    NavBar

  

  }

}
</script>
<style src="@/assets/css/style.css">
</style>