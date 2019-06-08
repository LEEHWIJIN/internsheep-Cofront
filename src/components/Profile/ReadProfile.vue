<!-- 회원 정보 수정 페이지  -->
<template>

    <!-- 회원 정보 -->
    <div class="col-lg-8">
      <div class="row">
        <div class="col-lg-12 text-center">
          <div class="text-right">
            <button class="btn btn-light btn-sm" @click="modifyProfile">수정하기</button>
          </div>
          <p class="subtitle">Profile</p>
          <h2 class="section-title">Read a Profile</h2>
        </div>
        <div class="col-lg-12 text-center p-0">
        <form class="row" v-on:submit.prevent='submitNotice' >
          <div class="col-lg-6">
            <input class="form-control mb-4" v-model="userData.cName" placeholder="회사명" readonly="readonly">
          </div>
          <!-- <div class="col-lg-6">
            <input class="form-control mb-4" v-model="userData.cCeoName" placeholder="대표명" readonly="readonly">
          </div> -->
          <!-- <div class="col-lg-6">
            <input class="form-control mb-4" v-model="cCompanyNum" placeholder="사업자등록번호" readonly="readonly">
          </div> -->
          <div class="col-lg-6">
            <input class="form-control mb-4" v-model="userData.cCeoPhone" placeholder="대표 전화번호" readonly="readonly">
          </div>
          <div class="col-lg-6">
            <input class="form-control mb-4" v-model="userData.cManagerName" placeholder="담당자명" readonly="readonly">
          </div>
          <div class="col-lg-6">
            <input class="form-control mb-4" v-model="userData.cManagerPhone" placeholder="담당자 전화번호" readonly="readonly">
          </div>
          <!-- <div class="col-lg-6">
            <input class="form-control mb-4" v-model="cPassword" placeholder="비밀번호" readonly="readonly">
          </div> -->
          <div class="col-lg-12">
            <input class="form-control mb-4" v-model="userData.cLocation" placeholder="회사 주소" readonly="readonly">
          </div>
        </form>
        </div>
      </div>
    </div>

</template>

<script>
import Const from '../../constant/constant';
  export default{
      name: 'ReadProfile',
      data() {
        return {
          user:[],
          userData:[],
          cName:[],
          cManagerName:[],
          cLocation:[],
          cBenefit:[],
        }
      },
      components: {
      },
      async created(){
        await this.$http.get(Const.API_SERVER+'/',{'headers': {authorization: `Bearer ${localStorage.token}`}}).then(res => {
          this.user = res.data.user;
          return ;
        });
        await this.$http.get(Const.API_SERVER+'/co/mypage/showCompanyInfo',{params:{cLoginID:this.user.loginId}}).then(res=>{
          this.userData=res.data[0];
          // console.log(this.userData)
        });
      },
      methods: {
        modifyProfile(){
          this.$store.dispatch('profile/setProfileState',1);
        },
      }
  }
</script>

<style scoped>
</style>
<!-- Main Stylesheet -->
<link href="css/style.css" rel="stylesheet">
