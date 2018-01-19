<template>
    <div>
        <!-- 递归：自己调用自己 -->
        <router-link to="" v-for="subitem in subcates" :key="subitem.id">
            {{subitem.title}}
            <app-category v-if="subitem.subcates && subitem.subcates.length != 0" :subcates="subitem.subcates"></app-category>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "app-category",
        props: ['subcates']
    }
</script>

<style scoped>

</style>