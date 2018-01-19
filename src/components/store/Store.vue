<template>
    <div>
        <appHeader></appHeader>
        <router-view></router-view>
        <appFooter></appFooter>
    </div>
</template>

<script>
import appFooter from "./common/Footer";
import appHeader from "./common/Header";
    export default {
        components: {
            appFooter,
            appHeader
        }
    }
</script>

<style scoped>

</style>