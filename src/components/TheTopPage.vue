<template>
  <div class="top-page">
    <p><img src="../assets/title.jpg" alt="" height="70" width="547"></p>
    <p class="title"><strong>HOMEPAGE</strong></p>
    <i18n path="topPage.visitor" tag="p">
      <span place="counter" class="counter" v-t="{ path: 'topPage.counter', args: { counter: '0000225485558' } }"></span>
    </i18n>
    <p class="welcome" v-t="'topPage.welcome'"></p>
    <p>&nbsp;</p>
    <p class="blink" v-t="'topPage.breakingNews'"></p>
    <p class="blink" v-t="'topPage.stageOne'"></p>
    <p></p>
    <p class="update"><router-link to="/gadgets" v-t="'topPage.futureGadget'"></router-link></p>

    <table border="1">
      <tbody>
        <tr>
          <td v-html="$t('topPage.about')"></td>
        </tr>
      </tbody>
    </table>

    <p>&nbsp;</p>
    <p v-t="'topPage.compatibility'"></p>
    <p v-t="'topPage.resolution'"></p>
    <p>&nbsp;</p>
    <i18n path="topPage.notice" tag="p">
      <a place="site" href="http://futuregadget-lab.us/" target="_blank">Future Gadget Lab</a>
    </i18n>
    <i18n path="topPage.credits" tag="p">
      <a place="name" href="https://github.com/alessandrojean/mirai-gadget-lab" target="_blank">alessandrojean</a>
      <a place="vuejs" href="https://vuejs.org/" target="_blank">Vue.js</a>
    </i18n>
    <p>&nbsp;</p>
    <i18n path="topPage.language" tag="p">
      <select v-model="selectedLanguage" @change="changeLanguage">
        <option v-for="lang in languages" :key="lang.label" :value="lang.label">{{ lang.name }}</option>
      </select>
    </i18n>
    <p><img src="../assets/1f.jpg" alt="burankankoubou" height="100" width="400"></p>
  </div>
</template>

<script>
export default {
  name: 'TheTopPage',
  data () {
    return {
      languages: [
        { name: 'English', label: 'en' },
        { name: '日本語', label: 'jp' }
      ],
      selectedLanguage: 'en'
    }
  },
  methods: {
    changeLanguage (event) {
      this.$i18n.locale = this.selectedLanguage
      document.querySelector('html').setAttribute('lang', this.selectedLanguage)
      document.title = this.$t('general.title')
    }
  }
}
</script>

<style scoped>
.top-page {
  font-size: x-small;
  background-image: url(../assets/haikei.jpg);
  background-repeat: no-repeat;
  background-position: top center;
}

p.title {
  color: #ff0;
  font-size: xx-large;
}

span.counter {
  font-size: xx-large;
  color: #f00;
}

p.welcome {
  font-size: large;
  color: #f0f;
}

p.update {
  font-size: large;
}

p.blink {
  animation: blink 800ms linear infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
