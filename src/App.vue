<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab">
      <div class="tab-item border-1px">
        <router-link class="link" to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link class="link" to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link class="link" to="/sellers">商家</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import VHeader from './components/header/VHeader'
export default {
  name: 'App',
  components: {
    VHeader
  }
}
</script>

<style lang="stylus">
  @import "./common/stylus/mixin.styl"
  #app
    .tab
      display flex
      width 100%
      height 40px
      line-height 40px
      border-1px(rgba(7, 17, 27, .1))
      .tab-item
        flex 1
        text-align center
        .link
          display block
          font-size 14px
          color rgb(77, 85, 93)
          &.router-link-active
            color: rgb(240, 20, 20)
</style>
