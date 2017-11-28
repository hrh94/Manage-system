<template>
  <div class="sidebar">
    <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" background-color="#2E363F" text-color="#f2f2f2" active-text-color="#ffd04b" router>
      <el-menu-item index="readme">
        <i class="el-icon-setting"></i>管理中心
      </el-menu-item>
      <el-submenu index="1" v-show="isAdmin">
        <template slot="title"><i class="el-icon-menu"></i>模块A</template>
        <el-menu-item index="/tempaa" v-show="isAdmin">模块A功能A</el-menu-item>
        <el-menu-item index="/tempab" v-show="isAdmin">模块A功能B</el-menu-item>
        <el-menu-item index="/tempac" v-show="isAdmin">模块A功能C</el-menu-item>
      </el-submenu>
      <el-submenu index="2" v-show="isAdmin">
        <template slot="title"><i class="el-icon-location"></i>模块B</template>
        <el-menu-item index="/tempba" v-show="isAdmin">模块B功能A</el-menu-item>
        <el-menu-item index="/tempbb" v-show="isAdmin">模块B功能B</el-menu-item>
        <el-menu-item index="/tempbc" v-show="isAdmin">模块B功能C</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
  export default {
    data: function () {
      return {
        power: [],
        isAdmin: false
      }
    },
    created: function () {
      let powerArray = localStorage.getItem('power')
      console.log(powerArray)
      if (powerArray === '-1') {
        this.isAdmin = true
        console.log(this.isAdmin)
      } else {}
    },
    computed: {
      onRoutes () {
        let path = this.$route.path.split('/')[1]
        return '/' + path
      }
    }
  }
</script>
<style scoped>
  .sidebar {
    display: block;
    position: absolute;
    width: 250px;
    left: 0;
    top: 70px;
    bottom: 0;
    background: #2E363F;
  }

  .sidebar > ul {
    height: 100%;
    background: #2E363F;
    color: #ffffff !important;
  }

  .sidebar > ul > li {
    color: #F2F2F2 !important;
  }

  .sidebar > ul > li > div {
    color: #F2F2F2 !important;
  }

  .fa {
    margin-right: 10px;
  }

  .el-menu-item i{
    color:#F2F2F2;
  }

  .el-submenu i{
    color:#F2F2F2;
  }

  .el-submenu>div{
    color:#F2F2F2;
  }

</style>
