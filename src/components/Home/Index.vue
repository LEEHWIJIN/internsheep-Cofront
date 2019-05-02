<template>
    <div id="Home">
        <!-- banner -->
        <div class="hero-area bg-cover">
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
        </div>
        <!-- /banner -->
    </div>
</template>
<script>
  //import Vue from 'vue';
  //import VResume from './components/Resume/Index.vue';
  //import Vtest from '../test/test.vue'
  export default{
    name: 'Home',
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
#Home {
 background-image: url('../../../public/images/background/banner.png');
}
</style>
