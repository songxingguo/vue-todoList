<template>
  <div id="app">
    你哈
    <Header></Header>
    <Todo></Todo>
    <Footer></Footer>
  </div>
</template>

<script>
  import  Header from './todo/header.vue'
  import  Footer from  './todo/footer.jsx'
  import  Todo from  './todo/todo.vue'

  export default {
      components: {
          Header,
          Footer,
          Todo,
      }
  }
</script>

<style lang="stylus" scoped>
  #app
    width 100%
    height 100%
    background url("../assets/images/bg.png") no-repeat
    background-position center
    background-size 100% 100%
</style>

