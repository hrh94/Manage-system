<template>
  <div class="wrapper">
    <v-head :parentName="parentName" :parentAvatar="parentAvatar"></v-head>
    <v-sidebar></v-sidebar>
    <div class="content">
      <transition name="move" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>
<script>
  import vHead from './header.vue'
  import vSidebar from './sidebar.vue'

  export default {
    data () {
      return {
        parentName: '',
        parentAvatar: ''
      }
    },
    created: function () {
      let self = this

      self.$http.get(self.$store.state.global.actionPath + 'a-user').then(response => {
        if (response.body.result === 'success') {
          this.parentName = response.body.user.name
          this.parentAvatar = this.$store.state.global.actionPath + 'avatar/' + response.body.user.avatar
        } else {
          self.$message({
            type: response.body.result,
            message: response.body.msg,
            duration: 1000
          })
        }
      }, response => {
        if (response.status === 401) {
          this.$router.push('/login')
          self.$message({
            type: response.body.result,
            message: response.body.msg,
            duration: 3000
          })
        } else {
          self.$message({
            message: '服务器异常',
            duration: 1000,
            type: 'error',
            onClose: () => {
              this.$router.push('/login')
            }
          })
        }
      })
    },
    components: {
      vHead,
      vSidebar
    }
  }
</script>
