<template>
  <section class="section section-lg-bottom bg-light">
    <div class="container rounded-sm bg-white shadow">
      <v-base></v-base>
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
                            <span class="h6">백엔드 개발자</span><br>
                            <!-- 기업명 -->
                            <span style="font-size: 12px;">카카오{{AL.cName}}<br></span>
                            <!-- 태그 -->
                            <span style="font-size: 12px;">#C #JAVA #Python{{AL.cName}}<br></span>
                          </div>
                          <!-- 경쟁률 -->
                          <div class="" style="line-height:120%">
                            <br><br>
                            <a class="mr-sm-3 paragraph">
                              <span style="font-size: 12px">모집:</span>1
                              <span class="h4" style="color:#0097d5;">
                              <span style="font-size: 12px">지원:</span>7</span>
                            </a>
                          </div>
                        </div></li>
                      </div>

                      <!-- 샘플. 나중에 지워주세요. -->
                      <li><a class="text-color d-block py-3" href="blog-details.html">사케우동</a></li>
                      <li><a class="text-color d-block py-3" href="blog-details.html">심심이</a></li>
                      <li><a class="text-color d-block py-3" href="blog-details.html">네이버</a></li>
                      <li><a class="text-color d-block py-3" href="blog-details.html">카카오</a></li>
                      <li><a class="text-color d-block py-3" href="blog-details.html">(주)삼겹살</a></li>
                      <li><a class="text-color d-block py-3" href="blog-details.html">김치찌개</a></li>
                      <li><a class="text-color d-block py-3" href="blog-details.html">(주)고구마</a></li>
                      <li><a class="text-color d-block py-3" href="blog-details.html">(주)이누야샤</a></li>
                      <li><a class="text-color d-block py-3" href="blog-details.html">페이스북</a></li>
                      <li><a class="text-color d-block py-3" href="blog-details.html">구글</a></li>
                      <li><a class="text-color d-block py-3" href="blog-details.html">인스타그램</a></li>

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
  </section>
</template>


<script>
 import VBase from '../Base/Index.vue'
 import VCategory from '../Category/Index.vue'
// import VCoList from "./CoList.vue"
 import VDetailList from "./DetailList.vue"
  export default{
      name: 'Apply',
      data() {
        return {
          applylist:[],
          selectedCo:[],
        }
      },
      components: {
          //VCoList,
          VDetailList,
          VBase,
          VCategory,
      },
      created(){
        this.applyList();

      },
      methods: {
        applyList(){
          this.$http.get('http://localhost:8888/std/list').then((response) => {
              for(var i=0; i<response.data.length;i++){
                  this.applylist.push({
                    cManagerName : response.data[i].cManagerName,
                    cName : response.data[i].cName,
                    cNoticeID : response.data[i].cNoticeID
                  })
              }
            })
        },
        clickCo(selectedNum){
          this.selectedCo=[]
          //console.log(selectedNum)
          this.selectedCo.push({
            cManagerName : this.applylist[selectedNum].cManagerName,
            cName : this.applylist[selectedNum].cName,
            cNoticeID : this.applylist[selectedNum].cNoticeID
          })
        },
      }
  }
</script>

<style scoped>
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
