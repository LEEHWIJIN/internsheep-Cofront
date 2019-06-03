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
        <div v-for="(info,index) in studentInfo">
          <vue-calendar
            :show-limit="3"
            @show-all="showAll"
            @event-clicked="eventClicked"
            @month-changed="monthChanged"
          ></vue-calendar>
          <select @change="attendanceChange(index,$event)">
            <option value="" selected disabled hidden style="font-color:#aab1bb;">출석여부</option>
            <option value="출석">출석</option>
            <option value="결석">결석</option>
            <option value="지각">지각</option>
          </select>
        </div>
        <button class="btn btn-primary" @click="modify">저장</button>
      </div>
  </div>
</section>
</template>


<script>
import {Calendar} from 'vue-bootstrap4-calendar';
  import VBase from '../Base/Index.vue'
  import VCategory from '../Category/Index.vue'
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
      },
      async created() {
        await this.$http.get('http://localhost:8888/',{'headers': {authorization: `Bearer ${localStorage.token}`}}).then(res => {
          this.user = res.data.user;
          return this.user;
        });
        await this.$http.get('http://localhost:8888/admin/recentApplyTerm').then((response) => {
          this.applySemester = response.data.applySemester;
          return this.applySemester;
        });
        this.$calendar.eventBus.$on("show-all", events => this.showAll(events));
        this.$calendar.eventBus.$on("day-clicked", day => this.dayClicked(day));
        await this.loadHiredStd();
        
      },
      methods: {
        loadHiredStd(){
          this.$http.get('http://localhost:8888/co/mypage/loadHiredStd',{params:{cLoginID:this.user.loginId,applySemester:this.applySemester}}).then((res)=>{
            if(res.data.length==0){
              console.log("확정된 학생이 없음");
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
        attendanceChange(index,event){
          this.pickStudent = index;
          this.studentInfo[index].val = event.target.value;
          this.studentInfo[index].id = this.pickDate;
        },
        async modify(){
          await this.$http.get('http://localhost:8888/co/mypage/loadInterTerm',{params:{cLoginID:this.user.loginId,applySemester:this.applySemester,date : this.pickDate}}).then((res)=>{
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
          this.$http.post('http://localhost:8888/co/mypage/changeAttend',{data : this.studentInfo[this.pickStudent]}).then((res)=>{
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
          var date =[year, month, day].join('.');
          this.pickDate = date;
          console.log(this.pickDate)
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
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

