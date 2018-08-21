<template>
  <div>
    <div v-show="frame_show">
      <div style="text-align: left; margin-bottom: 10px">
        <el-button @click="doPrintVue" type="primary" plain>打印</el-button>
      </div>
      <iframe id="frame" width=100% height=800 frameborder=0 scrolling=auto
              src="http://39.106.158.48/resume/"></iframe>
    </div>

    <el-dialog
      :visible.sync="dialogVisible"
      width="400px"
      :before-close="handleClose">
      <el-form :model="form" ref="form">
        <el-form-item label="数字验证" label-width="100px">
          <el-input v-model="form.check" style="width: 150px"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="handleCancel">取 消</el-button>
          <el-button type="primary" @click="handleCheck">确 定</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "Resume",
    data() {
      return {
        frame_show: false,
        dialogVisible: false,
        form: {
          check: '',
        }
      }
    },
    methods: {
      handleClose() {
        this.$router.go(-1)
      },
      handleCancel() {
        this.dialogVisible = false;
        this.handleClose();
      },
      handleCheck() {
        this.$refs.form.validate(valid => {
          if (valid) {
            if (this.form.check === '519007') {
              this.frame_show = true;
              this.dialogVisible = false;
            }
          }
        })
      },
      doPrintVue() {
        const iframe = document.getElementById('frame');
        iframe.contentWindow.focus();
        iframe.contentWindow.print();
      }
    },
    mounted() {
      this.dialogVisible = true;
    }
  }
</script>

<style scoped>

</style>
