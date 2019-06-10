<!-- 공고 작성 페이지  -->
<template>
  <div class="bg-light">
    <v-base></v-base>
    <section class="section section-lg-bottom bg-light">
      <div class="container" id="apply">
        <div class="row">
          <div class="col-lg-3">
            <v-category></v-category>
          </div>
          <!-- 공백 -->
          <div class="col-lg-1">
          </div>
          <div class="col-lg-8">
            <div class="row">
              <v-error v-if="$store.state.apply.apply_state==0"></v-error>
              <v-write-notice v-if="$store.state.apply.apply_state==1"></v-write-notice>
              <v-read-notice v-if="$store.state.apply.apply_state==2"></v-read-notice>
              <v-modify-notice v-if="$store.state.apply.apply_state==3"></v-modify-notice>
            </div>
          </div>
        </div>
      </div>
    </section>
    <v-footer class="mt-4"></v-footer>
  </div>
</template>

<script>
import Const from '../../constant/constant';
  import VBase from '../Base/Index.vue'
  import VCategory from '../Category/Index.vue'
  import DatePicker from 'v-cal-input'

  import VWriteNotice from './writeNotice.vue'
  import VModifyNotice from './modifyNotice.vue'
  import VError from './Error.vue'
  import VReadNotice from './ReadNotice.vue'
  import VFooter from '../Footer/Index.vue'

  export default{
      name: 'Apply',
      data() {
        return {
        }
      },
      components: {
          VBase,
          VCategory,
          DatePicker,
          VWriteNotice,
          VModifyNotice,
          VError,
          VReadNotice,
          VFooter,
      },
      async created(){
        await this.$http.get(Const.API_SERVER+'/',{'headers': {authorization: `Bearer ${localStorage.token}`}}).then(res => {
          this.user = res.data.user;
          return this.user;
        });
        await this.checkNotice();
      },
      methods: {
        checkNotice(){
          this.$http.get(Const.API_SERVER+'/co/mypage/checkNotice',{params:{cLoginID : this.user.loginId}}).then(res => {
            if(res.data==0){
              this.$store.dispatch('apply/setApplyState',0);
            }
            else{//read resume
              this.$store.dispatch('apply/setApplyState',2);
            }
          });
        },
      }
  }
</script>

<style scoped>
  .section {
    padding-top:130px;
  }
</style>
