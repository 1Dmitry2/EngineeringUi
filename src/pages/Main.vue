<template>
    <div class="main">
        <h1 style="text-align: center; padding: 10px">СПРАВОЧНИК</h1>
        <div>
            <ButtonPage  :active-button="activeButton" @set-page="setPage"/>
        </div>
        <Tanks :active-button="activeButton" />
        <Cargo :active-button="activeButton"/>
        <Stocks :active-button="activeButton" />

    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import ButtonPage from "../UI/ButtonPage.vue";
import {filter} from "../types/filter.ts";
import Tanks from "../components/Tanks.vue";
import Stocks from "../components/Stocks.vue";
import Cargo from "../components/Cargo.vue";

interface State{
    activeButton: filter,
}
export default defineComponent({
    components: {
        Tanks,
        Stocks,
        Cargo,
        ButtonPage,
    },
    data():State{
        return {
            activeButton: 'Цистерны',
        }
    },
    methods: {
        setPage(filter:filter){
            this.activeButton = filter
        },
    },
})
</script>

<style lang="scss" scoped>
.main{
    max-width: 1920px;
    padding-left: 10px;
    padding-right: 10px;
}
</style>