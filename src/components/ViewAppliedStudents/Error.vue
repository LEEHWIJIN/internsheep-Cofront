<template lang="html">
  <div class="container pretty">
    <div class="outer">
      <div class="inner">
        <div class="centered">
          <!-- 지원학생 관리 페이지일 경우 -->
          <h3 style="font-weight:bold;">아직 지원한 학생이<br>없습니다! </h3><br>
          <!-- <h4 href="#" @click="goResume" style="cursor: Pointer;">이력서 작성하러 가기 -></h4> -->

          <!-- 보고서 작성 페이지  || 후기 작성 페이지일 경우-->
          <!-- <h3 style="font-weight:bold;">어머나, <br>아직 실습중이<br>아니시네요! </h3><br>
          <h4 href="#" @click="goHome">홈으로 돌아가기 -></h4> -->

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  name: 'app',
  data() {
    return {
    }
  },
  components: {
      //VResume
  },
  methods: {
    goResume(){
    this.$router.push({name: "Resume"})
    },
    goHome(){
    this.$router.push({name: "Home"})
    },
  }
}
</script>

<style scoped>
.pretty {
  width:100%;
  height:100%;
  margin: 40px auto;
}

.outer {
  display: table;
  width: 100%;
  height: 100%;
}

.inner {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}

.centered {
  position: relative;
  display: inline-block;
  width: 70%;
  padding: 1em;
}
</style>
