module.exports = {
  data: function () {
    return {
      loading: false,
      disabled: false,
      sendm: '发送短信验证码',
      ruleForm: {
        username: 'admin',
        password: '123456',
        code: '0000'
      },
      rules: {
        username: [{
          required: true,
          message: '请输入用户名',
          trigger: 'blur'
        }],
        password: [{
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        }]
      }
    }
  },
  methods: {
    sendMessage (formName) {
      const self = this
      self.$refs[formName].validate((valid) => {
        if (valid) {
          // self.$http.get(self.$store.state.global.actionPath + 'admin/sendMessage?username=' + self.ruleForm.username).then(response => {
          //
          // }, response => {
          //   self.$message({
          //     message: '服务器异常',
          //     duration: 1000,
          //     type: 'error'
          //   })
          // })
        } else {
          return false
        }
      })
    },
    submitForm (formName) {
      const self = this
      self.$refs[formName].validate((valid) => {
        if (valid) {
          self.loading = true
          self.$http.post(self.$store.state.global.actionPath + 'a-login/cl', self.ruleForm).then(response => {
            self.$message({
              message: response.body.msg,
              duration: 1000,
              type: response.body.result,
              onClose: () => {
                self.loading = false
                if (response.body.result === 'success') {
                  const token = (response.body.user.token).toString()
                  try {
                    localStorage.setItem('token', token)
                    localStorage.setItem('power', response.body.user.power)
                  } catch (oException) {
                    if (oException.name === 'QuotaExceededError') {
                      localStorage.clear()
                      localStorage.setItem('token', token)
                      localStorage.setItem('power', response.body.user.power)
                    }
                  }
                  self.$router.push('/readme')
                }
              }
            })
          }, response => {
            this.$message({
              message: '服务器异常',
              duration: 1000,
              type: 'error'
            })
          })
        } else {
          return false
        }
      })
    }
  }
}
