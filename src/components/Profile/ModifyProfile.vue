<!-- 회원 정보 수정 페이지  -->
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
        <form class="row" v-on:submit.prevent='submitProfile' >
          <div class="col-lg-6">
            <input class="form-control mb-4" v-model="userData.cName" placeholder="회사명">
          </div>
          <!-- <div class="col-lg-6">
            <input class="form-control mb-4" v-model="userData.cCeoName" placeholder="대표명">
          </div> -->
          <!-- <div class="col-lg-6">
            <input class="form-control mb-4" v-model="cCompanyNum" placeholder="사업자등록번호">
          </div> -->
          <div class="col-lg-6">
            <input class="form-control mb-4" v-model="userData.cCeoPhone" placeholder="대표 전화번호">
          </div>
          <!-- <div class="col-lg-6">
            <input class="form-control mb-4" v-model="userData.cManagerName" placeholder="담당자명">
          </div>
          <div class="col-lg-6">
            <input class="form-control mb-4" v-model="userData.cManagerPhone" placeholder="담당자 전화번호">
          </div> -->
          <!-- <div class="col-lg-6">
            <input class="form-control mb-4" v-model="cPassword" placeholder="비밀번호">
          </div> -->
          <div class="col-lg-12">
            <input class="form-control mb-4" v-model="userData.cLocation" placeholder="회사 주소">
          </div>
          <div class="col-lg-6">
          <input class="form-control mb-4" type="password" placeholder="현재 비밀번호" v-model="presentPw">
          </div>
          <div class="col-lg-6">
            <input class="form-control mb-4" type="password" placeholder="변경하실 비밀번호" v-model="changepw">
          </div>
          <div class="col-12">
            <button class="btn btn-primary" type="submit">Submit Now</button>
          </div>
        </form>
        </div>
      </div>
      <v-footer></v-footer>
    </div>

</template>

<script>
import Const from '../../constant/constant';
import VFooter from '../Footer/Index.vue';
  export default{
      name: 'ModifyProfile',
      data() {
        return {
          user:[],
          userData:[],
          cName:[],
          cManagerName:[],
          cLocation:[],
          cBenefit:[],
          presentPw:[],
          changepw:[],
        }
      },
      components: {
        VFooter,
      },
      async created(){
        await this.$http.get(Const.API_SERVER+'/',{'headers': {authorization: `Bearer ${localStorage.token}`}}).then(res => {
          this.user = res.data.user;
          return ;
        });
        await this.$http.get(Const.API_SERVER+'/co/mypage/showCompanyInfo',{params:{cLoginID:this.user.loginId}}).then(res=>{
          if(res.data[0].cCeoPhone==null){
            this.userData.cCeoPhone = "";
          }
          // if(res.data[0].c)
          this.userData=res.data[0];
          // console.log(this.userData)
        });
      },
      methods: {
        modifyProfile(){
          this.$store.dispatch('profile/setProfileState',0);
        },
        submitProfile(){
          if(this.presentPw.length!=0&&this.changepw.length!=0){
              this.$http.post(Const.API_SERVER+'/auth/co/changepw', {presentpw: this.presentPw, changepw: this.changepw, cLoginID: this.user.loginId}).then((res)=>{
                if(res.data.result == 1){
                  alert("현재 비밀번호가 틀렸습니다.")
                  return;
                }
                else if(res.data.result == 2){
                  alert("비밀번호가 성공적으로 변경되었습니다.");
                  this.submitData();
                  return ;
                }
            })
          }
          else if(this.presentPw.length==0&&this.changepw.length==0){//비밀번호 변경할 것이 없는 경우
            this.submitData();
          }
          else{//비밀번호 변경을 작성안한경우
            alert("비밀번호 변경 칸을 전부 채워주세요");
            return;
          }

        },
        submitData(){
          this.$http.post(Const.API_SERVER+'/co/mypage/modifyCompanyInfo',{cLoginID:this.user.loginId,data:this.userData}).then((response) => {
            // console.log(response.data)
            if(response.data==1){
              alert("성공적으로 수정 되었습니다.");
              this.$store.dispatch('profile/setProfileState',0);
            }
          });
        }
      }
  }
</script>

<style scoped>
</style>
<!-- Main Stylesheet -->
<link href="css/style.css" rel="stylesheet">