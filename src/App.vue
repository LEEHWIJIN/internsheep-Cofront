<template>
  <div id="app">
    <!-- navigation -->
      <div class="naviagtion fixed-top transition">
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-dark p-0">
            <!-- <a class="navbar-brand p-0" href="index.html"><img src="images/logo/logo.png" alt="Agico"></a> -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation"
              aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse text-center" id="navigation">
              <ul class="navbar-nav mx-auto">
                <li class="nav-item">
                  <a class="nav-link text-white text-capitalize" href="about.html">about</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white text-capitalize" href="services.html">services</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link text-white text-capitalize dropdown-toggle" href="#" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">pages</a>
                  <div class="dropdown-menu">
                    <a class="dropdown-item text-color" href="team.html">Our Team</a>
                    <a class="dropdown-item text-color" href="pricing.html">Our Pricing</a>
                    <a class="dropdown-item text-color" href="career.html">Our Career</a>
                  </div>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white text-capitalize" href="blog.html">blog</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white text-capitalize" href="contact.html">contact</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link text-white text-capitalize dropdown-toggle" href="#" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">(주)AJOU company</a>
                  <div class="dropdown-menu">
                    <a class="dropdown-item text-color" href="#"><router-link :to="{name: 'Apply'}">공고 관리</router-link></a>
                    <a class="dropdown-item text-color" href="#"><router-link :to="{name: 'ViewAppliedStudents'}">지원 학생 관리</router-link></a>
                    <a class="dropdown-item text-color" href="career.html">선발 학생 관리</a>
                    <a class="dropdown-item text-color" href="team.html">회원 정보 수정</a>
                  </div>
                </li>
              </ul>
              <!-- <a href="#" class="btn btn-outline-primary text-white ml-3">sign up</a> -->
            </div>
          </nav>
        </div>
      </div>
      <!-- nav part end -->
      <router-view/>

      <!-- banner -->
      <!-- <div class="hero-area bg-cover">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-lg-6 pl-lg-0 text-center text-lg-left">
              <h1 class="text-white position-relative">Build Your Business Together<span class="watermark">Build</span></h1>
              <p class="text-white pt-2 pb-3">Cupidatat non proident sunt culpa qui officia deserunt mollit <br> anim idest
                laborum sed ut perspiciatis.</p>
              <a href="#" class="btn btn-primary">Get Agico</a>
            </div>
            <div class="col-lg-5 pl-lg-0 pt-5 pt-lg-0 text-lg-right text-center">
              <img src="images/banner/banner-1.png" class="img-fluid" alt="">
            </div>
          </div>
        </div>
      </div> -->
      <!-- /banner -->

    <!-- 이력서 예시 입니다. 이런식으로 만들어 주시면 됩니다. 테스트 커밋
    2. build job 과 deploy job 나누기.
    -->
    <!-- <v-resume></v-resume> -->

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

      }
    },
    components: {
        //VResume
    },
    created(){

    },
    methods: {
      goApply(){
        this.$router.push({name: "Apply"})
      },
      goViewAppliedStudents(){
        this.$router.push({name: "ViewAppliedStudents"})
      },
    }
  }
</script>

<style scoped>
#app {
 /* background-image: url('../public/images/background/banner.png'); */
}
</style>
