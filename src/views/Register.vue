<template>
  <div class="container">
    <el-form
      class="formContainer"
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      size="mini"
      label-width="100px"
    >
      <el-form-item label="账号" prop="code">
        <el-input v-model="ruleForm.code" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="ruleForm.email" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="name">
        <el-input v-model="ruleForm.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="电话" prop="phone">
        <el-input v-model="ruleForm.phone" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="rePassword">
        <el-input type="password" v-model="ruleForm.rePassword" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="goToReg">注册</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        password: "",
        code: "",
        email: "",
        phone: "",
        name: "",
        rePassword: ""
      },
      rules: {
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" }
        ],
        code: [{ required: true, message: "账号不能为空", trigger: "blur" }]
      }
    };
  },

  created() {},

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.axios.post("/api/login/in", this.ruleForm).then(res => {
            console.log(res);
          });
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    goToReg() {}
  }
};
</script>



<style lang="sass" scoped>
.container
  display:flex,
  align-items:center,
  justify-content:center,
  .formContainer
    width:50%,
    min-width:300px,

</style>