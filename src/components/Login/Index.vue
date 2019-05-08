<template>
  <div id="login">
    <div class="container" style="  width: 380px;">
        <h1>Login</h1>
        <form v-on:submit.prevent='login'>
          ID: <input type="text" id="userId" v-model="userId" name="userId"><br>
          Password: <input type="password" id="password" v-model="password" name="password"><br>
          <input type="submit" id="login" value="login" />
        </form>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'login',
    data() {
      return {
        userId:'',
        password:'',
      }
    },
    components: {

    },
    created(){

    },
    methods: {
      login() {
        this.$http.post('http://localhost:8888/aimsLogin/check',{userId: this.userId,password:this.password}).then((response)=>{
            alert('success');
        },(error)=>{
            console.log('err')
            alert(error.response.data.error)
        }).catch(error=>{
            alert(error)
        })
      }
    }
  }
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
