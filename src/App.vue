<template>
  <div id="app">
    <go-top></go-top>
    <router-view/>
  </div>
</template>

<script>
import GoTop from './components/gotop/GoTop.vue'

export default {
  name: 'App',
  components:{
    "go-top": GoTop,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
