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
        <v-read-profile v-if="$store.state.profile.profile_state==0"></v-read-profile>
        <v-modify-profile v-if="$store.state.profile.profile_state==1"></v-modify-profile>
      </div>
    </div>
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
