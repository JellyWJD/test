<template>
  <div class="container-fluid">
    <h2>你的购物车</h2>
      <div class="alert alert-warning" v-show="sum == 0">这个购物车中没有商品
          <router-link to="/" class="alert-link">点击返回商品目录</router-link>
      </div>
      <div v-show="sum != 0">
        <table class="table">
          <thead>
            <tr>
              <th>数量</th>
              <th>商品名称</th>
              <th class="text-right">单价</th>
              <th class="small_count">小计</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in products">
              <td class="text-center store-number">
                <div class="input-group">
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-default" @click="down(item)"> - </button>
                  </div>
                  <input type="number" min="1" disabled class="form-control" v-model="item.count"/>
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-default" @click="add(item)"> + </button>
                  </div>
                </div>
              </td>
              <td class="text-left">{{ item.name }}</td>
              <td class="text-right">￥{{ item.price }}</td>
              <td class="text-right">
                {{ item.count * item.price }}
                <button type="button" class="btn btn-sm btn-warning" @click="del(item)">删除</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  </div>
</template>
<script type="text/javascript">
  export default {
    methods: {
      down(item){
        this.$store.commit("DOWN",item)
      },
      add(item){
        this.$store.commit("ADD",item)
      },
      del(item){
        this.$store.commit("DEL",item)
      }
    },
    computed: {
      sum(){
        return this.$store.getters.sum
      },
      products(){
        return this.$store.getters.products
      }
    }
  }
</script>
<style type="text/css">
  .store-number{
    width: 20%;
  }
  .small_count{
    text-align: center;

  }
</style>