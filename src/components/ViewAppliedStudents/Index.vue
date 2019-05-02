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
          cName : "키"
        }
      },
      components: {
      },
      created(){
        this.applyList();
      },
      methods: {
        applyList(){
          this.$http.get('http://localhost:8888/co/mypage/watchApplyStd',{params:{cName : this.cName}}).then((response) => {
         //    console.log(response)
              for(var i=0; i<response.data.length;i++){
                  this.applylist.push({
                    sName : response.data[i].sName
                  })
              }
          //    console.log(this.applylist);
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
