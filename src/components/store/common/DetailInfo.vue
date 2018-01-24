<template>
    <div class="goods-spec">
        <h1>{{goodsInfo.title}}</h1>
        <p class="subtitle">{{goodsInfo.sub_title}}</p>
        <div class="spec-box">
            <dl>
                <dt>货号</dt>
                <dd id="commodityGoodsNo">{{goodsInfo.goods_no}}</dd>
            </dl>
            <dl>
                <dt>市场价</dt>
                <dd>
                    <s id="commodityMarketPrice">¥{{goodsInfo.market_price}}</s>
                </dd>
            </dl>
            <dl>
                <dt>销售价</dt>
                <dd>
                    <em class="price" id="commoditySellPrice">¥{{goodsInfo.sell_price}}</em>
                </dd>
            </dl>
        </div>

        <div class="spec-box">
            <dl>
                <dt>购买数量</dt>
                <dd>
                    <el-input-number size="mini" v-model="num7"></el-input-number>
                    <span class="stock-txt">
                        <span>库存</span>
                        <em id="commodityStockNum">{{goodsInfo.stock_quantity}}</em>件
                    </span>
                </dd>
            </dl>
            <dl>
                <dd>
                    <div class="btn-buy" id="buyButton">
                        <button class="buy">立即购买</button>
                        <button class="add" @click="add">加入购物车</button>
                    </div>
                </dd>
            </dl>
        </div>

    </div>
</template>

<script>
export default {
    props: ['goodsInfo'],
    data () {
        return {
            num7: 0
        }
    },
    methods: {
        add(){
            this.$store.commit('modifyShopping',{
                id: this.$route.params.id,
                count: this.num7 + (this.$store.state.shopping[this.$route.params.id] || 0)
            })
        }
    }
};
</script>

<style scoped>

</style>