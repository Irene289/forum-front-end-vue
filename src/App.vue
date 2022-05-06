<template>
  <div id="restaurant-forum">
    <Navbar />
    <main 
      role="main"
      class="mt-5 bg-white"
    >
      <router-view/>
    </main>
  </div>
</template>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'

export default {
  components: {
    // 把 Navbar component 登記到 components 屬性裡
    // Navbar: Navbar, 簡寫成以下
    Navbar
  }
}
</script>

<style scoped>
  main {
    margin-top: 65px !important;
  }
</style>