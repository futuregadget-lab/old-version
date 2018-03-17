<template>
  <div class="about-page">
    <p class="title"><strong v-t="'aboutPage.title'"></strong></p>
    <p v-t="'aboutPage.subtitle'"></p>
    <p></p>
    <p><router-link to="/about/road" v-t="'aboutPage.roadPage.title'"></router-link></p>
    <p><router-link to="/about/labmen" v-t="'aboutPage.labmenPage.title'"></router-link></p>
    <p><router-link to="/about/strength" v-t="'aboutPage.strengthPage.title'"></router-link></p>
    <p>&nbsp;</p>
    <p><router-link to="/about/disclaimer" v-t="'aboutPage.aboutSitePage.title'"></router-link></p>
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
