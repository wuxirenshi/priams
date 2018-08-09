<template>
    <el-dialog :visible.sync="dialogVisible" width="450px">
        <el-form :model="ruleForm" :rules="ruleForm" ref="ruleForm" label-position="left" label-width="0px"
                 class="demo-ruleForm login-container">
            <h3 class="title">系统登录</h3>
            <el-form-item prop="account">
                <el-input type="text" v-model="ruleForm.account" auto-complete="off" placeholder="账号"></el-input>
            </el-form-item>
            <el-form-item prop="checkPass">
                <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off" placeholder="密码"></el-input>
            </el-form-item>
            <el-form-item style="width:100%;">
                <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit">登录</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        ruleForm: {
          account: '',
          checkPass: '',
        },
        dialogVisible: this.visible
      }
    },
    watch: {
      visible(val) {
        this.dialogVisible = val;
      },
      dialogVisible(val) {
        this.$emit("visible-change", val);
      }
    },
    props: ['visible'],
    methods: {
      handleSubmit() {
        const param = {account: this.ruleForm.account, password: this.ruleForm.checkPass};
        this.$emit('status-change', param);
      }
    }
  }
</script>

<style scoped>

</style>
