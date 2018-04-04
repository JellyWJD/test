<template>
  <div id="app">
    <store-header></store-header>
    <router-view/>
  </div>
</template>

<script>
import storeHeader from "@/components/header"
export default {
  name: 'App',
  components: {
    storeHeader
  }
}
</script>

<style>
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
/*}*/
</style>
