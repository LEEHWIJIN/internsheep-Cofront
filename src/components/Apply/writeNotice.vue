<template>
          <div class="row">
            <!-- 대제목 -->
            <div class="col-lg-12 text-center">
              <p class="subtitle">Notice</p>
              <h2 class="section-title">Write a Notice</h2>
            </div>
          <form class="row" v-on:submit.prevent='submitNotice'>
            <!-- <div class="col-lg-12 mb-4">
              <h6 style="font-weight:bold">회사 이미지</h6>

            <div class="file-upload-form">
                Upload an image file:
                <input type="file" @change="previewImage" accept="image/*">
            </div>
            <div class="image-preview" v-if="imageData.length > 0">
                <img class="preview" :src="imageData">
            </div>
            </div> -->
              <div class="col-lg-12">
                  <h6 style="font-weight:bold">회사 소개*</h6>
                  <input class="form-control mb-4" v-model="cInfo" placeholder="회사 소개를 입력 해주세요">
              </div>
              <div class="col-lg-6">
                  <h6 style="font-weight:bold">회사 이메일*</h6>
                  <input class="form-control mb-4" v-model="cEmail" placeholder="회사 이메일을 입력 해주세요">
              </div>
              <div class="col-lg-6">
                  <h6 style="font-weight:bold">담당자 성함*</h6>
                  <input class="form-control mb-4" v-model="cManagerName" placeholder="담당자 성함을 입력 해주세요">
              </div>
              <div class="col-lg-6">
                  <h6 style="font-weight:bold">담당자 연락처</h6>
                  <input class="form-control mb-4" v-model="cManagerPhone" placeholder="담당자 연락처를 입력 해주세요">
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
              <input class="form-control mb-4" onKeyup="this.value=this.value.replace(/[^0-9]/g,'');" v-model="cNumOfPeople" placeholder="모집인원을 숫자로 입력 해주세요">
            </div>
            <div class="col-lg-12">
              <h6 style="font-weight:bold">태그*</h6>
              <p class="mb-1" style="font-weight:bold; font-size:15px; color:grey;">- 추천 태그 검색</p>
             <div class="mb-1">
               <!-- string value -->
               <model-select :options="options" v-model="item" placeholder="태그">
               </model-select>
             </div>
              <p class="mb-1" style="font-weight:bold; font-size:15px; color:grey;">- 추가된 태그</p>
              <div class="bg-gray-light mb-3 p-2">
                <button v-for="(ct,index) in cTag" type="button" class="btn tag-light btn-sm m-1" @click="removeItem(index)" name="button"> {{ct}}<i class="fa fa-plus" style="font-size:14px;"></i></button>
              </div>
            </div>
            <!-- <h6 style="font-weight:bold">사업자등록번호*</h6>
            <div class="col-lg-6">
                  <input class="form-control mb-4" v-model="cID_1" placeholder="사업자등록번호를 입력 해주세요">
            </div><br> -->

      <div class="col-lg-12">
        <h6 style="font-weight:bold">실습시작일*</h6>
        <date-picker v-model="internTermStart"/>
        <!-- <input style="width:200px" type="text" v-model="internTermStart"> -->
      </div>
      <div class="col-lg-12">
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
  import Const from '../../constant/constant';
  import { ModelSelect } from 'vue-search-select'
  export default{
      name: 'writeapply',
      data() {
        return {
          cName:[],
          item: '',
          options: [],
          cLocation:[],
          cBenefit:[],
          cPay : [],
          coTag : [],
          internTermStart : null,
          cOccupation : [],
          cNumOfPeople : [],
          cTag : [],
          cManagerPhone :[],
          cManagerName :[],
          cInfo : [],
          cEmail : [],
          internTermEnd : null,
          imageData: "",
          imageURL : null,
        }
      },
      components: {
          VBase,
          VCategory,
          DatePicker,
          ModelSelect,
      },
      watch:{
        item : function(){
          for(var j = 0;j<this.cTag.length;j++){
            if(this.options[this.item].text==this.cTag[j]){
              return;
            }
          }
          var tagname = this.options[this.item].text;
          this.cTag.push(tagname)
        }
      },
      async created(){
        await this.$http.get(Const.API_SERVER+'/',{'headers': {authorization: `Bearer ${localStorage.token}`}}).then(res => {
          this.user = res.data.user;
          return this.user;
        });
        await this.loadTag();
      },
      methods: {
          loadTag(){
              this.$http.get(Const.API_SERVER+'/co/getAllTag').then((response) => {
                  for(var i =0; i<response.data.length;i++) {
                    this.options.push({value: i, text: response.data[i].tag})
                  }
              })
          },
          removeItem(index){
            this.cTag.splice(index,1)
          },
        //    previewImage(event) {
        //     var input = event.target;
        //           if (input.files && input.files[0]) {
        //         var fr = new FileReader();
        //         fr.onload = (e) => {
        //             this.imageData = e.target.result;
        //         }
        //         fr.readAsDataURL(input.files[0]);
        //         this.imageURL=input.files[0]
        //     }
        // },
        async submitNotice(){
            if(this.internTermStart == null){
              alert("실습 시작 일을 선택해주세요!");
              return;
            }
            if(this.internTermEnd == null){
              alert("실습 종료 일을 선택해주세요!");
              return;
            }
            var data = new FormData();
            data.append('cLoginID',this.user.loginId)
            data.append('cBenefit', this.cBenefit)
            data.append('cPay', this.cPay)
            data.append('internTermStart', this.internTermStart)
            data.append('internTermEnd', this.internTermEnd)
            data.append('cOccupation', this.cOccupation)
            data.append('cNumOfPeople',this.cNumOfPeople)
            data.append('cLocation', this.cLocation)
            data.append('cManagerPhone', this.cManagerPhone)
            data.append('cManagerName', this.cManagerName)
            data.append('cInfo', this.cInfo)
            data.append('cEmail', this.cEmail)
            let config = {
                header : {
                    'Content-Type' : 'multipart/form-data'
                }
            }
          await this.$http.post(Const.API_SERVER+'/co/mypage/writeNotice',data,config).then((response) => {

          })
          await this.$http.post(Const.API_SERVER+'/co/addCoAndTag',{cLoginID:this.user.loginId,tag : this.cTag}).then((response)=>{
            alert("저장 되었습니다.");
            this.$store.dispatch('apply/setApplyState',2);
          })
        },
      }
  }
</script>

<style scoped>
.tag-light {
  /* font-weight: bold; */
  font-size: 14px;
  background: grey;
  color: white;
  border: 0;
  transition: none;
}

.tag-light:hover {
  color: dimgrey;
  background: silver;
}
</style>
