<!-- 공고 작성 페이지  -->
<template>
          <div class="row">
            <!-- 대제목 -->
            <div class="col-lg-12 text-center">
              <p class="subtitle">Notice</p>
              <h2 class="section-title">Modify Notice</h2>
            </div>
          <form class="row" v-on:submit.prevent='submitNotice'>

            <div class="col-lg-12 mb-4">
              <h6 style="font-weight:bold">회사 이미지*</h6>   <p> *파일을 업로드 해주세요</p>
              <div class="file-upload-form">

                  <input type="file" @change="previewImage" accept="image/*">
              </div>
              <div class="image-preview" v-if="imageData.length > 0">
                  <img class="preview" :src="imageData">
              </div>
            </div>
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
            <div class="col-lg-12">
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
<!---  -->
             <div class="mb-1">
               <!-- string value -->
               <model-select :options="options2"
                             v-model="item2"
                                       placeholder="태그" @select="selectFromParentComponent2">
                   {{lastSelect}}
               </model-select>
             </div>
<!--  -->
              <!--<p class="mb-1" style="font-weight:bold; font-size:15px; color:grey;">- 사용자 입력 태그</p>-->
              <!--<input class="form-control mb-4" v-model="cTag" placeholder="태그를 입력 해주세요 ( ex. #프론트엔드개발자 #서버관리 )">-->
              <p class="mb-1" style="font-weight:bold; font-size:15px; color:grey;">- 추가된 태그</p>
              <div class="bg-gray-light mb-3 p-2">
                <button v-for="(ct,index) in coTag" type="button" class="btn tag-light btn-sm m-1" name="button"> {{ct}}<i class="fa fa-plus" style="font-size:14px;"></i></button>
                <!--<button onclick="cTagArray('C++')" type="button" class="btn tag-light btn-sm m-1" name="button">C++ &nbsp; &nbsp;<i class="fa fa-plus" style="font-size:14px;"></i></button>-->
                <!--<button onclick="cTagArray('C')" type="button" class="btn tag-light btn-sm m-1" name="button">C &nbsp; &nbsp;<i class="fa fa-plus" style="font-size:14px;"></i></button>-->
                <!--<button onclick="cTagArray('Python')" type="button" class="btn tag-light btn-sm m-1" name="button">Python &nbsp; &nbsp;<i class="fa fa-plus" style="font-size:14px;"></i></button>-->
                <!--<button onclick="cTagArray('Javascript')" type="button" class="btn tag-light btn-sm m-1" name="button">Javascript &nbsp; &nbsp;<i class="fa fa-plus" style="font-size:14px;"></i></button>-->
                <!--<button onclick="cTagArray('Database')" type="button" class="btn tag-light btn-sm m-1" name="button">Database &nbsp; &nbsp;<i class="fa fa-plus" style="font-size:14px;"></i></button>-->
                <!--<button onclick="cTagArray('Mysql')" type="button" class="btn tag-light btn-sm m-1" name="button">Mysql &nbsp; &nbsp;<i class="fa fa-plus" style="font-size:14px;"></i></button>-->
                <!--<button onclick="cTagArray('Django')" type="button" class="btn tag-light btn-sm m-1" name="button">Django &nbsp; &nbsp;<i class="fa fa-plus" style="font-size:14px;"></i></button>-->
                <!--<button onclick="cTagArray('Vue.js')" type="button" class="btn tag-light btn-sm m-1" name="button">Vue.js &nbsp; &nbsp;<i class="fa fa-plus" style="font-size:14px;"></i></button>-->
                <!--<button onclick="cTagArray('HTML/CSS')" type="button" class="btn tag-light btn-sm m-1" name="button">Html/Css &nbsp; &nbsp;<i class="fa fa-plus" style="font-size:14px;"></i></button>-->
                <!-- <input type="button" value="^_^" id="cat"  onclick="change2(this)" style="background-color:white;"><br>
클릭하면 바뀌는 버튼<br><br> -->
              </div>
            </div>
            <!-- <h6 style="font-weight:bold">사업자등록번호*</h6>
            <div class="col-lg-6">
                  <input class="form-control mb-4" v-model="cID_1" placeholder="사업자등록번호를 입력 해주세요">
            </div><br> -->

      <div class="col-lg-6">
        <h6 style="font-weight:bold">실습시작일*</h6>
        <date-picker v-model="internTermStart"/>
      </div>
      <div class="col-lg-6">
        <h6 style="font-weight:bold">실습종료일*</h6>
        <date-picker v-model="internTermEnd"/>
      </div>
      <div class="col-12 text-center">
        <button class="btn btn-primary mt-0" type="submit">제출하기</button>
      </div>
    </form>
  </div>
</template>

<script>
//
import { ModelSelect } from 'vue-search-select'
//
import Const from '../../constant/constant';
  import VBase from '../Base/Index.vue'
  import VCategory from '../Category/Index.vue'
  import DatePicker from 'v-cal-input'
  export default{
      name: 'Modifyapply',
      data() {
        return {
          options2: [],
            coTag : [],
          item2: '',
          cName:[],
          cLocation:[],
          cBenefit:[],
          cPay : [],
            cManagerPhone :[],
            cManagerName :[],
            cInfo : [],
            cEmail : [],
          internTermStart : null,
          cOccupation : [],
          cNumOfPeople : [],
          cTag : [],
          internTermEnd : null,
           imageData: "",
           imageURL : null,
            lastSelect : {},
        }
      },
      components: {
          VBase,
          VCategory,
          DatePicker,
          ModelSelect,
      },
      async created(){
        await this.$http.get(Const.API_SERVER+'/',{'headers': {authorization: `Bearer ${localStorage.token}`}}).then(res => {
          this.user = res.data.user;
          return this.user;
        });
        await this.getNotice();
        this.loadTag();
        await this.loadcoTag()
      },
      methods: {
        //
        reset2 () {
          this.item2 = ''
        },
        selectFromParentComponent2 () {
          // select option from parent component
          this.item2 = item2
          this.lastSelect = lastSelect
            console.log(this.item2)
            console.log(this.lastSelect)
        },
          loadTag(){
              this.$http.get(Const.API_SERVER+'/co/getAllTag').then((response) => {
                  for(var i =0; i<response.data.length;i++) {
                      this.options2.push({value: i, text: response.data[i].tag})
                  }
              })
          },
        loadcoTag(){
                this.$http.get(Const.API_SERVER+'/co/getCoTag',{params:{cLoginID:this.user.loginId}}).then((response) => {
                    for(var i =0; i<response.data.length;i++) {
                        this.coTag.push(response.data[i].tag)
                    }
                })
        },
        cTagArray(lang){
          var overlap = 0; //중복횟수를 저장하는 변수 선언

          for(var i=0; i<this.cTag.length ; i++){
            if(cTag[i]==lang){  // lang과 같은 태그가 존재할 경우
              overlap++; //중복횟수를 늘린다
            }
          }

          if(overlap>=1){ // 중복횟수가 1이상일 경우
            return;
          }
          else{ // 아닐경우
            this.cTag.push(lang); // cTag 배열에 저장
          }

        },
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
            data.append('cManagerPhone', this.cManagerPhone)
            data.append('cManagerName', this.cManagerName)
            data.append('cInfo', this.cInfo)
            data.append('cEmail', this.cEmail)
            let config = {
                header : {
                    'Content-Type' : 'multipart/form-data'
                }
            }
            this.$http.post(Const.API_SERVER+'/co/mypage/modifyNotice',data,config).then((response) => {
                alert("수정되었습니다.")
                this.$store.dispatch('apply/setApplyState',2);
            })
        },
        getNotice(){
          this.$http.get(Const.API_SERVER+'/co/mypage/watchNotice',{params:{cLoginID:this.user.loginId}}).then(res=>{
            this.cName = res.data[0].cName;
            this.cLocation = res.data[0].cLocation;
            this.cBenefit = res.data[0].cBenefit;
            this.cPay = res.data[0].cPay;
            this.cOccupation = res.data[0].cOccupation;
            this.cNumOfPeople = res.data[0].cNumOfPeople;
            this.cTag = res.data[0].cTag;
            this.cInfo = res.data[0].cInfo;
            this.cEmail = res.data[0].cEmail;
            this.cManagerPhone = res.data[0].cManagerPhone;
            this.cManagerName =res.data[0].cManagerName;
          })
        },
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
