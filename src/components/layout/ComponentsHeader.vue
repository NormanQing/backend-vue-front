<template>
  <el-col :span="24" class="header">
    <el-col :span="10" class="logo" :class="collapsed?'logo-collapse-width':'logo-width'">
      管理中心
    </el-col>
    <el-col :span="10">
      <div class="tools" @click.prevent="collapse">
				<i class="el-icon-tickets"></i>
			</div>
    </el-col>
    <el-col :span="4" class="user-info">
      <el-dropdown>
        <span class="el-dropdown-link user-info-inner">
          <img src="../../../static/img/user/user3-128x128.jpg" />
          admin
        </span>
         <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>我的消息</el-dropdown-item>
          <el-dropdown-item>设置</el-dropdown-item>
          <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-col>
</template>

<script>
export default {
  methods: {
    logout () {
      console.log('退出')
    }
  }
}
</script>

<style lang="less">
@import "../../assets/css/element-variables.less";
.header{
  height: @headerHeight;
  line-height: @headerLineHeight;
  background: @headerBackgroundColor;
  color: @headerFontColor;
  .logo{
    height: @headerHeight;
    font-size: 22px;
    padding-left: 20px;
    padding-right: 20px;
    border-color: hsla(62,77%,76%,0.3);
    border-right-width: 1px;
    border-right-style: solid;
    img{
      width: 40px;
      float: left;
      margin: 10px 10px 10px 18px;
    }
  }
  .logo-width{
		width:230px;
	}
	.logo-collapse-width{
		width:60px
	}
  .tools{
    padding: 0px 23px;
    width: 14px;
    height: @headerHeight;
    line-height: @headerLineHeight;
    cursor: pointer;
    color: @headerFontColor
  }
  .user-info{
    text-align: right;
    float: right;
    padding-right: 35px;
    .user-info-inner{
      cursor: pointer;
      color: @headerFontColor;
      img{
        width: 40px;
        height: 40px;
        border-radius: 20px;
        float:right;
        margin: 10px 0px 10px 10px;
      }
    }
  }
}
</style>
