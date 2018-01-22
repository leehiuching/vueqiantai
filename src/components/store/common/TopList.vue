<template>
    <ul class="side-img-list">
        <li v-for="(item,index) in toplist" :key="item.id">
            <div class="img-box">
                <label>{{index}}</label>
                <img :src="item.img_url">
            </div>
            <div class="txt-box">
                <router-link :to="{name: 'goodsDetail',params: {id: item.id}}">{{item.title}}</router-link>
                <span>{{item.add_time | date}}</span>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
  props: ["toplist"]
};
</script>

<style scoped>

</style>