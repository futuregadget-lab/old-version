<template>
  <div class="bbs-pass">
    <p>Phoenix BBS Admin Page</p>
    <hr>
    <p>[<router-link to="/">Return the Top</router-link>]</p>
    <hr>
    <p>Please entering of password.</p>
    <p>
      <input name="password1" id="password1" type="password">
      <input name="Verification" value="Authenticate" type="button">
    </p>
    <p>&nbsp;</p>
    <p>
      To RABOMEN: Any fellow who forgetting of password look on paper on left back of the stage on the refrigerator. Put back if look!
    </p>
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
