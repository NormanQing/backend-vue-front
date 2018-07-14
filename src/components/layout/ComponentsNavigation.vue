<template>
  <el-aside width="230px">
    <el-menu
      :unique-opened="true"
      class="el-menu-vertical-demo"
      router
      background-color="#2b3f54"
      text-color="#fff"
      active-text-color="#ffd04b"
      model="horizontal"
      :collapse="isCollapse"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item index="1-0">选项0</el-menu-item>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  computed: {
    isCollapse () {
      return this.$store.state.collapsed
    }
  },
  methods: {
    collapse () {
      this.$store.commit('CHANGE_COLLAPS')
    }
  }
}
</script>

<style lang="less">
aside {
  flex: 0 0 230px;
  width: 230px;
}
</style>
