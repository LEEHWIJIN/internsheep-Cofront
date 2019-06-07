<!-- 회원 정보 수정 페이지  -->
<template>
  <section class="section section-lg-bottom bg-light">
    <div  class="container" id="apply">
      <v-base></v-base>
      <div class="row">
      <!-- 카테고리란 -->
        <div class="col-lg-3">
          <v-category></v-category>
        </div>
        <!-- 공백 -->
        <div class="col-lg-1">
        </div>
        <!-- 회원 정보 -->
        <div class="col-lg-8">
          <div class="row">
            <div class="col-lg-12 text-center">
              <p class="subtitle">Notice</p>
              <h2 class="section-title">Write a Notice</h2>
            </div>
            <div class="col-lg-12 text-center p-0">
            <form class="row" v-on:submit.prevent='submitNotice' >
              <div class="col-lg-6">
                <input class="form-control mb-4" v-model="cName" placeholder="회사명">
              </div>
              <div class="col-lg-6">
                <input class="form-control mb-4" v-model="cCeoName" placeholder="대표명">
              </div>
              <div class="col-lg-6">
                <input class="form-control mb-4" v-model="cCompanyNum" placeholder="사업자등록번호">
              </div>
              <div class="col-lg-6">
                <input class="form-control mb-4" v-model="cCeoPhone" placeholder="대표 전화번호">
              </div>
              <div class="col-lg-6">
                <input class="form-control mb-4" v-model="cManagerName" placeholder="담당자명">
              </div>
              <div class="col-lg-6">
                <input class="form-control mb-4" v-model="cManagerPhone" placeholder="담당자 전화번호">
              </div>
              <div class="col-lg-6">
                <input class="form-control mb-4" v-model="cPassword" placeholder="비밀번호">
              </div>
              <div class="col-lg-12">
                <input class="form-control mb-4" v-model="cLocation" placeholder="회사 주소">
              </div>
              <div class="col-12">
                <button class="btn btn-primary" type="submitN">Submit Now</button>
              </div>
            </form>
          </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 공백 -->
    <div class="col-lg-1">
    </div>
    <v-read-profile v-if="$store.state.profile.profile_state==0"></v-read-profile>
    <v-modify-profile v-if="$store.state.profile.profile_state==1"></v-modify-profile>
</section>
</template>

<script>
import Const from '../../constant/constant';

  import VBase from '../Base/Index.vue'
  import VCategory from '../Category/Index.vue'
  import VReadProfile from './ReadProfile.vue'
  import VModifyProfile from './ModifyProfile.vue'
  export default{
      name: 'Apply',
      data() {
        return {
          cName:[],
          cManagerName:[],
          cManagerPhone:[],
          cLocation:[],
          cCeoPhone:[],
          cCeoName:[],
          cCompanyNum:[],
        }
      },
      components: {
        VBase,
        VCategory,
        VReadProfile,
        VModifyProfile,
      },
      created(){
        this.$store.dispatch('profile/setProfileState',0);
      },
      methods: {
        //  submitNotice(){
        //    this.$http.post(Const.API_SERVER+'/co/mypage/modifyCompanyInfo',this.user.loginId,data).then((response) => {
        //        console.log(this.cName)
        //        console.log(this.cManagerName)
        //        this.cName = "";
        //        this.cManagerName="";
        //      })
        //  },
      }
  }
</script>

<style scoped>
</style>
<!-- Main Stylesheet -->
<link href="css/style.css" rel="stylesheet">
