<template>
  <div id="apply">
    <form v-on:submit.prevent='submitNotice'>
      <label>회사명*</label><br>
      <input v-model="cName" placeholder="회사명울 입력 해주세요."><br>
      <label>담당자 이름*</label><br>
      <input v-model="cManagerName" placeholder="담당자 이름을 입력 해주세요."><br>
      <label>회사 주소</label><br>
      <input v-model="cLocation" placeholder="회사 주소를 입력 해주세요"><br>
      <label>복리후생*</label><br>
      <input v-model="cBenefit" placeholder="복리후생 정보를 입력 해주세요"><br>
      <label>급여*</label><br>
      <input v-model="cPay" placeholder="급여 정보를 입력 해주세요"><br>
      <label>실습시작일*</label><br>
      <input v-model="InternTermStart" placeholder="실습시작일을 입력 해주세요"><br>
      <label>활동부서*</label><br>
      <input v-model="cOccupation" placeholder="활동부서를 입력 해주세요"><br>
      <label>모집인원*</label><br>
      <input v-model="cNumOfPeople" placeholder="모집인원을 입력 해주세요"><br>
      <label>태그*</label><br>
      <input v-model="cTag" placeholder="태그를 입력 해주세요"><br>
      <label>사업자등록번호*</label><br>
      <input v-model="cID_1" placeholder="사업자등록번호를 입력 해주세요"><br>
      <label>실습종료일*</label><br>
      <input v-model="internTermEnd" placeholder="실습종료일을 입력 해주세요"><br>
      <input class="hello" type="submit" value="확인">
    </form>
  </div>
</template>


<script>
  export default{
      name: 'Apply',
      data() {
        return {
          cName:[],
          cManagerName:[],
          cLocation:[],
          cBenefit:[],
        }
      },
      components: {

      },
      created(){

      },
      methods: {
         submitNotice(){
           this.$http.post('http://localhost:8888/co/mypage/writeNotice',{cName:this.cName,cManagerName: this.cManagerName}).then((response) => {
               console.log(this.cName)
               console.log(this.cManagerName)
               this.cName = "";
               this.cManagerName="";
             })
         },
      }
  }
</script>

<style scoped>
#apply{
  margin-left: 200px;
  margin-top: 200px;
}
</style>
