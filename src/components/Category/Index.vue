<template>
  <div class="rounded-sm shadow bg-white pb-4">
      <div class="widget">
          <h4>Category</h4>
          <ul class="list-styled list-bordered">
          <li><a class="text-color d-block py-3" href="#" @click="goApply">공고 작성</a></li>
          <li><a class="text-color d-block py-3" href="#" @click="goApplyNotice">공고 신청</a></li>
          <li><a class="text-color d-block py-3" href="#" @click="goViewAppliedStudents">지원 학생 관리</a></li>
          <li><a class="text-color d-block py-3" href="#" @click="goManagementStd">선발 학생 관리</a></li>
          <li><a class="text-color d-block py-3" href="#" @click="goProfile">회원정보 수정</a></li>
          </ul>
      </div>
  </div>
</template>

<script>
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
          this.$http.get('API_SERVER/',{'headers': {authorization: `Bearer ${localStorage.token}`}}).then(res => {
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
      goManagementStd(){
          this.$router.push({name: "ManagementStd"})
      },
      logout(){
      localStorage.removeItem('token')
      this.auth = 0;
      this.$router.push('login')
      },
    }
  }
</script>

<style>
</style>
