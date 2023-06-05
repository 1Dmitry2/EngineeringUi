<template>
  <button
          @click="setPage(filters)"
          v-for="filters in filter"
          key="filters"
          class="button__page"
          :class="{'button__page-active': activeButton === filters}">
      {{filters}}
  </button>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {PropType} from "vue";
import {filter} from "../types/filter.ts";
interface State{
    filter: filter[]
}
export default defineComponent({
    props: {
        activeButton:{
            type: String as PropType<filter>,
            required:true
        }
    },
    data():State{
        return {
            filter:['Цистерны','Грузы','Запасы']
        }
    },
    methods: {
        setPage(filter:filter){
            this.$emit('setPage',filter)
        }
    },
    emits:{
        setPage:(filter: filter) => filter
    }
})
</script>

<style lang="scss" scoped>
.button{
  &__page{
    border-radius: 4px 4px 0px 0px;
    border-width: 0px 0px 1px 0px;
    border-style: solid;
    border-color: #DEE2E6;
    cursor: pointer;
    padding: 8px 28px;
    background: none;
    font-size: 16px;
  }
  &__page-active{
    border-width: 1px 1px 0px 1px;
    border-style: solid;
    border-color: #DEE2E6;
    color: #4472C4;
  }
}
</style>