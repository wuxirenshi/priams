<template>
    <el-menu :default-active="$route.path" class="el-menu-vertical-demo" router unique-opened>
        <template v-for="(item,index) in routes" v-if="!item.hidden">
            <el-submenu :index="index+''" v-if="!item.leaf&&item.children.length>0">
                <template slot="title">
                    <i :class="item.iconCls"></i>
                    <span>{{ item.name }}</span>
                </template>
                <el-menu-item :index="child.path" :key="child.path" v-for="child in item.children" v-if="!child.hidden">
                    <span slot="title">{{ child.name }}</span>
                </el-menu-item>
            </el-submenu>
            <el-menu-item :index="item.children[0].path" v-if="item.leaf&&item.children.length>0">
                <i :class="item.iconCls"></i>
                <span slot="title">{{ item.children[0].name }}</span>
            </el-menu-item>
        </template>
    </el-menu>
</template>

<script>
    export default {
        name: "SideBar",
        props: {
            routes: {
                type: Array
            },
        },
    }
</script>

<style scoped>
    .el-menu{
        height: 100%;
        text-align: left;
    }
</style>
