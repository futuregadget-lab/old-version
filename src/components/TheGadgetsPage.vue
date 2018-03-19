<template>
  <div class="gadgets-page">
    <p>The Future gadget</p>
    <p class="title"><strong v-t="'gadgetsPage.title'"></strong></p>
    <p v-t="'gadgetsPage.subtitle'"></p>
    <p class="left"><br></p>
    <p v-t="'gadgetsPage.description'"></p>
    <p v-t="'gadgetsPage.mailInfo'"></p>
    <p v-t="'gadgetsPage.mailOrder'"></p>
    <p>&nbsp;</p>
    <p></p>
    <div v-for="(gadget, index) in $t('gadgetsPage.gadgets')" :key="index">
      <table border="1">
        <tbody>
          <tr>
            <td>{{ $t('gadgetsPage.number', { number: $t('gadgetsPage.gadgets').length - index }) }}</td>
            <td>{{ gadget.name }}</td>
            <td>{{ gadget.price }}</td>
          </tr>
          <tr>
            <td colspan="3" v-html="gadget.description"></td>
          </tr>
        </tbody>
      </table>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheGadgetsPage',
  data () {
    return {}
  }
}
</script>

<style scoped>
.gadgets-page {
  font-size: 16px;
}

p.title > strong {
  font-size: 36px;
}

p.left {
  text-align: left;
}
</style>
