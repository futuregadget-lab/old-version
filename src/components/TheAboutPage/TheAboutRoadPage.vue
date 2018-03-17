<template>
  <div class="road-page">
    <p>Chaotic Road</p>
    <p class="title"><strong v-t="'aboutPage.roadPage.title'"></strong></p>
    <p v-t="'aboutPage.roadPage.subtitle'"></p>
    <p>&nbsp;</p>
    <p v-html="$t('aboutPage.roadPage.description')"></p>
    <!--Why must it come to this-->
    <p>&nbsp;</p>
    <p><router-link to="/about" v-t="'general.back'"></router-link></p>
  </div>
</template>

<script>
export default {
  name: 'TheAboutRoadPage',
  data () {
    return {}
  }
}
</script>

<style scoped>
.road-page {
  font-size: 16px;
}

p.title > strong {
  font-size: 36px;
}
</style>
