<template>
  <el-row class="container">
    <c-header></c-header>
    <el-col :span="24" class="main">
      <c-navigation></c-navigation>
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
}
</style>
