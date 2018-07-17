<template>
  <el-row class="container">
    <c-header></c-header>
    <el-col :span="24" class="main">
      <c-navigation></c-navigation>
      <section class="content-container">
        <div class="grid-content bg-purple-light">
          <el-col :span="24">
            <strong class="title">{{$route.name}}</strong>
            <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
              <el-breadcrumb-item>活动列表</el-breadcrumb-item>
              <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>
          </el-col>
          <el-col :span="24" class="content-wrapper">
            <transition name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
          </el-col>
        </div>
      </section>
    </el-col>
  </el-row>
</template>

<script>
import CHeader from '../../components/layout/ComponentsHeader'
import CNavigation from '../../components/layout/ComponentsNavigation'

export default {
  components: { CHeader, CNavigation }
}
</script>

<style lang="less">
@import "../../assets/css/element-variables.less";
.container{
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  .main{
    display: flex;
    position: absolute;
    top:60px;
    bottom: 0px;
    overflow: hidden;
  }
  .content-container{
    flex:1;
    overflow-y: scroll;
    padding: 20px;
    .breadcrumb-container{
      .content-wrapper{
        background: red;
        box-sizing: border-box;
      }
    }
  }
}
</style>
