<!-- 공고 신청 페이지 -->
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
                <p class="subtitle">Apply</p>
                <h2 class="section-title">Apply Notice</h2>
              </div>
              <div class="col-lg-12 text-center p-0">
                <form v-on:submit.prevent='submitNotice'>
                <textarea class="form-control mb-4" name="name" rows="" cols="80" style="height:300px; background-color:white" readonly="readonly">
                제 1조 참가신청
                아주대학교 현장실습 기업 참가신청은 조기에 완료된다.

                제 2조 부스배정
                참가업체의 부스 배정은 전시품의 품목별 신청접수 및 신청금 납입 순서에 따라 전시면적, 전시품목, 참가실적 등을 감안하여 우리조합이 임의 배정한다. 배정된 부스에 대하여는 일부 또는 전부를 제3자에게 대여, 양도 또는 참가업체간 상호 교환할 수 없다.

                조기신청기간(1차 2018년 4월 30일까지, 2차 6월 15일까지)에 신청하고 업체에 한하여는 부스배정시 부스배정 규정에 의거 선호위치를 고려하여 진행할 수 있다.

                제3조 사전심사
                전시회의 전문성 및 특수성을 감안하여 참가품목에 대한 사전 심사를 할 수 있으며, 전시회 성격과 무관한 품목에 대하여는 참가신청을 거절 할 수 있다. 사전점검 불가로 인한 전시회 성격과 무관한 전시품은 전시중이라도 반품 조치 할 수 있다.

                제4조 중도포기 및 취소
                참가업체가 아래의 각호에 해당하는 경우에 일방적으로 계약해지 또는 전시기간 중이라도 참가를 취소, 반출을 명할 수 있다. 이 경우 기 납입된 참가료는 반환하지 않는다.
                가) 참가업체가 전시 성격과 부합하지 않는 제품을 전시할 경우
                나) 참가업체가 세부운영요령을 준수하지 않고 전시회 운영을 저해하는 행위를 할 경우
                다) 배정된 부스의 일부 또는 전부의 사용을 거부하거나, 주최측의 허가없이 제 3자에게 양도하는 경우

                참가업체가 참가 중도 포기한 경우 잔여기간에 따라 아래의 규정을 따른다.

                취소일자	위약금
                2018년 12월 31일 이전	취소한 부스 임차료의 30% 부과
                2019년 1월 1일 ~ 1월 31일	취소한 부스 임차료의 50% 부과
                2019년 2월 1일 이후	취소한 부스 임차료의 100% 부과제5조 조기신청
                1차 2018년 4월 30일까지, 2차 2018년 6월 15일까지 참가신청하고, 인보이스에 의거 신청금을 완납해야 조기신청에 대한 할인 적용(1차 10%, 2차 5%)이 된다.

                제6조 규정해석
                본 참가규정에 명시되지 않은 사항은 조합과 상호 협의하여 결정한다.

                이상 끝.
                </textarea>

                <input type="checkbox" name="checkbox1" value="agree"> 이용약관과 개인정보 수집 및 이용에 대한 안내에 동의합니다. <br><br>
                <button  class="btn btn-primary" type="submit" >N차 지원하기</button>
            </form>
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
  export default{
      name: 'Apply',
      data() {
        return {
          applylist:[],
          cName:'고비포선라이즈',
          applyOrder: [],
          applySemester : [],
        }
      },
      components: {
        VBase,
        VCategory,
      },
      created(){
        this.$http.get('http://localhost:8888/',{'headers': {authorization: `Bearer ${localStorage.token}`}}).then(res => {
          this.user = res.data.user;
          return this.user
        });
      },
      methods: {
        submitNotice(loginId){
          this.$http.get('http://localhost:8888/admin/recentApplyTerm').then((response) => {
              console.log(response.data)
            this.applyOrder = response.data.applyOrder;
            this.applySemester = response.data.applySemester;
            var data = {
              applyOrder : this.applyOrder,
              applySemester : this.applySemester,
            }

              this.$http.get('http://localhost:8888/co/mypage/checkApplyNotice',{params:{cLoginID:this.user.loginId, applyOrder : this.applyOrder, applySemester : this.applySemester}}).then((response) => {
                console.log(response.data)
              if(response.data=='1'){
                alert("이미 신청하였습니다.")
              }
              else {
                this.$http.post('http://localhost:8888/co/mypage/applyNotice',{cLoginID:this.user.loginId, data}).then((response) => {
              if(response.data=='1'){
                alert("신청되었습니다.")
              }
              else {
                alert("신청에 실패 했습니다. 다시 시도해 주세요.")
              }
            })
              }
            })
          })
        },
      }
  }
</script>

<style scoped>
#apply{
}
</style>
