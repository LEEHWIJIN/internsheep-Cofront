<template>
  <div id="Apply">
    <form v-on:submit.prevent='submitResume'>
    </form>
  </div>
</template>


<script>
  export default{
      name: 'Apply',
      data() {
        return {
          checkedNames:[],
          sName:[],
          sNum:[],
          email:[],
        }
      },
      components: {

      },
      created(){

      },
      methods: {
        // submitResume(){
        //   this.$http.post('http://localhost:8888/std/resume',{sNum:this.sNum,sName: this.sName}).then((response) => {
        //       console.log(this.sName)
        //       console.log(this.sNum)
        //       this.sName = "";
        //       this.sNum="";
        //     })
        // },
      }
  }
</script>

<style scoped>
#apply{
  margin-left: 200px;
  margin-top: 200px;
}
</style>
