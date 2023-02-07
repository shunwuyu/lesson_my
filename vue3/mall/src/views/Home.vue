<template>
    <div id="home-wrapper">
        <header class="home-header wrap">
            <router-link to="/category">
                <i class="nbicon nbmenu2"></i>
            </router-link>
            <div class="header-search">
                <span class="app-name">新蜂商城</span>
                <i class="nbicon nbSearch"></i>
                <router-link 
                    class="search-title"
                    to="/product-list?from=home"
                >
                山河无恙，人间皆安
                </router-link>
            </div>
            <router-link class="login" to="/login">登录</router-link>
        </header>
        <!-- <SubHeader /> -->
    </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import { getHomeData } from '../service/home' 
// import SubHeader from '../components/SubHeader.vue'
// es8  异步的高级能力 async await 
// 挂载后再发送api 请求， 提升性能， 不会去争抢挂载显示
// data 
const state = reactive({
    swiperList: []
})

onMounted(async () => { // 使用了异步同步化的高级技巧
    const { data } = await getHomeData() //  await  promise  api serverice
    console.log(data)
    state.swiperList = data.data.carousels
    // console.log(state.swiperList)
})
</script>

<style lang="stylus" scoped>
@import '../common/style/mixin'
// 可以一次性设置widht height 的mixin 混合
// stylus 提供的tab 缩进 css 提供了模块化的能力？  
.home-header
    position absolute
    top 0
    left 0    
    line-height 1.33333rem
    padding 0 .4rem
    font-size 0.4rem
    color #fff
    z-index 10000
    wh(100%, 1.33333rem)
    fj()
    .nbmenu2
        color $primary
    .header-search 
        display flex
        width 74%
        box-sizing content-box
        height 0.53333rem
        line-height 0.53333rem
        margin 0.26667rem 0
        padding 0.1333rem 0
        color #232326
        border-radius .53333rem
        background rgba(255, 255, 255, .7)
        .app-name
            padding 0 0.26667rem
            color $primary
            font-size 0.53333rem
            font-weight bold
            border-right .026667rem solid #666
        .icon-search
            padding 0 .26667rem
            font-size .45333rem
        .search-title
            font-size .32rem
            color #666
            line-height 0.56rem
    .login
        color $primary
        line-height 1.38667rem
</style>