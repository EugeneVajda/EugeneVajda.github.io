<template>
  <div id="app">
    <Subscribtions/>
  </div>
</template>

<script>
import Subscribtions from './components/Subscribtions'

export default {
  name: 'App',
  components: {
    Subscribtions
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
