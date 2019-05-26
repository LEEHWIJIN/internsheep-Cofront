<template>
  <section class="section1">
    <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="" style="text-align: center;">
          <a class="" href="#" @click="goHome"><img src="images/login.png" style="text-align: center; filter: brightness(0) invert(1);"alt="Intern Sheep"></a>
        </div>
        <div class="card card-signin my-5">
          <div class="card-body">

            <!-- <form v-on:submit.prevent='signup'>
                <label style="font-size: 20px"><input type="text" name="signname" v-model="user.name">Name :</label><br>
                <label style="font-size: 20px">ID : </label><input type="text" name="signid" v-model="user.id">
                <input class="duplicate" type="button" v-on:click="dupcheck" value="중복확인"><br>
                <label style="font-size: 20px">Password: </label> <input type="password" name="signpassword" v-model="user.password">
                <input type="submit" value="Sign Up">
            </form> -->

            <h2 class="card-title text-center">Sign Up</h2>
            <form v-on:submit.prevent='signup' class="form-signin">

              <div class="form-label-group">
                <input v-model="user.name" type="text" id="signupName" class="form-control1" placeholder="Id" required autofocus>
                <label for="signupName">Name</label>
              </div>

              <!-- <div class="form-label-group">
                <div class="row">
                  <div class="col-lg-8">
                    <input v-model="user.id" type="signid" id="signupId" class="form-control1" placeholder="Id" required autofocus>
                    <label for="signupId">Id</label>
                  </div>
                  <div class="col-lg-4">
                    <input class="btn btn-sm btn-white" type="button" v-on:click="dupcheck" value="중복확인"><br>
                  </div>
                </div>
              </div> -->

              <div class="form-label-group">
                <input v-model="user.id" type="signid" id="signupId" class="form-control1" placeholder="Id" required autofocus>
                <label for="signupId">Id</label>
                <input class="btn btn-sm btn-white" type="button" v-on:click="dupcheck" value="중복확인"><br>
              </div>

              <div class="form-label-group">
                <input v-model="user.password" type="password" name="signpassword" id="inputPassword" class="form-control1"  placeholder="Password" required autofocus>
                <label for="inputPassword">Password</label>
              </div>

              <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign up</button><br>

            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
    <!-- <div class="signup" style="  width: 380px;">
        <h1>Sign Up</h1>
        <form v-on:submit.prevent='signup'>
            <input type="text" name="signname" v-model="user.name"><label style="font-size: 20px">Name :</label><br>
            <label style="font-size: 20px">ID : </label><input type="text" name="signid" v-model="user.id">
            <input class="duplicate" type="button" v-on:click="dupcheck" value="중복확인"><br>
            <label style="font-size: 20px">Password: </label> <input type="password" name="signpassword" v-model="user.password">
            <input type="submit" value="Sign Up">
        </form>
    </div> -->
</template>

<script>
export default {
    data() {
        return{
            user :{
                name:"",
                id:"",
                password:""
            },
            Isuniq: -1,//중복확인 안했을 때
            email: ""
        }
    },
    created(){

    },
    methods:{
        goHome(){
            this.$router.push({name: "Home"})
        },
        signup(){
            if(this.Isuniq==-1) alert("중복을 확인하지 않았습니다. 확인하세요")
            else if(this.Isuniq == 1) alert("중복입니다.")
            else if(this.Isuniq==0){
                this.$http.post('http://localhost:8888/auth/co/signup', {user: this.user}).then((response) => {
                    if(response.data.result == 1){
                        this.$router.push('/login');
                    }
                    else
                    {
                      alert(response.data)
                    }
                    //console.log(response) //response가 있으면 error 가 있는것.
                },(error)=>{
                console.log('err')
                alert(error.response)
                })
            }
        },
        dupcheck(){
            this.$http.get('http://localhost:8888/auth/co/dupcheck', {params:{id : this.user.id}}).then((res)=>{
            if(res.data.result == 0) {//중복아닐때
                alert("사용 가능한 아이디 입니다.")
                this.Isuniq = 0;
            }
            else{
                alert("중복입니다.")
                this.Isuniq = 1;
            }
        },(error)=>{
            console.log('err')
            alert(error.response.data.error)
            })
        }
    }
}
</script>
<style scoped>
    /* .signup{
        margin-left: 200px;
        margin-top: 200px;
    }
    .duplicate{
        padding-top: 5px;
        padding-bottom: 5px;
        border-radius: 50px;
        background: white;
        border: none;
        display: block;
        margin: 0 auto;
        width: 25%;
        color: rgba(54, 54, 54, 0.51);
        text-transform: uppercase;
        font-weight: 700;
        letter-spacing: 1.05px;
    } */


    :root {
      --input-padding-x: 1.5rem;
      --input-padding-y: .75rem;
    }

    .section1 {
      background-color: #007bff;
      background: linear-gradient(to right, #0062E6, #33AEFF);
      padding-bottom:150px;
      padding-top:150px;
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
