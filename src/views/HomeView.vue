<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <footer-component></footer-component>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import FooterComponent from '@/components/FooterComponent.vue'
export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    FooterComponent

  }
}
</script>
