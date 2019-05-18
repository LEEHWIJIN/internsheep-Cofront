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
                <p class="text-white pt-2 pb-3">Cupidatat non proident sunt culpa qui officia deserunt mollit <br> anim idest
                    laborum sed ut perspiciatis.</p>
                <a href="#" class="btn btn-primary">Get Agico</a>
                </div>
                <div class="col-lg-5 pl-lg-0 pt-5 pt-lg-0 text-lg-right text-center">
                <img src="images/banner/banner-1.png" class="img-fluid" alt="">
                </div>
            </div>
            </div>
        </div>
        <!-- /banner -->
    </div>
</template>
<script>
  import VBase from '../Base/Index.vue'
  export default{
    name: 'Home',
    data() {
      return {

      }
    },
    components: {
        VBase,
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
 background-image: url('../../../public/images/background/banner.png');
}
</style>
