<template>
  <div class="page-not-found">
    <h1>Not Found</h1>
    <p>The requested URL {{ $route.path }} was not found on this server.</p>
    <p>
      Additionally, a 404 Not Found error was encountered while trying
      to use an ErrorDocument to handle the request.
    </p>
  </div>
</template>

<script>
export default {
  name: 'ThePageNotFound',
  data () {
    return {}
  },
  created () {
    console.log(this.$route)
  }
}
</script>

<style scoped>
.page-not-found {
  color: #000000;
  background-color: #ffffff;
  text-align: left;
}
</style>
