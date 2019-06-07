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
                    <h6 class="mt-0">{{sl.sName}} </h6>
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

          <div class="col-12 text-center" style="font-size: 15px">
             내 상태 : {{cStatus}}
          </div><br/>

          <div class="col-12 text-center">
            <br/>
            <button class="btn btn-primary" @click="finishJudge()">심사 완료</button>
            <button class="btn btn-primary ml-2" v-if="cStatus=='심사중'" @click="changeStatus()">지원 그만 받기</button>
          </div>

          <div class="col-12 text-center">
          <div id="chart">
            <apexchart type=bar height=350 :options="chartOptions" :series="series" />
          </div>
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
  import VueApexCharts from 'vue-apexcharts'
  import VError from './Error.vue'
  import VNoNoticeError from './NoNoticeError.vue'
  import Const from '../../constant/constant';


  var colors = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#546E7A', '#26a69a', '#D10CE8'];

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
            cStatus : "",
            userProgrammingLang:[],
            userMachineLang:[],
            userFrameworkLang:[],
            userDatabaseLang:[],
            userCloudLang:[],
            userGrade:[],
            userEng:[],
            series: [{
                name: 'C언어 수준',
                data: []
            }],
            chartOptions: {
                chart: {
                    height: 350,
                    type: 'bar',
                    events: {
                        click: function (chart, w, e) {
                            console.log(chart, w, e)
                        }
                    },
                },
                colors: colors,
                plotOptions: {
                    bar: {
                        columnWidth: '45%',
                        distributed: true
                    }
                },
                dataLabels: {
                    enabled: false,
                },
                title: {
                    text: 'C언어',
                    align: 'center',
                    style: {
                        fontSize: '20px'
                    }
                },
                subtitle: {
                    text: '0 : 배운적 없음,  1 : 맛보기 수준,  2 : 초보 수준,  3 : 실무 가능,  4 : 나름 고수',
                    align: 'center',
                },
                xaxis: {
                    categories: [],
                    labels: {
                        style: {
                            colors: colors,
                            fontSize: '14px'
                        }
                    }
                }
            }
        }
      },
      components: {
        VBase,
        VCategory,
        appMyModal: myModal,
          apexchart: VueApexCharts,
      },
      async created(){
        await this.$http.get('Const.API_SERVER/',{'headers': {authorization: `Bearer ${localStorage.token}`}}).then(res => {
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
              await this.$http.get('Const.API_SERVER/admin/recentApplyTerm').then((response) => {
                  this.applyOrder = response.data.applyOrder;
                  this.applySemester = response.data.applySemester;
                  var data = {
                      applyOrder : this.applyOrder,
                      applySemester : this.applySemester,
                  };
                  this.applyList(this.applyOrder,this.applySemester);
                  this.loadCstatus(this.applyOrder,this.applySemester)
              });
          },
        applyList(order,semester){
          this.$http.get('Const.API_SERVER/co/mypage/watchApplyStd',{params:{cLoginID : this.user.loginId, applyOrder: order,applySemester:semester }}).then((response) => {
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
                      var programmingLang = JSON.parse(response.data[i].programmingLang);
                      // var frameworkLang = JSON.parse(response.data[i].frameworkLang);
                      // var databaseLang = JSON.parse(response.data[i].databaseLang);
                      // var cloudLang = JSON.parse(response.data[i].cloudLang);
                      // var machineLang = JSON.parse(response.data[i].machineLang)
                      this.stdList.push({
                          sName: response.data[i].sName,
                          sMajor: response.data[i].sMajor,
                          sGrade: response.data[i].sGrade,
                          stdApplyCoID: response.data[i].stdApplyCoID,
                          YN: "-1"})
                      this.userProgrammingLang.push({
                          Javascript: programmingLang.Javascript,
                          HTML: programmingLang.HTML,
                          CSS: programmingLang.CSS,
                          jQuery: programmingLang.jQuery,
                          SQL: programmingLang.SQL,
                          Java: programmingLang.Java,
                          AndroidJava: programmingLang.AndroidJava,
                          Swift: programmingLang.Swift,
                          Objective: programmingLang.Objective,
                          Python: programmingLang.Python,
                          PHP: programmingLang.PHP,
                          C: programmingLang.C,
                          Microsoft: programmingLang.Microsoft,
                          Kotlin: programmingLang.Kotlin,
                          Peral: programmingLang.Peral,
                          R: programmingLang.R,
                          VBA: programmingLang.VBA
                      })
                      // this.userFrameworkLang.push({
                      // Nodejs : frameworkLang.Nodejs,
                      // Angular : frameworkLang.Angular,
                      // React : frameworkLang.React,
                      // Expressjs : frameworkLang.Expressjs,
                      // NetCore : frameworkLang.NetCore,
                      // Spring : frameworkLang.Spring,
                      // Django : frameworkLang.Django,
                      // Flask : frameworkLang.Flask,
                      // Cordova : frameworkLang.Cordova})
                      //
                      // this.userDatabaseLang.push({
                      // MySql : databaseLang.MySql,
                      // SQLServer : databaseLang.SQLServer,
                      // MongoDB : databaseLang.MongoDB,
                      // SQLite : databaseLang.SQLite,
                      // Redis : databaseLang.Redis,
                      // Oracle : databaseLang.Oracle,
                      // Flask_data : databaseLang.Flask,
                      // Cordova_data : databaseLang.Cordova})
                      //
                      // this.userCloudLang.push({
                      // AWS : cloudLang.AWS,
                      // Azure : cloudLang.Azure,
                      // GCP : cloudLang.GCP,
                      // Linux : cloudLang.Linux,
                      // Wordpress : cloudLang.Wordpress,
                      // RaspberryPi : cloudLang.RaspberryPi,
                      // Arduino : cloudLang.Arduino,
                      // Firebase : cloudLang.Firebase,
                      // Docker : cloudLang.Docker,
                      // Go : cloudLang.Go})

                      // this.userMachineLang.push({
                      //     Tensorflow : machineLang.Tensorflow,
                      // Caffe : machineLang.Caffe,
                      // OpenCV : machineLang.OpenCV,
                      // DLib : machineLang.DLib,
                      // OpenGL : machineLang.OpenGL,
                      // Unity : machineLang.Unity,
                      // Arduino_mac : machineLang.Arduino,
                      // Firebase_mac : machineLang.Firebase
                      // })
                  }
              }
              this.chart(this.stdList)
          })
        },
            chart(stdList) {
                for (var i = 0; i < stdList.length; i++) {
                    this.chartOptions.xaxis.categories[i] = stdList[i].sName
                    if (this.userProgrammingLang[i].C == '배운적 없음')
                        this.userProgrammingLang[i].C = 0
                    else if (this.userProgrammingLang[i].C == '맛보기 수준')
                        this.userProgrammingLang[i].C = 1
                    else if (this.userProgrammingLang[i].C == '초보 수준')
                        this.userProgrammingLang[i].C = 2
                    else if (this.userProgrammingLang[i].C == '실무 가능')
                        this.userProgrammingLang[i].C = 3
                    else if (this.userProgrammingLang[i].C == '나름 고수')
                        this.userProgrammingLang[i].C = 4
                    this.series[0].data[i] = this.userProgrammingLang[i].C
                };
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
                this.$http.post('Const.API_SERVER/co/mypage/changeYNApplyStd',{data:this.judgeStdinfo}).then((response)=>{
                    alert('합격 여부가 확정되었습니다.')
                })
                this.$router.push({name: "Home"});
            },
          changeStatus() {
              this.$http.post('Const.API_SERVER/co/mypage/changeCstatus',{cLoginID : this.user.loginId, applyOrder: this.applyOrder,applySemester:this.applySemester}).then((response)=>{
                  if(response.data == '0'){
                      alert('이미 지원 마감 상태입니다.')
                  }
                  else{
                      alert('지원이 마감 되었습니다.')
                  }
              })
          },
          loadCstatus(applyOrder, applySemester) {
              this.$http.get('Const.API_SERVER/co/mypage/loadCstatus',{params : {cLoginID : this.user.loginId, applyOrder: applyOrder,applySemester:applySemester}}).then((response)=>{
                  if(response.data.cStatus == 0){
                      this.cStatus = '심사중'
                  }
                  else if(response.data.cStatus == 1){
                      this.cStatus = '지원 마감'
                  }
              })
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