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

export default {
  components: {

    Footer

  

  }

}
</script>
<style src="@/assets/css/style.css">
</style>