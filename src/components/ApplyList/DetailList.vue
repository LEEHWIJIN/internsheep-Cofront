<template>
  <div id="applyList">
    <div class="companyList">
      <div v-for='sc in selectedCo' :key="sc.cNoticeID">
        <!-- 파란 사각형 -->
        <div class="topImage shadow-sm" style="line-height:130%">
          <div class="row">
            <div class="col-lg-12">
              <div class="heart">
                <!-- 만약 찜했을 경우 font-weight: bold; 로 바꾸면 됨. -->
                <i class="far fa-heart" style="margin-left: 18px;"><span style="font-color:white; font-weight: bold;"> 기업 찜하기</span></i>
              </div>
              <div class="apply">
                <i class="fas fa-walking" ><span style="font-color:white;"> 지원하기</span></i>
              </div>
            </div>
            <br><br><br>
            <div class="col-lg-12">
              <div class="job-intro media align-items-center flex-column flex-sm-row">
                <!-- 회사 사진 -->
                <img src="images/career/logo-1.png" class="mr-sm-0 mb-4 mb-sm-0 rounded p-3" alt="logo-1">
                <div class="media-body text-center text-sm-left mb-4 mb-sm-0" style="line-height:120%; text-shadow: 1.5px 1.5px 1.5px #306aff;">
                  <!-- 모집 직군 -->
                  <span class="text-white" style="">백엔드 개발자<br></span>
                  <!-- 기업명 -->
                  <span class="text-white" style="font-size: 12px;">(주)카카오<br></span>
                  <!-- 태그 -->
                  <span class="text-white" style="font-size: 12px;">#C #JAVA #Python<br></span>
                </div>
                <!-- 경쟁률 -->
                <div class="" style="line-height:120%">
                  <br><br>
                  <a class="mr-sm-3 paragraph text-white">
                    <span class="text-white" style="font-size: 12px">모집:</span>1
                    <span class="h4 text-white">
                    <span style="font-size: 12px">지원:</span>7</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
        <!-- 상세 정보  -->

        <!-- 기업명 : {{sc.cName}}<br>
        매니저 : {{sc.cManagerName}}<br><br>
        <button @click="applyStd(sc.cName)">지원하기</button> -->

        <ul class="list-unstyled pt-4" >
          <li class="d-flex mb-4">
            <i class="fa fa-building icon-grey"></i>
            <div class="pl-3">
              <h6 class="text-dark">회사 소개</h6>
              <ul class="list-unstyled">
                <li>우리 회사는 어쩌구 저쩌구 궁시렁 궁시렁</li>
              </ul>
            </div>
          </li>

          <li class="d-flex mb-4">
            <i class="fa fa-briefcase icon-grey"></i>
            <div class="pl-3">
              <h6 class="text-dark">모집 분야</h6>
              <ul class="list-unstyled">
                <li>백엔드 개발자</li>
              </ul>
            </div>
          </li>

          <li class="d-flex mb-4">
            <i class="fa fa-users icon-grey"></i>
            <div class="pl-3">
              <h6 class="text-dark">모집 인원</h6>
              <ul class="list-unstyled">
                <li>2명</li>
              </ul>
            </div>
          </li>

          <li class="d-flex mb-4">
            <i class="fa fa-archive icon-grey"></i>
            <div class="pl-3">
              <h6 class="text-dark">필요 역량</h6>
              <ul class="list-unstyled">
                <li>Node.js 초급 이상</li>
                <li>MySql 초급 이상</li>
              </ul>
            </div>
          </li>

          <li class="d-flex mb-4">
            <i class="fa fa-won-sign icon-grey"></i>
            <div class="pl-3">
              <h6 class="text-dark">급여</h6>
              <ul class="list-unstyled">
                <li>80만</li>
              </ul>
            </div>
          </li>

          <li class="d-flex mb-4">
            <i class="fa fa-coffee icon-grey"></i>
            <div class="pl-3">
              <h6 class="text-dark">복리 후생</h6>
              <ul class="list-unstyled">
                <li>사내 간식 / 명절 보너스 / 연차 자유</li>
              </ul>
            </div>
          </li>

          <li class="d-flex mb-4">
            <i class="fa fa-calendar icon-grey"></i>
            <div class="pl-3">
              <h6 class="text-dark">실습 기간</h6>
              <ul class="list-unstyled">
                <li>4주</li>
              </ul>
            </div>
          </li>

          <li class="d-flex mb-4">
            <i class="fas fa-business-time icon-grey"></i>
            <div class="pl-2">
              <h6 class="text-dark">실습 시간</h6>
              <ul class="list-unstyled">
                <li>08:30 - 18:00</li>
              </ul>
            </div>
          </li>

          <li class="d-flex mb-4">
            <i class="fa fa-map-o icon-grey"></i>
            <div class="pl-3">
              <h6 class="text-dark">주소</h6>
              <ul class="list-unstyled">
                <li>Studio 76d, Riley Ford, North Michaelchester, CF99 6QQ</li>
              </ul>
            </div>
          </li>

          <li class="d-flex mb-4">
            <i class="fa fa-envelope-o icon-grey"></i>
            <div class="pl-3">
              <h6 class="text-dark">Email</h6>
              <ul class="list-unstyled">
                <li>hello@agico.com</li>
                <li>info@example.com</li>
              </ul>
            </div>
          </li>

          <li class="d-flex mb-4">
            <i class="fa fa-phone icon-grey"></i>
            <div class="pl-3">
              <h6 class="text-dark">연락처</h6>
              <ul class="list-unstyled">
                <li>(+091) 413 554 8598</li>
                <li>(+091) 413 554 8599</li>
              </ul>
            </div>
          </li>

        </ul>
      </div>
    </div>
  </div>
</template>


<script>
  export default{
      name: 'applyList',
      data() {
        return {
            sName:"박모양"
        }
      },
      components: {

      },
      props:{
        selectedCo:{
            type:Array,
            required: true,
        },
      },
      created(){

    },
      methods: {
        applyStd(cName){
            this.$http.get('http://localhost:8888/std/mypage/applyStatus',{params:{sName : this.sName}}).then((response)=>{
            if(response.data != false){
                alert("이미 지원을 한 상태 입니다.")
            }
            else{
                this.$http.post('http://localhost:8888/std/mypage/applyCo',{cName : cName, sName : this.sName}).then((response) => {
                    alert("지원을 성공 하셨습니다.!")
                })
            }
            })
        },
      }
  }
</script>

<style scoped>

.companyList {
  padding: 10px;
}

.topImage {
  padding : 10px;
  background: linear-gradient(90deg, #62aaff 20%, #626aff 100%);
  height: 150px;
  border-radius: 5px;
}

.topImage i {
  font-size: 13px;
  color: white;
  float: right;
}

.job-intro p {
  font-color: white !important;
}
</style>
