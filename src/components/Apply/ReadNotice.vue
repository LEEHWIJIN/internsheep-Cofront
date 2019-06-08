<template>
    <div class="row">
      <!-- 대제목 -->
      <div class="col-lg-12 text-center">
        <div class="text-right">
          <button class="btn btn-light btn-sm" @click="modifyApply">수정하기</button>
        </div>
        <p class="subtitle">Notice</p>
        <h2 class="section-title">Read a Notice</h2>
      </div>
      <form class="row" v-on:submit.prevent='submitNotice'>
        <div class="col-lg-12">
          <h6 style="font-weight:bold">회사 소개*</h6>
          <input class="form-control mb-4" v-model="cInfo" placeholder="회사 소개를 입력 해주세요" readonly="readonly">
        </div>
        <div class="col-lg-6">
          <h6 style="font-weight:bold">회사 이메일*</h6>
          <input class="form-control mb-4" v-model="cEmail" placeholder="회사 이메일을 입력 해주세요" readonly="readonly">
        </div>
        <div class="col-lg-6">
          <h6 style="font-weight:bold">담당자 성함*</h6>
          <input class="form-control mb-4" v-model="cManagerName" placeholder="담당자 성함을 입력 해주세요" readonly="readonly">
        </div>
        <div class="col-lg-6">
          <h6 style="font-weight:bold">담당자 연락처</h6>
          <input class="form-control mb-4" v-model="cManagerPhone" placeholder="담당자 연락처를 입력 해주세요" readonly="readonly">
        </div>
        <div class="col-lg-6">
          <h6 style="font-weight:bold">회사 주소*</h6>
          <input class="form-control mb-4" v-model="cLocation" placeholder="회사 주소를 입력 해주세요" readonly="readonly">
        </div>
        <div class="col-lg-6">
          <h6 style="font-weight:bold">복리후생*</h6>
          <input class="form-control mb-4" v-model="cBenefit" placeholder="복리후생 정보를 입력 해주세요" readonly="readonly">
        </div>
        <div class="col-lg-6">
          <h6 style="font-weight:bold">급여*</h6>
          <input class="form-control mb-4" v-model="cPay" placeholder="급여 정보를 입력 해주세요" readonly="readonly">
        </div>
        <div class="col-lg-6">
          <h6 style="font-weight:bold">활동부서*</h6>
          <input class="form-control mb-4" v-model="cOccupation" placeholder="활동부서를 입력 해주세요" readonly="readonly">
        </div>
        <div class="col-lg-6">
          <h6 style="font-weight:bold">모집인원*</h6>
          <input class="form-control mb-4" v-model="cNumOfPeople" placeholder="모집인원을 입력 해주세요" readonly="readonly">
        </div>
        <div class="col-lg-6">
          <h6 style="font-weight:bold">태그*</h6>
          <input class="form-control mb-4" v-model="cTag" placeholder="태그를 입력 해주세요" readonly="readonly">
        </div>
        <!-- <h6 style="font-weight:bold">사업자등록번호*</h6>
        <div class="col-lg-6">
              <input class="form-control mb-4" v-model="cID_1" placeholder="사업자등록번호를 입력 해주세요">
        </div><br> -->

        <div class="col-lg-6">
          <h6 style="font-weight:bold">실습시작일*</h6>
          <input class="form-control mb-4" type="text" v-model="internTermStart" readonly="readonly">
        </div>
        <div class="col-lg-6">
          <h6 style="font-weight:bold">실습종료일*</h6>
          <input class="form-control mb-4" type="text" v-model="internTermEnd" readonly="readonly">
          <Image src="https://art.nativescript-vue.org/NativeScript-Vue-White-Green.png" stretch="none" />
        </div>
        <div class="col-lg-6">
          <h6 style="font-weight:bold">프로필 사진*</h6>
          <img id='img' :src="uploadImage" style="width:200px; height:200px; background-color: white; border: 1px solid #DDD; padding: 5px;"/>
        </div>
      </form>
    </div>
</template>

<script>
  import VBase from '../Base/Index.vue'
  import VCategory from '../Category/Index.vue'
  import DatePicker from 'v-cal-input'
  import Const from '../../constant/constant';
  export default{
      name: 'writeapply',
      data() {
        return {
          cName:[],
          cLocation:[],
          cBenefit:[],
          cPay : [],
          internTermStart : null,
          cOccupation : [],
          cNumOfPeople : [],
            cManagerPhone :[],
            cManagerName :[],
            cInfo : [],
            cEmail : [],
          cTag : [],
          internTermEnd : null,
          image : null,
          uploadImage : "",

        }
      },
      components: {
          VBase,
          VCategory,
          DatePicker,
      },
      async created(){
        await this.$http.get(Const.API_SERVER+'/',{'headers': {authorization: `Bearer ${localStorage.token}`}}).then(res => {
          this.user = res.data.user;
          return this.user;
        });
        await this.getNotice();
        await this.loadImage(this.user.loginId)
      },
      methods: {
        modifyApply(){
          this.$store.dispatch('apply/setApplyState',3);
        },
        async getNotice(){
          await this.$http.get(Const.API_SERVER+'/co/mypage/watchNotice',{params:{cLoginID:this.user.loginId}}).then(res=>
          {
              // console.log(res.data[0])
            this.cName = res.data[0].cName;
            this.cLocation = res.data[0].cLocation;
            this.cBenefit = res.data[0].cBenefit;
            this.cPay = res.data[0].cPay;
            this.internTermStart = res.data[0].internTermStart.split('T')[0];
            this.internTermEnd = res.data[0].internTermEnd.split('T')[0];
            this.cOccupation = res.data[0].cOccupation;
            this.cNumOfPeople = res.data[0].cNumOfPeople;
            this.cTag = res.data[0].cTag;
              this.cInfo = res.data[0].cInfo;
                this.cEmail = res.data[0].cEmail;
                this.cManagerName = res.data[0].cManagerName;
                this.cManagerPhone = res.data[0].cManagerPhone;
          })
        },
        loadImage(loginId){
            this.uploadImage = Const.API_SERVER+'/co/mypage/getProfileImage?cLoginID='+this.user.loginId
        }
      }
  }
</script>

<style scoped>
.file-upload-form, .image-preview {
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    padding: 20px;
}
img.preview {
    width: 200px;
    background-color: white;
    border: 1px solid #DDD;
    padding: 5px;
}
</style>
