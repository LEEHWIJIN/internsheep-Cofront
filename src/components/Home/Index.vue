<!-- 홈 페이지 -->
<template>
    <div id="Home">
      <v-base></v-base>
        <!-- banner -->
        <div class="hero-area bg-cover">
            <div class="container">
            <div class="row align-items-center justify-content-between">
                <div class="col-lg-6 pl-lg-0 text-center text-lg-left">
                <h1 class="text-white position-relative">Intern - Sheep<span class="watermark">Intern</span></h1>
                <p class="text-white pt-2 pb-3">An internship will give you practical skills, workplace experience and greater knowledge of that industry, in exchange for the employer benefiting from your labour.</p>
                <a href="#" class="btn btn-primary">Go Apply</a>
                </div>
                <div class="col-lg-5 pl-lg-0 pt-5 pt-lg-0 text-lg-right text-center">
                <img src="images/banner/banner-1.png" class="img-fluid" alt="">
                </div>
            </div>
            </div>
        </div>
        <!-- /banner -->
        <section class="bg-light py-5">
          <div class="container">
            <div class="row">
              <div class="col-md-1 col-sm-6 mb-4 mb-md-0 text-center">
              </div>
              <div class="col-md-1 col-sm-6 mb-4 mb-md-0 text-center">
                <p class="h2 font-weight-light text-dark"><span class="counter" data-count="8">0</span>K+</p>
              </div>
              <div class="col-md-2 col-sm-6 mb-4 mb-md-0 text-center">
                <p class="h4 text-dark font-weight-normal">명의 학생과 <span class="h2"></span></p>
              </div>
              <div class="col-md-1 col-sm-6 mb-4 mb-md-0 text-center">
                <p class="h2 font-weight-light text-dark"><span class="counter" data-count="20">0</span>+</p>
              </div>
              <div class="col-md-6 col-sm-6 mb-4 mb-md-0 text-center">
                <p class="h4 text-dark font-weight-normal">명의  기업이  <span class="h2 font-weight-light"> 인턴쉽</span>에  참여하고  있습니다.</p>
              </div>
              <div class="col-md-1 col-sm-6 mb-4 mb-md-0 text-center">
              </div>
            </div>
          </div>
        </section>
      <v-footer></v-footer>
    </div>
</template>
<script>
  import VBase from '../Base/Index.vue'
  import VFooter from '../Footer/Index.vue'
  export default{
    name: 'Home',
    data() {
      return {

      }
    },
    components: {
        VBase,
        VFooter,
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
#Home {
 background-image:linear-gradient(to right, #a517ba, #5f1782);
}
</style>
