<template>
    <el-container class="container">
        <el-header>
            <header-bar :routes="permission_routers"></header-bar>
        </el-header>
        <el-container class="main">
            <el-aside>
                <side-bar></side-bar>
            </el-aside>
            <el-container>
                <el-main>
                    <router-view></router-view>
                </el-main>
                <el-footer>Footer</el-footer>
            </el-container>
        </el-container>
    </el-container>
</template>

<script>
    import { mapGetters } from 'vuex';
    import SideBar from './components/SideBar'
    import HeaderBar from './components/HeaderBar'

    export default {
        name: "Home",
        data() {
            return {
                sysName: '平台',
                sysUserName: '测试',
            }
        },
        computed: {
            ...mapGetters([
                'permission_routers',
            ]),
        },
        components: {
            SideBar,
            HeaderBar,
        },
    }
</script>

<style scoped lang="scss">
    @import "../../styles/vars.scss";
    .el-aside {
        margin-top: 10px;
        /*color: #333;*/
        text-align: left;
        line-height: 30px;
        flex: 0 0 180px;
        width: 180px;
    }
    .el-main {
        background-color: #ffff;
        color: #333;
        text-align: center;
    }
    .container {
        position: absolute;
        top: 0px;
        bottom: 0px;
        width: 100%;
        .el-header {
            padding: 0 0px;
            height: 60px;
            line-height: 60px;
            background: #2c3e50;
            color:#fff;
            width: 100%;
        }
        .main {
            display: flex;
            position: absolute;
            top: 60px;
            bottom: 0px;
            overflow: hidden;
            width: 100%;
        }
    }
</style>
