<template>
  <table class="form" cellpadding="1" cellspacing="1">
    <tbody>
      <tr>
        <td><b>Name</b></td>
        <td><input type="text" name="name" size="28"></td>
      </tr>
      <tr>
        <td><b>Email</b></td>
        <td><input name="email" size="28" type="text"></td>
      </tr>
      <tr>
        <td><b>Subject</b></td>
        <td>
          <input name="sub" size="36" type="text">
          <input value="Submit" type="submit"><input value="Reset" type="reset">
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <b>Comment</b>
          <br>
          <textarea name="comment" cols="56" rows="7" wrap="soft"></textarea>
        </td>
      </tr>
      <tr>
        <td><b>URL</b></td>
        <td><input name="url" size="50" value="http://" type="text"></td>
      </tr>
      <tr>
        <td><b>Password</b></td>
        <td>
          <input name="pwd" size="8" maxlength="8" value="" type="password">
          (Password for the deletion. Up to 8 characters alphanumeric)
        </td>
      </tr>
      <tr>
        <td></td>
        <td>
          <input name="cook" value="on" checked="checked" type="checkbox">
          Save the cookie information
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
