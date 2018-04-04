<template>
  <div class="container-fluid">
    <div class="navbar navbar-inverse">
      <router-link to="./" class="navbar-brand">商店商品</router-link>
      <div class="navbar-right">
        <div class="navbar-text"><b>你的购物车</b> {{ sum }} 件，￥ {{ total }}.00元</div>
        <router-link to="/cart" class="btn btn-default navbar-btn">购物车</router-link>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default {
    computed: {
      total(){
        return this.$store.getters.total
      },
      sum(){
        return this.$store.getters.sum
      }
    }
  }
</script>
<style type="text/css">
  .navbar-right{
    float: right;
    margin-right: 5px;
  }
  .navbar-text{
    margin-right: 10px;
  }
</style>