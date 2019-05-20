<template>
  <div id="applyList">
    <div class="companyList">
      <div v-for='sc in selectedCo' :key="sc.cNoticeID">
        <!-- 파란 사각형 -->
        <div class="topImage shadow-sm" style="line-height:130%">
          <div class="row">
            <div class="col-lg-12 mb-4">
              <div class="heart mr-sm-2 mt-sm-2">
                <!-- 만약 찜했을 경우 font-weight: bold; 로 바꾸면 됨. -->
                <i class="far fa-heart" style="margin-left: 18px;"><span style="font-color:white; font-weight: bold;"> 기업 찜하기</span></i>
              </div>
              <div class="apply">
                <i class="fas fa-walking" ><span @click="applyStd(sc.cName)" style="font-color:white;cursor:Pointer;"> 지원하기</span></i>
              </div>
            </div>

            <div class="col-lg-12">
              <div class="job-intro media align-items-center flex-column flex-sm-row">
                <!-- 회사 사진 -->
                <img src="images/career/logo-1.png" class="img mr-sm-0 mb-4 mb-sm-0 rounded p-3" alt="logo-1">
                <div class="info media-body text-center text-sm-left mb-4 mb-sm-0" style="line-height:120%;">
                  <!-- 모집 직군 -->
                  <span class="text-white" style="font-size: 20px;">{{sc.cOccupation}}<br></span>
                  <!-- 기업명 -->
                  <span class="text-white" style="font-size: 13px;">{{sc.cName}}<br></span>
                  <!-- 태그 -->
                  <span class="text-white" style="font-size: 13px;">{{sc.cTag}}<br></span>
                </div>
                <!-- 경쟁률 -->
                <div class="" style="line-height:120%">
                  <br><br>
                  <a class="mr-sm-2 mb-sm-2 paragraph text-white">
                    <span class="text-white" style="font-size: 13px">모집:</span>{{sc.cNumOfPeople}}
                    <span class="h4 text-white"><span style="font-size: 13px">지원:</span>{{sc.applyStdNum}}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- 상세 정보  -->
        <ul class="list-unstyled pt-4 pl-3" >
          <li class="d-flex mb-4">
            <i class="fa fa-building icon-grey"></i>
            <div class="pl-3">
              <h6 class="text-dark">회사 소개</h6>
              <ul class="list-unstyled">
                <li>{{sc.cInfo}}</li>
              </ul>
            </div>
          </li>

          <li class="d-flex mb-4">
            <i class="fa fa-briefcase icon-grey"></i>
            <div class="pl-3">
              <h6 class="text-dark">모집 분야</h6>
              <ul class="list-unstyled">
                <li>{{sc.cOccupation}}</li>
              </ul>
            </div>
          </li>

          <li class="d-flex mb-4">
            <i class="fa fa-users icon-grey"></i>
            <div class="pl-3">
              <h6 class="text-dark">모집 인원</h6>
              <ul class="list-unstyled">
                <li>{{sc.cNumOfPeople}}명</li>
              </ul>
            </div>
          </li>

          <li class="d-flex mb-4">
            <i class="fa fa-won-sign icon-grey"></i>
            <div class="pl-3">
              <h6 class="text-dark">급여</h6>
              <ul class="list-unstyled">
                <li>{{sc.cPay}}</li>
              </ul>
            </div>
          </li>

          <li class="d-flex mb-4">
            <i class="fa fa-coffee icon-grey"></i>
            <div class="pl-3">
              <h6 class="text-dark">복리 후생</h6>
              <ul class="list-unstyled">
                <li>{{sc.cBenefit}}</li>
              </ul>
            </div>
          </li>

          <li class="d-flex mb-4">
            <i class="fa fa-calendar icon-grey"></i>
            <div class="pl-3">
              <h6 class="text-dark">실습 기간</h6>
              <ul class="list-unstyled">
                <li>{{sc.internTermStart}} ~ {{sc.internTermEnd}}</li>
              </ul>
            </div>
          </li>

          <li class="d-flex mb-4">
            <i class="fa fa-map-o icon-grey"></i>
            <div class="pl-3">
              <h6 class="text-dark">주소</h6>
              <ul class="list-unstyled">
                <li class="mb-1">{{sc.cLocation}}</li>
                <vue-daum-map :appKey="appKey" :center.sync="center" :level.sync="level" :mapTypeId="mapTypeId" :libraries="libraries" @load="onLoad" style="width:520px;height:300px;">
                </vue-daum-map>
              </ul>
            </div>
          </li>

          <li class="d-flex mb-4">
            <i class="fa fa-envelope-o icon-grey"></i>
            <div class="pl-3">
              <h6 class="text-dark">Email</h6>
              <ul class="list-unstyled">
                <li>{{sc.cEmail}}</li>
              </ul>
            </div>
          </li>

          <li class="d-flex mb-4">
            <i class="fa fa-phone icon-grey"></i>
            <div class="pl-3">
              <h6 class="text-dark">담당자 성함 및 연락처</h6>
              <ul class="list-unstyled">
                <li>{{sc.cManagerName}} {{sc.cManagerPhone}}</li>
              </ul>
            </div>
          </li>

          <div class="col-12 text-center">
            <button class="btn btn-primary" type="submit" >저장하기</button>
          </div>

        </ul>
      </div>
    </div>
  </div>
</template>


<script>
    import VueDaumMap from 'vue-daum-map';

  export default{
      name: 'applyList',
      data() {
        return {
            user : {},
            applyTerm : {},
            appKey: '843e68ace7c69cb699e9d969ee289d4c',
            center: {lat:33.450701, lng:126.570667},
            level: 3,
            libraries: ['services', 'clusterer', 'drawing'],
            mapTypeId: VueDaumMap.MapTypeId.NORMAL, // 맵 타입
            mapObject: null
        }
      },
      components: {
          VueDaumMap
      },
      watch: {
        // onLoad: function(map) {
        //   this.onLoad(map);
        // },
      },
      props:{
        selectedCo:{
            type:Array,
            required: true,
        },
      },
      async created(){
        // await this.$router.go();
        await this.$http.get('http://10.41.83.255:8888/',{'headers': {authorization: `Bearer ${localStorage.token}`}}).then(res => {
            this.user = res.data.user;
            return this.user;
        })
        await this.$http.get('http://10.41.83.255:8888/admin/recentApplyTerm').then((response) => {
          this.applyTerm = {
              applyStart : response.data.applyStart,
              applyEnd : response.data.applyEnd,
              applySemester : response.data.applySemester,
              applyOrder : response.data.applyOrder
          }
          return this.applyTerm;
        })
      },
      methods: {
        applyStd(cName){
            this.$http.get('http://10.41.83.255:8888/std/mypage/applyStatus',{params:{sLoginID : this.user.loginId}}).then((response)=>{
            if(response.data != '0'){
                alert("이미 지원을 한 상태 입니다.")
            }
            else{
                this.$http.post('http://10.41.83.255:8888/std/mypage/applyCo',{cName : cName, sLoginID : this.user.loginId,applySemester: this.applyTerm.applySemester,applyOrder:this.applyTerm.applyOrder}).then((response) => {
                    if(response.data == '0'){
                        alert("이력서가 없습니다. 이력서를 작성해주세요")
                    }
                    else {
                        alert("지원을 성공 하셨습니다.!")
                    }
                })
            }
            })
        },
          onLoad (map) {
              var geocoder = new daum.maps.services.Geocoder();
              geocoder.addressSearch(this.selectedCo[0].cLocation, function(result, status) {

                  if (status === daum.maps.services.Status.OK) {

                      var coords = new daum.maps.LatLng(result[0].y, result[0].x);

                      // 결과값으로 받은 위치를 마커로 표시합니다
                      var marker = new daum.maps.Marker({
                          map: map,
                          position: coords
                      });
                      // 인포윈도우로 장소에 대한 설명을 표시합니다
                      var infowindow = new daum.maps.InfoWindow({
                          content: '<div style="width:150px;text-align:center;padding:6px 0;">회사</div>'
                      });
                      infowindow.open(map, marker);
                      map.setCenter(coords);

                  }
              });


          }
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

.img {
  height: 100px;
  width: 100px;
}

.info {
  color: white;
}
</style>
