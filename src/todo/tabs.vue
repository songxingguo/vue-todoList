<template>
    <div class="helper">
        <span class="left">2 items left</span>
        <span class="tabs">
            <span
              v-for="state in states"
              :key="state"
              :class="['state', filter ===  state ?  'actived' : '']"
              @click="toggleFilter(state)"
            >
                {{state}}
            </span>
        </span>
        <span class="clear" @click="clearAllCompleted"> Clear Completed</span>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                states: ['all', 'active', 'completed']
            }
        },
        methods: {
            clearAllCompleted() {

            },
            toggleFilter() {

            }
        }
    }
</script>

<style lang="stylus" scoped>

</style>