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
          <div class="col-lg-12 text-center">
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
                  <div>
                    <b-button v-b-modal="modalId(index)">이력서 보기</b-button>
                    <b-modal :id="'modal'+index" title="이력서 세부내용">
                      <div class="row">
                        <div class="col-lg-12 text-center">
                          <img src="images/career/logo-5.png" class="img shadow-sm mr-sm-3 m-3 p-0" alt="logo-1">
                        </div>
                      </div>
                      <p class="my-1">
                        이름:
                      </p>
                      <p class="my-1">
                        소속학과:
                      </p>
                      <p class="my-1">
                        학번:
                      </p>
                      <p class="my-1">
                        전화번호:
                        </p>
                      <p class="my-1">
                        E-mail:
                      </p>
                    </b-modal>
                  </div>
                  <!-- 학생 상세 정보 버튼 -->
                  <!-- <a href="#" @click="finishJudge(index,sl.selected)" class="btn btn-outline-primary">심사 완료</a> -->
                </div>
              </div>
            </div>
            <v-error v-else-if="$store.state.apply.apply_state==1"></v-error>
          </div>
          <div class="col-12 text-center">
            <button class="btn btn-primary" @click="finishJudge()">심사 완료</button>
          </div>
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
        await this.$http.get('http://api.ajou-internsheep.co/',{'headers': {authorization: `Bearer ${localStorage.token}`}}).then(res => {
          this.user = res.data.user;
          return this.user;
        });
        await this.getSemester();
      },
      methods: {
        modalId(i) {
          console.log(i);
          return 'modal' + i;
        },
        ynchange(index,event){
          this.stdList[index].YN = event.target.value;
        },
        async getSemester(){
          await this.$http.get('http://api.ajou-internsheep.co/admin/recentApplyTerm').then((response) => {
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
          this.$http.get('http://api.ajou-internsheep.co/co/mypage/watchApplyStd',{params:{cLoginID : this.user.loginId, applyOrder: order,applySemester:semester }}).then((response) => {
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
              else if(response.data=='이미 선발을 완료 하였습니다.'){
                alert('이미 선발을 완료 하였습니다.')
                  this.$router.push({name: "Home"})
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
          this.$http.post('http://api.ajou-internsheep.co/co/mypage/changeYNApplyStd',{data:this.judgeStdinfo}).then((response)=>{
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
    width:100px;
    border-radius: 50%;
    border-color: coral;
}
</style>
