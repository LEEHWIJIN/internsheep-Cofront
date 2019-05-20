<template>
  <section class="section1">
    <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">

            <h2 class="card-title text-center">Log In</h2>
            <form v-on:submit.prevent='login' class="form-signin">

              <div class="form-label-group">
                <input v-model="user.id" type="id" id="loginId" class="form-control1" placeholder="Id" required autofocus>
                <label for="loginId">Id</label>
              </div>

              <div class="form-label-group">
                <input v-model="user.password" type="password" id="inputPassword" class="form-control1"  placeholder="Password" required autofocus>
                <label for="inputPassword">Password</label>
              </div>

              <div class="custom-control custom-checkbox mb-3">
                <input type="checkbox" class="custom-control-input" id="customCheck1">
                <label class="custom-control-label" for="customCheck1">Remember password</label>
              </div>

              <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button><br>

              <div class="text-center">
                <router-link to="/signup" id="link">Sign Up</router-link>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
  <!-- <div class="container" style="  width: 380px;">
        <h1>Login</h1>
        <form v-on:submit.prevent='login'>
          ID: <input type="text" id="userId" v-model="userId" name="userId"><br>
          Password: <input type="password" id="password" v-model="password" name="password"><br>
          <input type="submit" id="login" value="login" />
        </form>
    </div> -->
  <!-- <div id="login">
    <div class="container" style="  width: 380px;">
        <h1>Login</h1>
        <form v-on:submit.prevent='login'>
            <input id="loginId" type="text" placeholder="ID" name="loginid" v-model="user.id" style="margin-top: 20px;"><br>
            <input type="password" name="loginpassword" placeholder="Password" v-model="user.password"><br>
            <input type="submit" value="login" id="form">

            <router-link to="/signup" id="link">Sign Up</router-link>
        </form>
    </div>
  </div> -->
</template>

<script>
  export default{
    name: 'login',
    data() {
      return {
        user:{
          id:'',
          password:'',
        },
      }
    },
    components: {

    },
    created(){

    },
    methods: {
      login() {
        this.$http.post('http://10.41.83.255:8888/auth/co/login',{user: this.user}).then((response)=>{
             alert('success');
             localStorage.setItem('token',response.data.token);
             this.$router.push({name: "Home"});
        },(error)=>{
            console.log('err')
            alert(error.response.data.error)
        }).catch(error=>{
            alert(error)
        })
        // this.$http.post('http://10.41.83.255:8888/aimsLogin/check',{userId: this.userId,password:this.password}).then((response)=>{
        //     alert('success');
        // },(error)=>{
        //     console.log('err')
        //     alert(error.response.data.error)
        // }).catch(error=>{
        //     alert(error)
        // })

      }
    }
  }
</script>

<style scoped>

:root {
  --input-padding-x: 1.5rem;
  --input-padding-y: .75rem;
}

.section1 {
  background-color: #007bff;
  background: linear-gradient(to right, #0062E6, #33AEFF);
  padding-bottom:150px;
  padding-top:150px;
  /* margin-bottom: 100px; */
}

.card-signin {
  border: 0;
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
}

.card-signin .card-title{
  margin-bottom: 2rem;
  font-weight: 300;
  font-size: 1.5rem;
}

.card-signin .card-body {
  padding: 3rem;
}

.form-signin {
  width: 100%;
}

.form-signin .btn {
  font-size: 80%;
  border-radius: 5rem;
  letter-spacing: .1rem;
  font-weight: bold;
  padding: 1rem;
  transition: all 0.2s;
}

.form-label-group {
  position: relative !important;
  margin-bottom: 1rem;
}

.form-label-group input {
  width : 100%;
  height: auto;
  border-radius: 1rem;
}

.form-label-group>input {
  /* padding: var(--input-padding-y) var(--input-padding-x); */
  padding: 0 1rem;

}

.form-label-group>label {
  /* padding: var(--input-padding-y) var(--input-padding-x); */
  padding: 0 1rem;
}

.form-label-group>label {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 80% !important;
  margin-bottom: 0;
  /* Override default `<label>` margin */
  line-height: 1.5;
  color: #495057;
  border: 1px solid transparent;
  border-radius: .25rem;
  transition: all .1s ease-in-out;
}

.form-label-group input::-webkit-input-placeholder {
  color: transparent;
}

.form-label-group input:-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-moz-placeholder {
  color: transparent;
}

.form-label-group input::placeholder {
  color: transparent;
}

.form-label-group input:not(:placeholder-shown) {
  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));
  padding-bottom: calc(var(--input-padding-y) / 3);
}

.form-label-group input:not(:placeholder-shown)~label {
  padding-top: calc(var(--input-padding-y) / 3);
  padding-bottom: calc(var(--input-padding-y) / 3);
  font-size: 0px;
  color: #777;
}
</style>
