<template>
  <div class="disclaimer-page">
    <p class="title"><strong v-t="'aboutPage.aboutSitePage.titleWithDash'"></strong></p>
    <p class="left">
      <br>
      <span v-html="$t('aboutPage.aboutSitePage.disclaimer')"></span>
    </p>
    <p class="left" v-html="$t('aboutPage.aboutSitePage.inquiries')"></p>
    <p>&nbsp;</p>
    <p><router-link to="/about" v-t="'general.back'"></router-link></p>
  </div>
</template>

<script>
export default {
  name: 'TheAboutDisclaimerPage',
  data () {
    return {}
  }
}
</script>

<style scoped>
.disclaimer-page {
  font-size: 16px;
}

p.title > strong {
  font-size: 36px;
}

p.left {
  text-align: left;
}

p.left > span {
  text-align: left;
}
</style>
