<template>
  <table class="form" cellpadding="1" cellspacing="1">
    <tbody>
      <tr>
        <td><b v-t="'bbsPage.form.name'"></b></td>
        <td><input type="text" name="name" size="28"></td>
      </tr>
      <tr>
        <td><b v-t="'bbsPage.form.email'"></b></td>
        <td><input name="email" size="28" type="text"></td>
      </tr>
      <tr>
        <td><b v-t="'bbsPage.form.subject'"></b></td>
        <td>
          <input name="sub" size="36" type="text">
          <input :value="$t('bbsPage.form.submit')" type="submit"><input :value="$t('bbsPage.form.reset')" type="reset">
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <b v-t="'bbsPage.form.comment'"></b>
          <br>
          <textarea name="comment" cols="56" rows="7" wrap="soft"></textarea>
        </td>
      </tr>
      <tr>
        <td><b v-t="'bbsPage.form.url'"></b></td>
        <td><input name="url" size="50" value="http://" type="text"></td>
      </tr>
      <tr>
        <td><b v-t="'bbsPage.form.password'"></b></td>
        <td>
          <input name="pwd" size="8" maxlength="8" value="" type="password">
          {{ $t('bbsPage.form.passwordInfo') }}
        </td>
      </tr>
      <tr>
        <td></td>
        <td>
          <input name="cook" value="on" checked="checked" type="checkbox">
          {{ $t('bbsPage.form.saveCookie') }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'TheBBSForm',
  data () {
    return {}
  }
}
</script>

<style scoped>
table.form {
  margin-left: auto;
  margin-right: auto;
  width: 500px;
}
</style>
