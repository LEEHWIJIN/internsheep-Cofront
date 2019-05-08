<!-- 신청 학생 뷰 페이지 -->
<template>

<section class="section section-lg-bottom bg-light">
  <div class="container" id="apply">
    <div class="row">

      <div class="col-lg-12 text-center">
        <p class="subtitle">Students</p>
        <h2 class="section-title">Applied Students</h2>
      </div>

      <div v-for='sc in applylist' class="col-lg-12 bg-white p-4 rounded shadow my-3">
        <div class="media align-items-center flex-column flex-sm-row">
          <!-- 학생 사진 -->
          <img src="images/career/logo-5.png" class="mr-sm-3 mb-4 mb-sm-0 border rounded p-2" alt="logo-1">
          <!-- 학생 간단 정보 -->
          <div class="media-body text-center text-sm-left mb-4 mb-sm-0">
            <h6 class="mt-0">{{sc.sName}} - Team of PHP MySQL Developers </h6>
            <p class="mb-0 text-gray">소프트웨어학과 | 3학년 | 학점 3.3</p>
          </div>
          <!-- 학생 상세 정보 버튼 -->
          <a href="#" class="btn btn-outline-primary">Specification</a>
        </div>
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
          applylist:[],
          selectedCo:[],
          cName : "키"
        }
      },
      components: {
      },
      created(){
        this.applyList();
      },
      methods: {
        applyList(){
          this.$http.get('http://localhost:8888/co/mypage/watchApplyStd',{params:{cName : this.cName}}).then((response) => {
         //    console.log(response)
              for(var i=0; i<response.data.length;i++){
                  this.applylist.push({
                    sName : response.data[i].sName
                  })
              }
          //    console.log(this.applylist);
            })
        },
      }
  }
</script>

<style scoped>

</style>
