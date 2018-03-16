<template>
  <div class="bbs-page">
    <p>Phoenix BBS</p>
    <p>(Annex of Future Gadget Laboratory)</p>
    <hr>
    <!-- eslint-disable-next-line -->
    <p>[<router-link to="/">Return the Top</router-link>]　[<router-link to="/bbs/pass">Admin</router-link>]</p>
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
