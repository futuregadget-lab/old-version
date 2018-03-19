<template>
  <table class="comments">
    <tbody>
      <tr>
        <td>
          <div v-for="(comment, index) in $t('bbsPage.comments')" :key="index">
            [{{ $t('bbsPage.comments').length - index }}]
            <strong>{{ comment.subject }}</strong>
            <!-- eslint-disable-next-line -->
            　{{ $t('bbsPage.postedBy') }}<span class="name">{{ comment.name }}</span>　
            {{ comment.date }}
            <br><br>
            <div v-html="comment.comment"></div>
            <p v-if="index !== $t('bbsPage.comments').length - 1">&nbsp;</p>
            <div v-if="comment.url">
              {{ comment.url }}
              <p>&nbsp;</p>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'TheBBSComments',
  data () {
    return {}
  }
}
</script>

<style scoped>
table.comments {
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  width: 500px;
}

span.name {
  color: #00f;
}
</style>
