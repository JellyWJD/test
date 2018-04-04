import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

const state = {
  products: [
    // {
    //   name: "XXX",
    //   price: "123",
    //   id: "ID",
    //   count:1
    // }
  ]
}
const mutations = {
  ADD_STORE(state,item){
    var product = {
      name: item.name,
      price: item.price,
      id: item.id,
      count: 1
    }
    var products = state.products
    if(0 == products.length){
      products.push(product);
      return
    }
    for(var i=0;i < products.length;i ++){
      if(products[i].id == product.id){
        products[i].count ++;
        return
      }
    }
    products.push(product);
  },
  ADD(state,item){
    var products = state.products
    for(var i = 0;i < products.length;i ++){
      if(products[i].id == item.id){
        products[i].count ++;
      }
    }
  },
  DOWN(state,item){
    if(1 == item.count){
      return
    }
    var products = state.products
    for(var i = 0;i < products.length;i ++){
      if(products[i].id == item.id){
        products[i].count --;
      }
    }
  },
  DEL(state,item){
    var products = state.products
    for(var i = 0;i < products.length;i ++){
      if(products[i].id == item.id){
        products.splice(i,1)
      }
    }
  }
}
const actions = {

}
const getters = {
  total(state){
    var result = 0;
    var products = state.products;
    for(var i = 0;i < products.length;i++){
      result += products[i].count * products[i].price;
    }
    return result;
  },
  sum(state){
    var result = 0;
    var products = state.products;
    for(var i = 0;i < products.length;i++){
      result += Number(products[i].count)
    }
    return result;
  },
  products(state){
    return state.products
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})