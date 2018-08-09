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
        <el-button class="introduce" @click="loginFormVisible = true">登录</el-button>
      </div>
      <div v-show="!isShow">
        <el-button class="introduce">设置</el-button>
      </div>
      <div v-show="!isShow">
        <el-button class="introduce" @click="logout">注销</el-button>
      </div>
    </el-card>

    <login :visible="loginFormVisible" @visible-change="visible_change" @status-change="status_change"></login>

  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import Login from './Login'
  import {login} from '../../../api/api'

  export default {
    data() {
      return {
        isShow: this.$store.getters.show,
        loginFormVisible: false,
      }
    },
    components: {
      Login
    },
    name: "SideBar",
    props: {},
    computed: {
      ...mapGetters([
        'show',
      ]),
    },
    watch: {
      show(val){
        this.isShow = val;
      }
    },
    methods: {
      logout() {
        localStorage.clear();
        this.$store.dispatch('clearUser');
      },
      visible_change(val) {
        this.loginFormVisible = val
      },
      async status_change(param, val) {
        let token;
        await login(param).then(res => {
          if (res.code === 200) {
            token = res.token;
            localStorage.setItem('token', token);
          }
          if (res.code === 400) {
            this.$message.warning(res.msg)
          }
        });
        this.loginFormVisible = val;
        const user_token = {token: token};
        this.$store.dispatch('updateUser', user_token);
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
