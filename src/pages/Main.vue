<template>
    <div class="main">
        <h1 style="text-align: center; padding: 10px">СПРАВОЧНИК</h1>
        <div>
            <ButtonPage :active-button="activeButton" @set-page="setPage"/>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import ButtonPage from "../UI/ButtonPage.vue";
import {filter} from "../types/filter.ts";
interface State{
    activeButton: filter
}
export default defineComponent({
    components: {ButtonPage},
    data():State{
        return {
            activeButton: 'Цистерны'
        }
    },
    methods: {
        setPage(filter:filter){
            this.activeButton = filter
        }
    }
})
</script>

<style lang="scss" scoped>
.main{
    max-width: 1920px;
    padding-left: 10px;
    padding-right: 10px;
}
</style>