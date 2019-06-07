<!-- 회원 정보 수정 페이지  -->
<template>
<section class="section section-lg-bottom bg-light">
  <div  class="container" id="readProfile">
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
            <input class="form-control mb-4" v-model="cName" placeholder="회사명" readonly="readonly">
          </div>
          <div class="col-lg-6">
            <input class="form-control mb-4" v-model="cCeoName" placeholder="대표명" readonly="readonly">
          </div>
          <div class="col-lg-6">
            <input class="form-control mb-4" v-model="cCompanyNum" placeholder="사업자등록번호" readonly="readonly">
          </div>
          <div class="col-lg-6">
            <input class="form-control mb-4" v-model="cCeoPhone" placeholder="대표 전화번호" readonly="readonly">
          </div>
          <div class="col-lg-6">
            <input class="form-control mb-4" v-model="cManagerName" placeholder="담당자명" readonly="readonly">
          </div>
          <div class="col-lg-6">
            <input class="form-control mb-4" v-model="cManagerPhone" placeholder="담당자 전화번호" readonly="readonly">
          </div>
          <div class="col-lg-6">
            <input class="form-control mb-4" v-model="cPassword" placeholder="비밀번호" readonly="readonly">
          </div>
          <div class="col-lg-12">
            <input class="form-control mb-4" v-model="cLocation" placeholder="회사 주소" readonly="readonly">
          </div>
        </form>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
  export default{
      name: 'ReadProfile',
      data() {
        return {
          cName:[],
          cManagerName:[],
          cLocation:[],
          cBenefit:[],
        }
      },
      components: {
      },
      created(){
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
