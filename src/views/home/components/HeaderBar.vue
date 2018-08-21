<template>
  <div style="width: 100%">
    <div class="logo-width">徐晓东个人博客</div>
    <div class="menu_bar">
      <el-menu
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :default-active="$route.path"
        mode="horizontal"
        class="el-menu-vertical-demo"
        router
        unique-opened>
        <template v-for="(item,index) in routes" v-if="!item.hidden">
          <el-submenu :index="index+''" v-if="!item.leaf&&item.children.length>0">
            <template slot="title">
              <i :class="item.iconCls"></i>
              <span>{{ item.name }}</span>
            </template>
            <el-menu-item :index="child.path" :key="child.path" v-for="child in item.children"
                          v-if="!child.hidden">
              <span slot="title">{{ child.name }}</span>
            </el-menu-item>
          </el-submenu>
          <el-menu-item :index="item.children[0].path" v-if="item.leaf&&item.children.length>0">
            <i :class="item.iconCls"></i>
            <span slot="title">{{ item.children[0].name }}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HeaderBar",
    props: {
      routes: {
        type: Array
      },
    },
  }
</script>

<style scoped lang="scss">
    .header {
        width: 100%;
    }

    .logo {
        height:60px;
        font-size: 22px;
        padding-left:20px;
        padding-right:20px;
        border-color: rgba(238,241,146,0.3);
        border-right-width: 1px;
        border-right-style: solid;
    }

    .logo-width{
        width: 180px;
        float: left;
    }

    .menu_bar {
        overflow: hidden;
    }
</style>
