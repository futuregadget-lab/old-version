<template>
  <div class="bbs-page">
    <p v-t="'bbsPage.title'"></p>
    <p v-t="'bbsPage.subtitle'"></p>
    <hr>
    <!-- eslint-disable-next-line -->
    <p>[<router-link to="/" v-t="'bbsPage.returnTop'"></router-link>]　[<router-link to="/bbs/pass" v-t="'bbsPage.admin'"></router-link>]</p>
    <hr>
    <TheBBSForm></TheBBSForm>
    <hr>
    <TheBBSComments></TheBBSComments>
    <hr>
    <p>&nbsp;</p>
  </div>
</template>

<script>
import TheBBSForm from './TheBBSPage/TheBBSForm'
import TheBBSComments from './TheBBSPage/TheBBSComments'

export default {
  name: 'TheBBSPage',
  components: { TheBBSForm, TheBBSComments },
  data () {
    return {}
  }
}
</script>

<style scoped>
.bbs-page {
  background-color: #cc9;
  font-size: 16px;
  color: #000000;
}
</style>
