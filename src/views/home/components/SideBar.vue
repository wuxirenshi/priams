<template>
    <div>
        <el-card>
            <div style="width: 100%;margin-left: -10px">
                <div style="text-align: center">博主信息</div>
                <div class="image_self"></div>
                <div class="introduce">网名: XXXX</div>
                <div class="introduce">职业: XXXX</div>
                <div class="introduce">籍贯: 江苏无锡</div>
                <div class="introduce">绰号: XXXX</div>
            </div>
        </el-card>
        <el-card class="box-card">
            <div v-show="isShow">
                <el-button class="introduce" @click="login">登录</el-button>
            </div>
            <div v-show="!isShow">
                <el-button class="introduce">设置</el-button>
            </div>
            <div v-show="!isShow">
                <el-button class="introduce" @click="logout">注销</el-button>
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isShow: true,
            }
        },
        name: "SideBar",
        props: {
        },
        methods: {
            login(){
                this.isShow = !this.isShow;
            },
            logout(){
                this.isShow = !this.isShow;
            }
        }
    }
</script>

<style scoped>
    .el-menu{
        height: 100%;
        text-align: left;
    }

    .image_self {
        height: 100px;
    }

    .box-card {
        margin-top: 10px;
    }

    .introduce {
        border-radius: 5px;
        width: 100%;
        background-color: #f2f6fc;
        margin-top: 5px;
        padding-left: 5px;
    }
</style>
