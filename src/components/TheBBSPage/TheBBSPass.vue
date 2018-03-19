<template>
  <div class="bbs-pass">
    <p v-t="'bbsPage.adminPage.title'"></p>
    <hr>
    <p>[<router-link to="/" v-t="'bbsPage.returnTop'"></router-link>]</p>
    <hr>
    <p v-t="'bbsPage.adminPage.passwordAsking'"></p>
    <p>
      <input name="password1" id="password1" type="password">
      <input name="Verification" :value="$t('bbsPage.adminPage.authenticate')" type="button">
    </p>
    <p>&nbsp;</p>
    <p v-t="'bbsPage.adminPage.note'"></p>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'TheBBSPass',
  data () {
    return {}
  }
}
</script>

<style scoped>
.bbs-pass {
  background-color: #cc9;
  font-size: small;
  color: #000000;
}
</style>
