<template>
    <el-col :span="24" class="header">
        <el-col :span="10" class="logo logo-width">{{ sysName }}</el-col>
        <el-col :span="4" class="userinfo">
            <el-dropdown trigger="hover">
                <div class="avatar-wrapper">
                    <div class="avatar">{{sysUserName ? sysUserName[0] : ''}}</div>
                    <span class="username el-dropdown-link userinfo-inner">{{sysUserName}}</span>
                </div>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item :disabled="true">我的消息</el-dropdown-item>
                    <el-dropdown-item :disabled="true">设置</el-dropdown-item>
                    <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-col>
    </el-col>
</template>

<script>
    export default {
        name: "HeaderBar",
        props: {
            sysName: {
                type: String
            },
            sysUserName: {
                type: String
            }
        },
        methods: {
            logout: function () {
                this.$confirm('确认退出吗?', '提示', {}).then(() => {
                    this.$router.push('/login');
                }).catch(() => {

                });
            },
        }
    }
</script>

<style scoped lang="scss">
    .avatar-wrapper {
        padding-left: 8px;
        padding-right: 8px;
        height: 50px;
        flex: none;
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    .avatar {
        height: 36px;
        width: 36px;
        background-color: gray;
        flex: 0 0 36px;
        border-radius: 50px;
        float: left;
        text-align: center;
        line-height: 36px;
        color: #fff;
        font-weight: bold;
        font-size: 18px;
    }

    .username {
        margin-left: 16px;
        margin-right: 16px;
        float: left;
    }

    .userinfo {
        text-align: right;
        padding-right: 35px;
        float: right;
        .userinfo-inner {
            cursor: pointer;
            color: #fff;
        }
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
        width:180px;
    }
</style>
