<template>
  <div class="menu-bar">
    <p v-for="page in pages" :key="page.path">
      <router-link :to="page.path">{{ page.name }}</router-link>
      <span class="label" v-if="page.label">({{ page.label }})</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'TheMenuBar',
  data () {
    return {
      pages: [
        { name: 'Top Page', path: '/' },
        { name: 'About Lab', path: '/about' },
        { name: 'Future Gadget', path: '/gadgets', label: 'updeto!!' },
        { name: 'Phoenix BBS', path: '/bbs' },
        { name: 'link', path: '/link' }
      ]
    }
  }
}
</script>

<style scoped>
.menu-bar {
  font-size: medium;
  font-family: serif;
  color: #fff;
  background-color: #000000;
  text-align: left;
  width: 180px;
  padding: 2px 8px;
  resize: horizontal;
  border-right: 5px solid #d0d0d0;
}

span.label {
  color: #f00;
}
</style>
