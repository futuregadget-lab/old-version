<template>
  <div class="menu-bar">
    <p>
      <router-link to="/" v-t="'menu.topPage'"></router-link>
    </p>
    <p>
      <router-link to="/about" v-t="'menu.aboutLab'"></router-link>
    </p>
    <p>
      <router-link to="/gadgets" v-t="'menu.futureGadget'"></router-link>
      <span class="label">({{ $t('menu.update') }}!!)</span>
    </p>
    <p>
      <router-link to="/bbs">Phoenix BBS</router-link>
    </p>
    <p>
      <router-link to="/link">link</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'TheMenuBar',
  data () {
    return {}
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
