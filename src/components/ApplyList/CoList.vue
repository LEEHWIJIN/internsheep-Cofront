<template>
  <div id="applyList">
    <div class="comanyList">
        <div v-for='(AL,index) in applylist' :key="AL.cNoticeID" @click="clickCo(index)">
          {{index+1}}.
          기업명 : {{AL.cName}}<br>
          매니저 : {{AL.cManagerName}}<br><br>
        </div>
    </div>
  </div>
</template>


<script>
  export default{
      name: 'applyList',
      data() {
        return {
    
        }
      },
      components: {
          
      },
      props:{
        applylist:{
            type:Array,
            required: true,
        },
      },
      created(){
        //this.applyList();
      },
      methods: {
          
      }
  }
</script>

<style scoped>
#applyList{
  margin-left: 200px;
  margin-top: 200px;
}
</style>