<!-- 신청 학생 뷰 페이지 -->
<template>
<section class="section section-lg-bottom bg-light">
  <div class="container" id="apply">
    <v-base></v-base>
    <div class="row">
      <!-- 카테고리란 -->
      <div class="col-lg-3">
        <v-category></v-category>
      </div>
      <!-- 공백 -->
      <div class="col-lg-1">
      </div>
      <!-- 지원 현황 -->
      <div class="col-lg-8">
        <div class="row">
          <div class="col-lg-12 text-center">
            <p class="subtitle">Students</p>
            <h2 class="section-title">Applied Students</h2>
          </div>

          <div v-for='(sl,index) in stdList' class="col-lg-12 bg-white p-4 rounded shadow my-3">
            <div class="media align-items-center flex-column flex-sm-row">
              <!-- 학생 사진 -->
              <img src="images/career/logo-5.png" class="mr-sm-3 mb-4 mb-sm-0 border rounded p-2" alt="logo-1">
              <!-- 학생 간단 정보 -->
              <div class="media-body text-center text-sm-left mb-4 mb-sm-0">
                <h6 class="mt-0">{{sl.sName}} - Team of PHP MySQL Developers </h6>
                <p class="mb-0 text-gray">{{sl.sMajor}} | {{sl.sGrade}} | 학점 3.3</p>
              </div>
              <div>
              <b-form-select v-model="sl.selected" :options="options"></b-form-select>
              </div>
              <!-- 학생 상세 정보 버튼 -->
              <!-- <a href="#" class="btn btn-outline-primary">Specification</a> -->
              <a href="#" @click="finishJudge(index,sl.selected)" class="btn btn-outline-primary">심사 완료</a>
            </div>
          </div>
          <!-- <a href="#" @click="finishJudge" class="btn btn-outline-primary">심사 완료</a> -->
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
  import VBase from '../Base/Index.vue'
  import VCategory from '../Category/Index.vue'
  export default{
      name: 'Apply',
      data() {
        return {
          applylist:[],
          selectedCo:[],
          stdList : [],
          user : {},
          cloudeLang : [],
          selected : [],
          options:[
            {value : 0, text : "불합격"},
            {value : 1, text : "합격"}
          ],
        }
      },
      components: {
        VBase,
        VCategory,
      },
      async created(){
        await this.$http.get('http://localhost:8888/',{'headers': {authorization: `Bearer ${localStorage.token}`}}).then(res => {
          this.user = res.data.user;
          return this.user;
        });
        await this.getSemester();
      },
      methods: {
        async getSemester(){ 
          await this.$http.get('http://localhost:8888/admin/recentApplyTerm').then((response) => {
            this.applyOrder = response.data[0].applyOrder;
            this.applySemester = response.data[0].applySemester;
            var data = {
              applyOrder : this.applyOrder,
              applySemester : this.applySemester,
            };
            this.applyList(this.applyOrder,this.applySemester);
          });
        },
        applyList(order,semester){
          this.$http.get('http://localhost:8888/co/mypage/watchApplyStd',{params:{cLoginID : this.user.loginId, applyOrder: order,applySemester:semester }}).then((response) => {
            for(var i=0; i<response.data.length;i++){
              this.stdList.push({
                sName : response.data[i].sName,
                sMajor : response.data[i].sMajor,
                sGrade : response.data[i].sGrade,
                stdApplyCoID : response.data[i].stdApplyCoID,
              })
            }
          })
        },
        finishJudge(index,selected){
          var data = {
            stdApplyCoID : JSON.stringify(this.stdList[index].stdApplyCoID),
            YN : selected,
          }
          this.$http.post('http://localhost:8888/co/mypage/changeYNApplyStd',{data:data}).then((response)=>{
            }  
          )
        },
      }
  }
</script>

<style scoped>

</style>
