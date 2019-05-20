<template>
  <section class="section section-lg-bottom bg-light">
    <v-base></v-base>
    <div class="container rounded-sm bg-white shadow">
      <div id="apply">
        <!-- <v-CoList :applylist="applylist" @clickCo="clickCo"></v-CoList> -->
        <div class="row">
          <!-- 기업 목록 -->
          <div class="company-item companyList col-lg-5">
            <div class="comanyList">
                <!-- <div v-for='(AL,index) in applylist' :key="AL.cNoticeID" @click="clickCo(index)">
                  {{index+1}}.
                  기업명 : {{AL.cName}}<br>
                  매니저 : {{AL.cManagerName}}<br><br>
                </div> -->
                <ul class="list-styled list-bordered">

                  <div v-for='(AL,index) in applylist' :key="AL.cNoticeID" @click="clickCo(index)">
                    <li><div class="media align-items-center flex-column flex-sm-row">
                      <!-- {{index+1}} -->
                      <!-- 회사 사진 -->
                      <img src="images/career/logo-1.png" class="mr-sm-0 mb-4 mb-sm-0 rounded p-3" alt="logo-1">
                      <div class="media-body text-center text-sm-left mb-4 mb-sm-0" style="line-height:120%">
                        <!-- 모집 직군 -->
                        <span class="h6">{{AL.cOccupation}}</span><br>
                        <!-- 기업명 -->
                        <span style="font-size: 12px;">{{AL.cName}}<br></span>
                        <!-- 태그 -->
                        <span style="font-size: 12px;">{{AL.cTag}}<br></span>
                      </div>
                      <!-- 경쟁률 -->
                      <div class="" style="line-height:120%">
                        <br><br>
                        <a class="mr-sm-3 paragraph">
                          <span style="font-size: 12px">모집:</span>{{AL.cNumOfPeople}}
                          <span class="h4" style="color:#0097d5;">
                          <span style="font-size: 12px">지원:</span>{{AL.applyStdNum}}</span>
                        </a>
                      </div>
                    </div></li>
                  </div>

                  <!-- 샘플. 나중에 지워주세요. -->
                  <!--<li><a class="text-color d-block py-3" href="blog-details.html">사케우동</a></li>-->
                  <!--<li><a class="text-color d-block py-3" href="blog-details.html">심심이</a></li>-->
                  <!--<li><a class="text-color d-block py-3" href="blog-details.html">네이버</a></li>-->
                  <!--<li><a class="text-color d-block py-3" href="blog-details.html">카카오</a></li>-->
                  <!--<li><a class="text-color d-block py-3" href="blog-details.html">(주)삼겹살</a></li>-->
                  <!--<li><a class="text-color d-block py-3" href="blog-details.html">김치찌개</a></li>-->
                  <!--<li><a class="text-color d-block py-3" href="blog-details.html">(주)고구마</a></li>-->
                  <!--<li><a class="text-color d-block py-3" href="blog-details.html">(주)이누야샤</a></li>-->
                  <!--<li><a class="text-color d-block py-3" href="blog-details.html">페이스북</a></li>-->
                  <!--<li><a class="text-color d-block py-3" href="blog-details.html">구글</a></li>-->
                  <!--<li><a class="text-color d-block py-3" href="blog-details.html">인스타그램</a></li>-->

                </ul>
            </div>
          </div>
          <!-- 기업 상세 목록 -->
          <div class="company-item detailList col-lg-10 ">
              <div>
                <v-detail-list :selectedCo="selectedCo"></v-detail-list>
              </div>
          </div>

        </div>
      </div>
    </div>
    <v-footer class="mt-4"></v-footer>
  </section>
</template>


<script>
 import VBase from '../Base/Index.vue'
 import VFooter from '../Footer/Index.vue'
// import VCoList from "./CoList.vue"
 import VDetailList from "./DetailList.vue"
  export default{
      name: 'Apply',
      data() {
        return {
          applylist:[],
          selectedCo:[],
          // applyTerm : {
          //     applyStart : '',
          //     applyEnd : '',
          //     applySemester : '',
          //     applyOrder : ''
          // },
          applyTerm:{},
        }
      },
      components: {
          //VCoList,
          VDetailList,
          VBase,
          VFooter,
      },
      created(){
          this.compareDate();
      },
      methods: {
        applyList(){
          this.$http.get('http://106.10.46.121:10022/std/list',{params:{applyOrder:this.applyTerm.applyOrder, applySemester: this.applyTerm.applySemester}}).then((response) => {
            console.log(response.data)
            for(var i=0; i<response.data.length;i++){
                this.applylist.push({
                  cBenefit : response.data[i].cBenefit,
                  cPay : response.data[i].cPay,
                  internTermStart : response.data[i].internTermStart,
                  internTermEnd : response.data[i].internTermEnd,
                  cManagerPhone : response.data[i].cManagerPhone,
                  cImage : response.data[i].cImage,
                  cLocation : response.data[i].cLocation,
                  cManagerName : response.data[i].cManagerName,
                  cName : response.data[i].cName,
                  cOccupation : response.data[i].cOccupation,
                  cTag : response.data[i].cTag,
                  cNumOfPeople :response.data[i].cNumOfPeople,
                  applyStdNum : response.data[i].applyStdNum,
                  cInfo : response.data[i].cInfo,
                  cEmail : response.data[i].cEmail,
              })
            }
          })
        },
        clickCo(selectedNum){
          // this.$router.go();
          this.selectedCo=[]
          //console.log(selectedNum)
          this.selectedCo.push({
              cBenefit : this.applylist[selectedNum].cBenefit,
              cPay : this.applylist[selectedNum].cPay,
              internTermStart : this.applylist[selectedNum].internTermStart.split('T')[0],
              internTermEnd : this.applylist[selectedNum].internTermEnd.split('T')[0],
              cManagerPhone : this.applylist[selectedNum].cManagerPhone,
              cImage : this.applylist[selectedNum].cImage,
              cLocation : this.applylist[selectedNum].cLocation,
              cManagerName : this.applylist[selectedNum].cManagerName,
              cName : this.applylist[selectedNum].cName,
              cOccupation : this.applylist[selectedNum].cOccupation,
              cTag : this.applylist[selectedNum].cTag,
              cNumOfPeople :this.applylist[selectedNum].cNumOfPeople,
              applyStdNum : this.applylist[selectedNum].applyStdNum,
              cInfo : this.applylist[selectedNum].cInfo,
              cEmail : this.applylist[selectedNum].cEmail,
          })
        },
        compareDate(){
          this.$http.get('http://106.10.46.121:10022/admin/recentApplyTerm').then((response) => {
            this.applyTerm = {
                applyStart : response.data.applyStart,
                applyEnd : response.data.applyEnd,
                applySemester : response.data.applySemester,
                applyOrder : response.data.applyOrder
            }
            this.applyList();
          })
        },
      }
  }
</script>

<style scoped>

.section {
  padding-top: 170px;
  padding-bottom: 0px;
}

/* .container {
  padding-bottom: 110px;
} */


.company-item {
  padding:15px;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 500px;
}

.companyList {
  flex-basis: 40%;
}

.detailList {
  flex-basis: 60%;
}
</style>
