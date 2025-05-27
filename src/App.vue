<script setup>
import NavBar from './components/NavBarComponent.vue'
import Footer from './components/FooterComponent.vue'

</script>

<template>
  <header>
    <NavBar/>
  </header>
  <body class="bg-gray-100">
    <div>
      <router-view></router-view>
    </div>
  </body>
  <footer class="left-0 right-0 bottom-0 absolute">
    <Footer/>
  </footer>
</template>