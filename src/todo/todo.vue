<template>
    <div class="real-app">
        <input
          type="text"
          class="add-input"
          autofocus="autofocus"
          placeholder="接下来要做什么？"
          @keyup:enter="addTodo"
        />
        <Item :todo="todo"></Item>
        <Tabs :filter="filter"></Tabs>
    </div>
</template>

<script>
    import  Item from './todo/item.vue'
    import  Tabs from './todo/tabs.vue'

    export default {
        data() {
          return {
              todo: {
                  id: 0,
                  content: 'this is todo',
                  completed: false
              },
              filter: 'all'
          }
        },
        components: {
            Item,
            Tabs
        },
        methods: {
            addTodo() {

            }
        }
    }
</script>

<style lang="stylus" scoped>

</style>