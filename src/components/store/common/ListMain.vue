<template>
    <div>
        <div class="section" v-for="item in main" :key="item.level1cateid">
            <!--子类-->
            <div class="main-tit">
                <h2>{{item.catetitle}}</h2>
                <p>
                    <router-link to="" v-for="item2 in item.level2catelist" :key="item2.subcateid">
                        {{item2.subcatetitle}}
                    </router-link>
                    <router-link to="">
                        更多<i>+</i>
                    </router-link>
                </p>
            </div>
            <!--/子类-->
            <div class="wrapper clearfix">
                <div class="wrap-box">
                    <ul class="img-list">
                        <li v-for="itemData in item.datas" :key="itemData.artID">
                            <router-link :to="{name: 'goodsDetail',params: {id: itemData.artID }}">
                                <div class="img-box">
                                    <img :src="itemData.img_url">
                                </div>
                                <div class="info">
                                    <h3>{{itemData.artTitle}}</h3>
                                    <p class="price">
                                        <b>¥{{itemData.sell_price}}</b>元</p>
                                    <p>
                                        <strong>库存 {{itemData.stock_quantity}}</strong>
                                        <span>市场价：
                                            <s>{{itemData.market_price}}</s>
                                        </span>
                                    </p>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      main: [
        {
          level1cateid: "",
          catetitle: "",
          level2catelist: [],
          datas: []
        }
      ]
    };
  },
  methods: {
    getMain() {
      this.$http.get(this.$api.goodsContent).then(res => {
        if (res.data.status == 0) {  
          this.main = res.data.message;
        } else {
          this.$alert(res.data.message);
        }
      });
    }
  },
  created() {
    this.getMain();
  }
};
</script>

<style scoped>

</style>