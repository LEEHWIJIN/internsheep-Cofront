<!-- 공고 작성 페이지  -->
<template>
<section class="section section-lg-bottom bg-light">
  <div  class="container" id="apply">
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
          <input class="form-control mb-4" v-model="cManagerName" placeholder="담당자">
        </div>
        <div class="col-lg-6">
          <input class="form-control mb-4" v-model="InternTermStart" placeholder="실습시작일">
        </div>
        <div class="col-lg-6">
          <input class="form-control mb-4" v-model="internTermEnd" placeholder="실습종료일">
        </div>
        <div class="col-lg-6">
          <input class="form-control mb-4" v-model="cPay" placeholder="급여 정보">
        </div>
        <div class="col-lg-6">
          <input class="form-control mb-4" v-model="cOccupation" placeholder="활동부서">
        </div>
        <div class="col-lg-6">
          <input class="form-control mb-4" v-model="cNumOfPeople" placeholder="모집인원">
        </div>
        <div class="col-lg-6">
          <input class="form-control mb-4" v-model="cID_1" placeholder="사업자등록번호">
        </div>
        <div class="col-lg-12">
          <input class="form-control mb-4" v-model="cLocation" placeholder="회사 주소">
        </div>
        <div class="col-lg-12">
          <textarea class="form-control mb-4" v-model="cBenefit" placeholder="복리후생 정보"></textarea>
        </div>
        <div class="col-lg-12">
          <input class="form-control mb-4" v-model="cTag" placeholder="#해시태그">
        </div>
        <div class="col-12">
          <button class="btn btn-primary" type="submit">Submit Now</button>
        </div>
      </form>
    </div>
    </div>
  </div>
</section>
</template>

<script>
  export default{
      name: 'Apply',
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
         submitNotice(){
           this.$http.post('http://localhost:8888/co/mypage/writeNotice',{cName:this.cName,cManagerName: this.cManagerName}).then((response) => {
               console.log(this.cName)
               console.log(this.cManagerName)
               this.cName = "";
               this.cManagerName="";
             })
         },
      }
  }
</script>

<!--
<style scoped>
#apply{

}
.section {
  padding-top: 140px;
  padding-bottom: 140px;
}

@media (max-width: 991px) {
  .section {
    padding-top: 100px;
    padding-bottom: 100px;
  }
}

.section-lg {
  padding-top: 250px;
  padding-bottom: 250px;
}

.section-lg-bottom {
  padding-bottom: 250px;
}

@media (max-width: 991px) {
  .section-lg-bottom {
    padding-bottom: 100px;
  }
}

.section-sm {
  padding-top: 70px;
  padding-bottom: 70px;
}

.section-title {
  margin-bottom: 38px;
}

.subtitle {
  text-transform: capitalize;
  font-size: 18px;
  color: #8b8e93;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
}

/* form style */
.form-control {
  border: 0;
  height: 60px;
  padding: 0 25px;
  border-radius: 45px;
}

.form-control:focus {
  outline: 0;
  box-shadow: none;
}

textarea.form-control {
  height: 150px;
  padding: 25px;
}

.btn {
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  text-transform: capitalize;
  padding: 14px 45px;
  border-radius: 45px;
  font-weight: 500;
  border: 1px solid;
  position: relative;
  z-index: 1;
  transition: .3s ease-in;
  overflow: hidden;
}

.btn-primary {
  border: 0;
  color: #fff;
}

.btn-primary:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 102%;
  height: 100%;
  background: linear-gradient(45deg, #00a8f4 0%, #02d1a1 100%);
  z-index: -1;
  transition: ease 0.3s;
}
</style>
-->

<!-- Main Stylesheet -->
<link href="css/style.css" rel="stylesheet">
