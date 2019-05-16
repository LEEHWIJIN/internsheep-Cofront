<!-- 공고 작성 페이지  -->
<template>
<section class="section section-lg-bottom bg-light">
  <v-base></v-base>
  <div class="container" id="apply">
    <div class="row">
      <div class="col-lg-3">
          <div class="rounded-sm shadow bg-white pb-4">
              <div class="widget">
                  <h4>Category</h4>
                    <ul class="list-styled list-bordered">
                    <li><a class="text-color d-block py-3" href="blog-details.html">공고 작성</a></li>
                    <li><a class="text-color d-block py-3" href="blog-details.html">공고 신청</a></li>
                    <li><a class="text-color d-block py-3" href="blog-details.html">지원 학생 관리</a></li>
                    <li><a class="text-color d-block py-3" href="blog-details.html">선발 학생 관리</a></li>
                    <li><a class="text-color d-block py-3" href="blog-details.html">회원 정보 수정</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 공백 -->
        <div class="col-lg-1">
        </div>
        <div class="col-lg-8">
          <div class="row">
            <!-- 대제목 -->
            <div class="col-lg-12 text-center">
              <p class="subtitle">Notice</p>
              <h2 class="section-title">Write a Notice</h2>
            </div>
          <form class="row" v-on:submit.prevent='submitNotice'>
            <h6 style="font-weight:bold">회사 주소*</h6>
            <div class="col-lg-6">
                  <input class="form-control mb-4" v-model="cLocation" placeholder="회사 주소를 입력 해주세요">
            </div><br>
            <h6 style="font-weight:bold">복리후생*</h6>
            <div class="col-lg-6">
                  <input class="form-control mb-4" v-model="cBenefit" placeholder="복리후생 정보를 입력 해주세요">
            </div><br>
            <h6 style="font-weight:bold">급여*</h6>
            <div class="col-lg-6">
                  <input class="form-control mb-4" v-model="cPay" placeholder="급여 정보를 입력 해주세요">
            </div><br>
            <h6 style="font-weight:bold">활동부서*</h6>
            <div class="col-lg-6">
                  <input class="form-control mb-4" v-model="cOccupation" placeholder="활동부서를 입력 해주세요">
            </div><br>
            <h6 style="font-weight:bold">모집인원*</h6>
            <div class="col-lg-6">
                  <input class="form-control mb-4" v-model="cNumOfPeople" placeholder="모집인원을 입력 해주세요">
            </div><br>
            <h6 style="font-weight:bold">태그*</h6>
            <div class="col-lg-6">
                  <input class="form-control mb-4" v-model="cTag" placeholder="태그를 입력 해주세요">
            </div><br>
            <!-- <h6 style="font-weight:bold">사업자등록번호*</h6>
            <div class="col-lg-6">
                  <input class="form-control mb-4" v-model="cID_1" placeholder="사업자등록번호를 입력 해주세요">
            </div><br> -->
            <h6 style="font-weight:bold">실습시작일*</h6>
            <div class="col-lg-6">
                  <input class="form-control mb-4" v-model="internTermStart" placeholder="실습시작일을 입력 해주세요">
            </div><br>
            <h6 style="font-weight:bold">실습종료일*</h6>
            <div class="col-lg-6">
                  <input class="form-control mb-4" v-model="internTermEnd" placeholder="실습종료일을 입력 해주세요">
            </div><br>
            <div class="col-12 text-center">
            <button class="btn btn-primary" type="submit">제출하기</button>
            </div>
          </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import VBase from '../Base/Index.vue'
  export default{
      name: 'Apply',
      data() {
        return {
          cName:[],
          cLocation:[],
          cBenefit:[],
          cPay : [],
          internTermStart : [],
          cOccupation : [],
          cNumOfPeople : [],
          cTag : [],
          // cID_1 : [],
          internTermEnd : [],
        }
      },
      components: {
          VBase,
      },
      created(){
        this.$http.get('http://localhost:8888/',{'headers': {authorization: `Bearer ${localStorage.token}`}}).then(res => {
          this.user = res.data.user;
          return this.user;
        });

      },
      methods: {
        submitNotice(){
          //console.log(this.user);
          var data = {
            cBenefit : this.cBenefit,
            cPay : this.cPay,
            internTermStart : this.internTermStart,
            internTermEnd : this.internTermEnd,
            cOccupation : this.cOccupation,
            cNumOfPeople : this.cNumOfPeople,
            cTag : this.cTag,
            cLocation : this.cLocation,
          };
          this.$http.post('http://localhost:8888/co/mypage/writeNotice',{cLoginID:this.user.loginId,data}).then((response) => {
            // console.log(this.cName)
            // console.log(this.cManagerName)
            // this.cName = "";
            // this.cManagerName="";
            this.$router.push({name: "Home"})
          })
        },
      }
  }
</script>

<style scoped>
#apply{
  margin-left: 200px;
  margin-top: 200px;
}
</style>
