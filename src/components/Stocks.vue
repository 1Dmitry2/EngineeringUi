<template>
    <div
      :class="{'disabled': activeButton !== 'Запасы'}">
        Запасы
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {PropType} from "vue";
import {filter} from "../types/filter.ts";
interface State{
    filter: filter[],
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
})
</script>

<style lang="scss" scoped>

.disabled {
    display: none;
}

</style>