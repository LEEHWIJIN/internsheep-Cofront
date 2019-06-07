<template>
          <div class="row">
            <!-- 대제목 -->
            <div class="col-lg-12 text-center">
              <p class="subtitle">Notice</p>
              <h2 class="section-title">Write a Notice</h2>
            </div>
          <form class="row" v-on:submit.prevent='submitNotice'>
            <div class="col-lg-12 mb-4">
              <h6 style="font-weight:bold">회사 이미지</h6>
    
            <div class="file-upload-form">
                Upload an image file:
                <input type="file" @change="previewImage" accept="image/*">
            </div>
            <div class="image-preview" v-if="imageData.length > 0">
                <img class="preview" :src="imageData">
            </div>
            </div> 
            <div class="col-lg-6">
              <h6 style="font-weight:bold">회사 주소*</h6>
              <input class="form-control mb-4" v-model="cLocation" placeholder="회사 주소를 입력 해주세요">
            </div>
            <div class="col-lg-6">
              <h6 style="font-weight:bold">복리후생*</h6>
              <input class="form-control mb-4" v-model="cBenefit" placeholder="복리후생 정보를 입력 해주세요">
            </div>
            <div class="col-lg-6">
              <h6 style="font-weight:bold">급여*</h6>
              <input class="form-control mb-4" v-model="cPay" placeholder="급여 정보를 입력 해주세요">
            </div>
            <div class="col-lg-6">
              <h6 style="font-weight:bold">활동부서*</h6>
              <input class="form-control mb-4" v-model="cOccupation" placeholder="활동부서를 입력 해주세요">
            </div>
            <div class="col-lg-6">
              <h6 style="font-weight:bold">모집인원*</h6>
              <input class="form-control mb-4" onKeyup="this.value=this.value.replace(/[^0-9]/g,'');" v-model="cNumOfPeople" placeholder="모집인원을 숫자로 입력 해주세요">명
            </div>
            <div class="col-lg-6">
              <h6 style="font-weight:bold">태그*</h6>
              <input class="form-control mb-4" v-model="cTag" placeholder="태그를 입력 해주세요">
            </div>
            <!-- <h6 style="font-weight:bold">사업자등록번호*</h6>
            <div class="col-lg-6">
                  <input class="form-control mb-4" v-model="cID_1" placeholder="사업자등록번호를 입력 해주세요">
            </div><br> -->

      <div class="col-lg-6">
        <h6 style="font-weight:bold">실습시작일*</h6>
        <date-picker v-model="internTermStart"/>
        <!-- <input style="width:200px" type="text" v-model="internTermStart"> -->
      </div>
      <div class="col-lg-6">
        <h6 style="font-weight:bold">실습종료일*</h6>
        <date-picker v-model="internTermEnd"/>
        <!-- <input style="width:200px" type="text" v-model="internTermEnd"> -->
      </div>
      <div class="col-12 text-center">
        <button class="btn btn-primary mt-0" type="submit">제출하기</button>
      </div>
    </form>
  </div>
</template>

<script>
  import VBase from '../Base/Index.vue'
  import VCategory from '../Category/Index.vue'
  import DatePicker from 'v-cal-input'
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
          cTag : [],
          internTermEnd : null,
             imageData: "",
           imageURL : null,
        }
      },
      components: {
          VBase,
          VCategory,
          DatePicker,
      },
      created(){
        this.$http.get('API_SERVER/',{'headers': {authorization: `Bearer ${localStorage.token}`}}).then(res => {
          this.user = res.data.user;
          return this.user;
        });

      },
      methods: {
           previewImage(event) {
            var input = event.target;
                  if (input.files && input.files[0]) {
                var fr = new FileReader();
                fr.onload = (e) => {
                    this.imageData = e.target.result;
                }
                fr.readAsDataURL(input.files[0]);
                this.imageURL=input.files[0]
            }
        }, 
        submitNotice(){
            var data = new FormData();
            data.append('cLoginID',this.user.loginId)
            data.append('image', this.imageURL)
            data.append('cBenefit', this.cBenefit)
            data.append('cPay', this.cPay)
            data.append('internTermStart', this.internTermStart)
            data.append('internTermEnd', this.internTermEnd)
            data.append('cOccupation', this.cOccupation)
            data.append('cNumOfPeople',this.cNumOfPeople)
            data.append('cTag',  this.cTag)
            data.append('cLocation', this.cLocation)
            let config = {
                header : {
                    'Content-Type' : 'multipart/form-data'
                }
            }

          this.$http.post('API_SERVER/co/mypage/writeNotice',data,config).then((response) => {
            alert("저장 되었습니다.");
            this.$store.dispatch('apply/setApplyState',2);
          })
        },
      }
  }
</script>

<style scoped>
</style>
