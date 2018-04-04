<template>
  <div class="container-fluid">
    <div class="panel panel-default row">
      <div class="col-xs-3">
        <a href="#" class="btn btn-block btn-default btn-lg" @click="changeCategory('all')">所有商品</a>
        <a href="#" class="btn btn-block btn-default btn-lg" @click="changeCategory(item)" v-bind:class="{active: item == selectedCategory}" v-for="(item,index) in categorys">{{ item }}</a>
      </div>
      <div class="col-xs-9">
        <div class="well" v-for="(item,index) in nowProducts">
          <h3><strong>{{ item.name }}</strong><span class="pull-right label label-primary">￥{{ item.price }}.00</span></h3>
          <div class="desciption">
            <span class="lead">{{ item.description }}</span>
            <button class="btn btn-success pull-right" @click="addStore(item)">添加到购物车</button>
          </div>
        </div>
        <div class="pull-right btn-group">
          <a class="btn btn-default" v-bind:class="{'btn-primary': item == activePage}" v-for="(item,index) in pageNum" @click="changePage(item)">{{ item }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
    var pageSize = 3;
    export default {
      data(){
        return {
          products: [],
          selectedCategory: null,
          activePage: 1
        }
      },
      created(){
        this.$http.get('/products')
             .then(jsonData => {
               this.products = jsonData.body;
               console.log(this.products)
             })
      },
      methods: {
        addStore(item){
          this.$store.commit("ADD_STORE",item)
        },
        changeCategory(category){
          if(category == 'all'){
            this.selectedCategory = null
          }else{
            this.selectedCategory = category
          }
          this.activePage = 1;
        },
        changePage(newPage){
          this.activePage = newPage;
        }
      },
      computed: {
        categorys () {
          var results = []
          var keys = {}
          for (var i = 0;i < this.products.length; i ++){
            var category = this.products[i]["category"];
            if(!keys.hasOwnProperty(category)){
              keys[category] = true
              results.push(category)
            }
          }
          console.log(category)
          return results
        },
        productList () {
          if(this.selectedCategory == null){
            return this.products
          }else {
            return this.products.filter(item => this.selectedCategory == item.category)
          }
        },
        nowProducts () {
          var startProduct = (this.activePage - 1) * pageSize;
          return this.productList.slice(startProduct,startProduct + pageSize);

        },
        pageNum(){
          return Math.ceil(this.productList.length / pageSize)
        }
      }
    }
</script>

<style type="text/css">
    .panel{
        border: none;
    }
</style>