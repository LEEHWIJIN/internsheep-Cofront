
<template>
  <section class="section section-lg-bottom bg-light">
    <v-base></v-base>
    <div class="mt-4 text-center">
      <br>
    </div>
    <div class="container rounded-sm bg-white shadow">
      <div id="apply">
        <!-- <v-CoList :applylist="applylist" @clickCo="clickCo"></v-CoList> -->
        <div class="row">
          <!-- 기업 목록 -->
          <div class="companyList col-lg-5">
            <div class="search-container pt-3">
              <form class="search-form pb-2" action="/action_page.php">
                <input class="search-input" type="text" placeholder="Search" name="search" style="font-size:17px; color: #555555;">
                <button class="search-button" type="submit"><i class="fa fa-search" style="font-size:20px; color:#555555;"></i></button>
              </form>
            </div>
            <div class="company-item comanyList">
              <ul class="list-styled list-bordered">
                  <div v-for='(AL,index) in applylist' :key="AL.cNoticeID" @click="clickCo(index)" v-if="AL.cName.includes(searchinput)||AL.cOccupation.includes(searchinput)||AL.cTag.includes(searchinput)">
                    <div class="zoom">
                      <li><a class="media align-items-center flex-column flex-sm-row">
                        <!-- {{index+1}} -->
                        <!-- 회사 사진 -->
                        <img src="images/career/logo-1.png" class="mr-sm-0 mb-4 mb-sm-0 rounded p-3" alt="logo-1">
                        <div class="media-body text-center text-sm-left mb-4 mb-sm-0" style="line-height:100%">
                          <!-- 모집 직군 -->
                          <span class="h6" style="font-weight: bold;">{{AL.cOccupation}}</span><br>
                          <!-- 기업명 -->
                          <span style="font-size: 12px; color: #8b8e93;">{{AL.cName}}<br></span>
                          <!-- 태그 -->
                          <span style="font-size: 12px; color: #8b8e93;">{{AL.cTag}}<br></span>
                        </div>
                        <!-- 경쟁률 -->
                        <div class="" style="line-height:120%">
                          <br><br>
                          <a class="mr-sm-3 paragraph">
                            <span style="font-size: 12px">모집:</span>{{AL.cNumOfPeople}}
                            <span class="h4" style="color:#0064db">
                            <span style="font-size: 12px"> 지원:</span>{{AL.applyStdNum}}</span>
                          </a>
                        </div>
                      </a></li>
                    </div>
                  </div>
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
          applyTerm:{},
          searchinput:"",
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
          this.$http.get('http://api.ajou-internsheep.co/std/list',{params:{applyOrder:this.applyTerm.applyOrder, applySemester: this.applyTerm.applySemester}}).then((response) => {
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
            this.selectedCo.push(this.applylist[0])
          })
          return this.applylist;
        },
        clickCo(selectedNum){
          this.selectedCo=[]
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
          this.$http.get('API_SERVER/admin/recentApplyTerm').then((response) => {
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
  padding-top: 80px;
  padding-bottom: 0px;
}

.company-item {
  padding:15px;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 500px;
}

.companyList {
  flex-basis: 40%;
}

@media (max-width: 1000px) {
  .companyList {
    flex-basis: 100%;
  }
}

.detailList {
  flex-basis: 60%;
}

@media (max-width: 1000px) {
  .detailList {
    flex-basis: 100%;
  }
}

/* search bar */
.search-container {
  /* width: 100px; */
}

.search-form {
  width: 100%;
  border-right:0px;
  border-top:0px;
  border-left:0px;
  border-bottom:1px solid #e5e5e5 ;
}

.search-input{
  width: 90%;
  border:none;

}

.search-button{
  border: 0px;
  background-color: white;
}

.search-input:focus {
  outline: 0;
  box-shadow: none;
}

.zoom {
   transition: all .1s ease-in-out;
 }

.zoom:hover {
  background-color: white;
  transform: scale(1.072) !important; /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
  box-shadow: 0px 2px 8px 0px rgba(51, 77, 128, 0.12) !important;
}
</style>
