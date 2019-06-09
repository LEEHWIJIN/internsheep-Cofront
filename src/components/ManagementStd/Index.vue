<!-- 공고 작성 페이지  -->
<template>
<section class="section section-lg-bottom bg-light">
  <div  class="container" id="managementStd">
    <v-base></v-base>
      <div class="row">
        <!-- 카테고리란 -->
        <div class="col-lg-3">
          <v-category></v-category>
        </div>
        <!-- 공백 -->
        <div class="col-lg-1">
        </div>
        <!-- 내용 -->
        <div class="col-lg-8">
          <div class="col-lg-12 text-center">
            <p class="subtitle">Manage</p>
            <h2 class="section-title">Manage Student</h2>
          </div>
          <div class="row rounded-sm shadow-sm b-2 p-3" style="background: white;">

            <!-- <div class="row rounded-sm shadow-sm" style="background: white;"> -->
              <div class="col-lg-8">
                <!-- 캘린더 -->
                <div v-for="(info,index) in studentInfo">
                  <vue-calendar
                    :show-limit="3"
                    @show-all="showAll"
                    @event-clicked="eventClicked"
                    @month-changed="monthChanged"
                  ></vue-calendar>
                </div>
              </div>
              <!-- 세부 정보  -->
              <div class="col-lg-4">
                <div class="text-center mt-2">
                  <h4>Attendance Info</h4>
                </div>
                <li class="list-form pt-2 pb-1">
                  선택 날짜 <br> {{pickDate}}
                </li>
                <li class="list-form pt-2 pb-1">
                  학생 이름 <br>
                  <div v-for="(SL,index) in studentInfo" @click="pickStd(index)" style="cursor:pointer;" class="student-name">
                    {{SL.sName}}
                  </div>
                </li>
                <li class="pt-2 pb-1">
                  출석 여부 <br>
                  <select class="selectpicker select-size" @change="attendanceChange($event)">
                    <option value="" selected disabled hidden style="font-color:#aab1bb;">출석여부</option>
                    <option value="출석">출석</option>
                    <option value="결석">결석</option>
                    <option value="지각">지각</option>
                    <option value="조퇴">조퇴</option>
                  </select>
                </li>
                <div class="text-center pt-3 pb-1">
                  <!-- 저장 -->
                  <button class="btn btn-primary" @click="modify">저장</button>
                </div>
              </div>
            <!-- </div> -->

          </div>


        </div>
      </div>
  </div>
</section>
</template>


<script>
import {Calendar} from 'vue-bootstrap4-calendar';
  import VFooter from '../Footer/Index.vue'
  import VBase from '../Base/Index.vue'
  import VCategory from '../Category/Index.vue'
  import Const from '../../constant/constant';

  export default{
      name: 'ManagementStd',
      data() {
        return {
          user:[],
          cName:[],
          cManagerName:[],
          cLocation:[],
          cBenefit:[],
          day:[],
          studentInfo:[],
          pickDate : "",
          pickStudent : -1,
          internTerm : [],
        }
      },
      components: {
        VBase,
        VCategory,
        Calendar,
        VFooter,
      },
      async created() {
        await this.$http.get(Const.API_SERVER+'/',{'headers': {authorization: `Bearer ${localStorage.token}`}}).then(res => {
          this.user = res.data.user;
          return this.user;
        });
        await this.$http.get(Const.API_SERVER+'/admin/recentApplyTerm').then((response) => {
          this.applySemester = response.data.applySemester;
          return this.applySemester;
        });
        this.$calendar.eventBus.$on("show-all", events => this.showAll(events));
        this.$calendar.eventBus.$on("day-clicked", day => this.dayClicked(day));
        await this.loadHiredStd();

      },
      methods: {
        loadHiredStd(){
          this.$http.get(Const.API_SERVER+'/co/mypage/loadHiredStd',{params:{cLoginID:this.user.loginId,applySemester:this.applySemester}}).then((res)=>{
            console.log(res.data)
            if(res.data.length==0){
                alert("확정된 학생이 없습니다.")
                // this.$router.push('/appliedStd');
              return;
            }
            else{
              for(var i=0;i<res.data.length;i++){
                this.studentInfo.push({
                  sName: res.data[i].sName,
                  sLoginID : res.data[i].sLoginID,
                  id: "",
                  val : "",
                  applySemester : this.applySemester
                })
              }
              return;
            }
          })
        },
        pickStd(index){
          this.pickStudent = index;
          console.log(index);
          // this.studentInfo[index].val = event.target.value;
          // this.studentInfo[index].id = this.pickDate;
        },
        attendanceChange(event){
          // this.pickStudent = index;
          var index = this.pickStudent;
          this.studentInfo[index].val = event.target.value;
          this.studentInfo[index].id = this.pickDate;
          console.log(this.studentInfo[index]);
        },
        async modify(){
          await this.$http.get(Const.API_SERVER+'/co/mypage/loadInterTerm',{params:{cLoginID:this.user.loginId,applySemester:this.applySemester,date : this.pickDate}}).then((res)=>{
            if(res.data.result==0){
              alert("실습기간이 아닙니다.");
              return;
            }
            else{
              this.changeAttend();
              return;
            }
          });
        },
        changeAttend(){
          this.$http.post(Const.API_SERVER+'/co/mypage/changeAttend',{data : this.studentInfo[this.pickStudent]}).then((res)=>{
            if(res.status==200){
              alert("저장 되었습니다.")
            }
            return ;
          });
        },
        showAll(events) {
          // Do something...
        },
        dayClicked(dateInform) {//YYYY-M-D 로 바꿔주는 함수
          this.pickDate = ""; //초기화
          var a = new Date(dateInform.date);
          var month = '' + (a.getMonth() + 1);
          var day = '' + a.getDate();
          var year = a.getFullYear();
          var date =[year, month, day].join('-');
          this.pickDate = date;
          // console.log(this.pickDate)
        },
        eventClicked(event) {
        },
        monthChanged(start, end) {
          // Do something...
        }
      },
  }
</script>

<style scoped>
.list-form {
    border-right:0px;
    border-top:0px;
    border-left:0px;
    border-bottom:1px solid #e5e5e5;
}

.select-size {
    width: 50%;
}

.student-name {
  height: 120px;
  overflow-y: scroll;
  overflow-x: hidden;
}

.select {
  height: 25px !important;
  width: 80px !important;
}
</style>
