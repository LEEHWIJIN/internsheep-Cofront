<template>
  <div id="base">
    <!-- navigation -->
      <div class="naviagtion fixed-top transition">
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-dark p-1">
          <a class="navbar-brand p-0" href="#" @click="goHome"><img src="images/logo/logo.png" style="filter: brightness(0) invert(1);"alt="Intern Sheep"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation"
              aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse text-center" id="navigation">
              <ul class="navbar-nav mr-auto">
                <!-- <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle text-white active text-capitalize" href="#"  data-toggle="dropdown"
                  aria-haspopup="true" aria-expan
                  ded="false" @click="goHome()">Home</a>
                  <div class="dropdown-menu">
                    <a class="dropdown-item text-color" href="homepage2.html">Homepage 2</a>
                    <a class="dropdown-item text-color" href="homepage3.html">Homepage 3</a>
                  </div>
                </li> -->
                <li class="nav-item">
                  <a class="nav-link text-white text-capitalize" href="#" @click="goApplyList">기업 목록</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white text-capitalize" href="#">공지 사항</a>
                </li>

              </ul>
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a v-if="auth == 2" class="nav-link text-white text-capitalize" href="#" @click="goAdminPage">관리자페이지</a>
                </li>
                <li v-if="auth!=0" class="nav-item dropdown">
                  <a class="name nav-link text-white text-capitalize dropdown-toggle" href="#" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false"><i class="fas fa-user-graduate mr-1 text-white"></i> {{user.name}}님</a>
                  <div class="dropdown-menu">
                    <a class="dropdown-item text-color" href="#" @click="goApply">공고 작성</a>
                    <a class="dropdown-item text-color" href="#" @click="goApplyNotice">공고 신청</a>
                    <a class="dropdown-item text-color" href="#" @click="goViewAppliedStudents">지원 학생 관리</a>
                    <a class="dropdown-item text-color" href="#">선발 학생 관리</a>
                    <a class="dropdown-item text-color" href="#" @click="goProfile">회원 정보 수정</a>
                  </div>
                </li>
              </ul>
              <a v-if="auth == 0" href="#" class="btn btn-outline-primary text-white ml-3" @click="goLogin">log in</a>
              <button v-if="auth !=0" class="btn btn-outline-primary text-white ml-3" @click="logout">log out</button>
            </div>
          </nav>
        </div>
      </div>
      <!-- nav part end -->
  </div>
</template>

<script>
  //import Vue from 'vue';
  //import VResume from './components/Resume/Index.vue';
  //import Vtest from '../test/test.vue'
  export default{
    name: 'app',
    data() {
      return {
        user:{},
        auth : 0,
      }
    },
    components: {
        //VResume
    },
    created(){
        if(localStorage.token){
          this.$http.get('http://106.10.46.121:8888/',{'headers': {authorization: `Bearer ${localStorage.token}`}}).then(res => {
              if(res.data.result==1){
                localStorage.removeItem('token')
                this.user={};
                this.auth=0;//로그인이 안 되어있는 상태
                return;
              }
              this.user={};
              this.user = res.data.user;
              if(this.user.loginId=="admin1234"){
                this.auth = 2;//admin인 상태
                return;
              }
              this.auth = 1;//로그인이 되어있는 상태

          })
        }
        else{
          this.user={};
          this.auth=0;
        }
    },
    beforeMount(){

    },
    methods: {
        goHome(){
            this.$router.push({name: "Home"})
        },
        goApply(){
        this.$router.push({name: "coApply"})
        },
        goApplyNotice(){
            this.$router.push({name: "ApplyNotice"})
        },
        goViewAppliedStudents(){
            this.$router.push({name: "ViewAppliedStudents"})
        },
        goLogin(){
            this.$router.push({name: "login"})
        },
        goApplyList(){
            this.$router.push({name: "Apply"})
        },
        goProfile(){
            this.$router.push({name: "Profile"})
        },
        logout(){
        localStorage.removeItem('token')
        this.auth = 0;
        this.$router.push('login')
        },
        // goAdminPage(){
        //   this.$router.push({name: "Admin"})
        // },
    }
  }
</script>

<style scoped>
.naviagtion {
  background: linear-gradient(80deg, #0030cc 0%, #00a4db 100%);
  padding: 10px 0;
}
.naviagtion.nav-bg {
  background: linear-gradient(80deg, #0030cc 0%, #00a4db 100%);
  padding: 1px 0;
}
.ul{
   list-style:none;
   padding-left:0px;
}
</style>
