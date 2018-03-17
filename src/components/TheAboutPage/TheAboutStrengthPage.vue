<template>
  <div class="strength-page">
    <p>give and take</p>
    <p class="title"><strong v-t="'aboutPage.strengthPage.title'"></strong></p>
    <p v-t="'aboutPage.strengthPage.subtitle'"></p>
    <p>&nbsp;</p>
    <p v-html="$t('aboutPage.strengthPage.description')"></p>
    <ul>
      <li v-t="'aboutPage.strengthPage.madScientist'"></li>
      <li v-t="'aboutPage.strengthPage.runningFrom'"></li>
      <li v-t="'aboutPage.strengthPage.cosplay'"></li>
      <li v-t="'aboutPage.strengthPage.loli'"></li>
    </ul>
    <p>&nbsp;</p>
    <p><router-link to="/about" v-t="'general.back'"></router-link></p>
  </div>
</template>

<script>
export default {
  name: 'TheAboutStrengthPage',
  data () {
    return {}
  }
}
</script>

<style scoped>
.strength-page {
  font-size: 16px;
}

p.title > strong {
  font-size: 36px;
}
</style>
