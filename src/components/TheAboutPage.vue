<template>
  <div class="about-page">
    <p class="title"><strong>About Lab</strong></p>
    <p>~Vanishment this world like nightmares is our objective us fugitives of eternity~</p>
    <p></p>
    <p><router-link to="/about/road">Road of procure the chaotic</router-link></p>
    <p><router-link to="/about/labmen">True name's of those chosen</router-link></p>
    <p><router-link to="/about/strength">Want the strength?</router-link></p>
    <p>&nbsp;</p>
    <p><router-link to="/about/disclaimer">about site</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'TheAboutPage',
  data () {
    return {}
  }
}
</script>

<style scoped>
.about-page {
  font-size: 16px;
}

p.title > strong {
  font-size: 36px;
}
</style>
