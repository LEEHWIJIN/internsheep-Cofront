<!-- 신청 학생 뷰 페이지 -->
<template>
  <div id="apply">
    <div v-for='sc in applylist'>
      학생명 : {{sc.sName}}<br>
    </div>
  </div>
</template>

<script>
  export default{
      name: 'Apply',
      data() {
        return {
          applylist:[],
          selectedCo:[],
          user : {},
        }
      },
      components: {
      },
      created(){
        this.$http.get('http://localhost:8888/',{'headers': {authorization: `Bearer ${localStorage.token}`}}).then(res => {
          this.user = res.data.user;
          // this.applyList(this.user);
        });
      },
      methods: {
        applyList(loginId){
          this.$http.get('http://localhost:8888/co/mypage/watchApplyStd',{params:{cLoginID : loginId.loginId}}).then((response) => {
            // for(var i=0; i<response.data.length;i++){
            //     this.applylist.push({
            //       sName : response.data[i].sName
            //     })
            // }
            console.log(response.data)
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
