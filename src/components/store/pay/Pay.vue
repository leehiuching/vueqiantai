<template>
    <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="请支付">
            <el-input  :value="price + '元'" disabled></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">确认支付</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
  data() {
    return {
      price: null,
      id: null
    };
  },
  methods: {
    onSubmit() {
      this.$http.get(this.$api.orderPay + this.id).then(res=>{
          if (res.data.status == 0) {
            this.$alert('感谢您为中国经济做了卓越贡献!!!');
          }
      })
    }
  },
  created () {
      this.price = this.$route.params.price;
      this.id = this.$route.params.id;
  }
};
</script>

<style scoped>

</style>