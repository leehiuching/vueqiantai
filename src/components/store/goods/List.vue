<template>
  <div class="section">
    <div class="location">
      <span>当前位置：</span>
      <router-link to="/goods/list">首页</router-link>
    </div>
    <list-top></list-top>
    <list-main></list-main>
  </div>
</template>

<script>
import ListMain from "../common/ListMain";
import ListTop from "../common/ListTop";
export default {
  components: {
    ListTop,
    ListMain
  }
};
</script>

<style>

</style>
