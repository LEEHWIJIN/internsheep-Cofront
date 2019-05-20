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
        <!-- 상세 정보 버튼 -->

        <!--<div>-->
          <!--&lt;!&ndash;&lt;!&ndash; 긴 모달 &ndash;&gt;&ndash;&gt;-->
          <!--&lt;!&ndash;<div>&ndash;&gt;-->
            <!--&lt;!&ndash;<b-button v-b-modal.modal-tall>이력서 보기</b-button>&ndash;&gt;-->
            <!--&lt;!&ndash;<b-modal id="modal-tall" title="이력서 세부내용">&ndash;&gt;-->
               <!--&lt;!&ndash;<p class="my-1" v-for="i in 20" :key="i">&ndash;&gt;-->
                <!--&lt;!&ndash;Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis&ndash;&gt;-->
                <!--&lt;!&ndash;in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.&ndash;&gt;-->
              <!--&lt;!&ndash;</p>&ndash;&gt;-->
              <!--&lt;!&ndash;<div class="row">&ndash;&gt;-->
                <!--&lt;!&ndash;<div class="col-lg-12 text-center">&ndash;&gt;-->
                  <!--&lt;!&ndash;<img src="images/career/logo-5.png" class="img shadow-sm mr-sm-3 m-3 p-0" alt="logo-1">&ndash;&gt;-->
                <!--&lt;!&ndash;</div>&ndash;&gt;-->
              <!--&lt;!&ndash;</div>&ndash;&gt;-->
              <!--&lt;!&ndash;<p class="my-1">&ndash;&gt;-->
                <!--&lt;!&ndash;이름:&ndash;&gt;-->
              <!--&lt;!&ndash;</p>&ndash;&gt;-->
              <!--&lt;!&ndash;<p class="my-1">&ndash;&gt;-->
                <!--&lt;!&ndash;소속학과:&ndash;&gt;-->
              <!--&lt;!&ndash;</p>&ndash;&gt;-->
              <!--&lt;!&ndash;<p class="my-1">&ndash;&gt;-->
                <!--&lt;!&ndash;학번:&ndash;&gt;-->
              <!--&lt;!&ndash;</p>&ndash;&gt;-->
              <!--&lt;!&ndash;<p class="my-1">&ndash;&gt;-->
                <!--&lt;!&ndash;전화번호:&ndash;&gt;-->
              <!--&lt;!&ndash;</p>&ndash;&gt;-->
              <!--&lt;!&ndash;<p class="my-1">&ndash;&gt;-->
                <!--&lt;!&ndash;E-mail:&ndash;&gt;-->
              <!--&lt;!&ndash;</p>&ndash;&gt;-->

            <!--&lt;!&ndash;</b-modal>&ndash;&gt;-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->
          <!--&lt;!&ndash; 짧은 모달 &ndash;&gt;-->
          <!--<b-button v-b-modal.modal-1>Launch demo modal</b-button>-->
          <!--<b-modal id="modal-1" title="BootstrapVue">-->
            <!--<p class="my-1">Hello from modal!</p>-->
          <!--</b-modal>-->
          <!--&lt;!&ndash; 몬생긴 모달 &ndash;&gt;-->
          <!--<div>-->
            <!--<button @click="handleClickButton">Toggle Modal</button>-->
            <!--<app-my-modal-->
              <!--title="This is modal"-->
              <!--:visible.sync="visible">-->
              <!--<div>-->
                <!--This is modal body-->
              <!--</div>-->
            <!--</app-my-modal>-->
          <!--</div>-->
        <!--</div>-->

      </div>
      <!-- 지원 현황 -->
      <div class="col-lg-8">
        <div class="row">
          <div class="col-lg-12 text-center">
            <p class="subtitle">Students</p>
            <h2 class="section-title">Applied Students</h2>
          </div>
          <div v-if="$store.state.apply.apply_state==0">
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
              <select @change="ynchange(index,$event)">
                <option value="" selected disabled hidden style="font-color:#aab1bb;">합격여부</option>
                <option value="1">합격</option>
                <option value="0">불합격</option>
              </select>
              </div>
              <!-- 학생 상세 정보 버튼 -->
              <!-- <a href="#" class="btn btn-outline-primary">Specification</a> -->
              <!-- <a href="#" @click="finishJudge(index,sl.selected)" class="btn btn-outline-primary">심사 완료</a> -->
            </div>
          </div>
          <!-- <a href="#" @click="finishJudge" class="btn btn-outline-primary">심사 완료</a> -->
          <div class="col-12 text-center">
          <button class="btn btn-primary" @click="finishJudge()">심사 완료</button>
          </div>
          </div>
          <!-- <div > -->
            <v-error v-else-if="$store.state.apply.apply_state==1"></v-error>
          <!-- </div> -->
      </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
  import { mapGetters, mapActions} from 'vuex'
  import myModal from './myModal'
  import VBase from '../Base/Index.vue'
  import VCategory from '../Category/Index.vue'
  import VError from './Error.vue'
  import VNoNoticeError from './NoNoticeError.vue'
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
          visible : false,
          judgeStdinfo:[],
            confirm : -1,
        }
      },
      components: {
        VBase,
        VCategory,
        appMyModal: myModal,
      },
      async created(){
        await this.$http.get('http://106.10.46.121:10022/',{'headers': {authorization: `Bearer ${localStorage.token}`}}).then(res => {
          this.user = res.data.user;
          return this.user;
        });
        await this.getSemester();
      },
      methods: {
        ynchange(index,event){
          this.stdList[index].YN = event.target.value;
        },
        async getSemester(){
          await this.$http.get('http://106.10.46.121:10022/admin/recentApplyTerm').then((response) => {
            this.applyOrder = response.data.applyOrder;
            this.applySemester = response.data.applySemester;
            var data = {
              applyOrder : this.applyOrder,
              applySemester : this.applySemester,
            };
            this.applyList(this.applyOrder,this.applySemester);
          });
        },
        applyList(order,semester){
          this.$http.get('http://106.10.46.121:10022/co/mypage/watchApplyStd',{params:{cLoginID : this.user.loginId, applyOrder: order,applySemester:semester }}).then((response) => {
              if(response.data =='기간이 없음'){
                  alert('기간이 없습니다.')
                  // this.$router.push({name: "Home"})
                  
              }
              else if(response.data=='공고가 없음'){
                  alert('공고를 작성하지 않으셨습니다.')
                  this.$router.push({name: "Home"})
              }
              else if(response.data=='공고 신청을 하지 않음'){
                  alert('공고신청을 하지 않으셨습니다.')
                  this.$router.push({name: "Home"})
              }
              else if(response.data=='신청한 학생이 없음'){
                  this.$store.dispatch('apply/setApplyState',1);
                  // this.confirm=0
              }
              else {
                  // this.confirm = 1
                  this.$store.dispatch('apply/setApplyState',0);
                  for (var i = 0; i < response.data.length; i++) {
                      this.stdList.push({
                          sName: response.data[i].sName,
                          sMajor: response.data[i].sMajor,
                          sGrade: response.data[i].sGrade,
                          stdApplyCoID: response.data[i].stdApplyCoID,
                          YN: "-1",
                      })
                  }
              }
          })
        },
        finishJudge(){
          for(var i=0 ;i<this.stdList.length;i++){
            if(this.stdList[i].YN==-1){
              alert("합격여부를 모두 작성해 주세요.")
              return 0;
            }
            this.judgeStdinfo.push({
              stdApplyCoID : JSON.stringify(this.stdList[i].stdApplyCoID),
              YN : this.stdList[i].YN,
            })
          }
          this.$http.post('http://106.10.46.121:10022/co/mypage/changeYNApplyStd',{data:this.judgeStdinfo}).then((response)=>{
              alert('합격 여부가 확정되었습니다.')
          })
          this.$router.push({name: "Home"});
        },
        handleClickButton(){
          this.visible = !this.visible
        }
      }
  }
</script>

<style scoped>
.img {
    height:100px;
    border-radius: 50%;
    border-color: coral;
}
</style>
