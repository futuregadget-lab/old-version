<template>
  <div class="disclaimer-page">
    <p class="title"><strong>-about site-</strong></p>
    <p class="left">
      <br>
      <span>
        Disclaimer items<br>
        ・Is strictly forbidden to reprinting of this site for the business.<br>
        ・Character that appears in this work, does not mean that all 18 years of age or more.<br>
        ・People, organizations, corporations that appears in this work, is part fiction, but it has nothing to do with real thing.
      </span>
    </p>
    <p class="left">
      Inquiries<br>
      ・Feedback and comments for this site please come to Chiyoda-ku, Tokyo Kuramaebashi-dori crossing Tsumakoisaka alleyway.
      There is multi-tenant building eight-story about Built '40 name "Ohiyama", there at second story.
    </p>
    <p>&nbsp;</p>
    <p><router-link to="/about">back</router-link></p>
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
