<template>
    <el-container class="container">
        <el-header>
            <header-bar :sysName="sysName" :sysUserName="sysUserName"></header-bar>
        </el-header>
        <el-container class="main">
            <el-aside>
                <side-bar :routes="permission_routers"></side-bar>
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
        components: {
            SideBar,
            HeaderBar,
        },
        computed: {
            ...mapGetters([
                'permission_routers',
            ]),
        },
    }
</script>

<style scoped lang="scss">
    @import '../../styles/vars.scss';

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
        flex: 0 0 200px;
        width: 200px;
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
            height: 60px;
            line-height: 60px;
            background: $color-primary;
            color:#fff;
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
