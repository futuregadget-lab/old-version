<template>
  <div class="labmen-page">
    <p>The True LaboratoryMembers</p>
    <p class="title"><strong v-t="'aboutPage.labmenPage.title'"></strong></p>
    <p v-t="'aboutPage.labmenPage.subtitle'"></p>
    <p>&nbsp;</p>
    <div v-for="labmen in $t('aboutPage.labmenPage.laboratoryMembers')" :key="labmen.number">
      <p class="labmen-title" v-bind:class="{ hidden: labmen.hidden }">{{ $t('aboutPage.labmenPage.labmenTitle', { number: labmen.number, name: labmen.name }) }}</p>
      <p v-html="labmen.description" v-bind:class="{ hidden: labmen.hidden }"></p>
    </div>
    <p>&nbsp;</p>
    <p><router-link to="/about" v-t="'general.back'"></router-link></p>
  </div>
</template>

<script>
export default {
  name: 'TheAboutLabmenPage',
  data () {
    return {}
  }
}
</script>

<style scoped>
.labmen-page {
  font-size: 16px;
}

p.title > strong {
  font-size: 36px;
}

p.labmen-title {
  color: #ff0000;
}

.hidden {
  color: #1a073e !important;
}
</style>
