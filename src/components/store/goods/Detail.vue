<template>
    <div>
        <!-- 导航栏 -->
        <div class="section">
            <div class="location">
                <span>当前位置：</span>
                <router-link :to="{name: 'store'}">首页</router-link>
                <router-link :to="{name: 'goodsDetail',params: {id: this.id}}">商品详情</router-link>
            </div>
        </div>
        <!-- 商品详情 -->
        <div class="section">
            <div class="wrapper clearfix">
                <div class="wrap-box">
                    <!--页面左边-->
                    <div class="left-925">
                        <div class="goods-box clearfix">
                            <!--商品图片-->
                            <div class="pic-box">
                                <detail-view :imgList="detailData.imglist"></detail-view>
                            </div>
                            <!--/商品图片-->

                            <!--商品信息-->
                            <detail-info :goodsInfo="detailData.goodsinfo"></detail-info>
                            <!--/商品信息-->
                        </div>

                        <div id="goodsTabs" class="goods-tab bg-wrap">
                            <el-tabs value="first" type="card">
                                <el-tab-pane label="商品介绍" name="first">
                                    <!--选项内容-->
                                    <div class="tab-content entry" style="display:block;" v-html="detailData.goodsinfo.content"></div>
                                </el-tab-pane>
                                <el-tab-pane label="商品评论" name="second">
                                    <div class="tab-content" style="display: block;">
                                        <!--网友评论-->
                                        <!-- 为什么不直接在comment组件中设置tablename，由于这次只是做商城板块，但实际会有很多板块，而comment可以被其他板块调用，所以不能写死 -->
                                        <comment tablename="goods"></comment>
                                        <!--/网友评论-->
                                    </div>
                                </el-tab-pane>
                            </el-tabs>
                        </div>
                    </div>
                    <!--/页面左边-->

                    <!--页面右边-->
                    <div class="left-220">
                        <div class="bg-wrap nobg">
                            <div class="sidebar-box">
                                <h4>推荐商品</h4>
                                <slide-list :toplist="detailData.hotgoodslist"></slide-list>
                            </div>
                        </div>
                    </div>
                    <!--/页面右边-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SlideList from "../common/TopList";
import Comment from "../common/Comment";
import DetailInfo from "../common/DetailInfo";
import DetailView from "../common/DetailView";
export default {
    data () {
        return {
            id: null,
            detailData: {
                goodsinfo: {},
                imglist: [],
                hotgoodslist: [],
            }                
        }
    },
    components: {
        SlideList,
        Comment,
        DetailInfo,
        DetailView
    },
    methods: {
        getGoodsDetail(){
            this.$http.get(this.$api.goodsDetail + this.id).then(res=>{
                if (res.data.status == 0) {
                    this.detailData = res.data.message;
                }else {
                    this.$alert(res.data.message);
                }
            })
        }
    },
    watch: {
        $route(){
            this.id = this.$route.params.id;
            this.getGoodsDetail();
        }
    }
};
</script>

<style scoped>

</style>