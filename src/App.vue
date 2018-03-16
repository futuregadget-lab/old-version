<template>
  <div id="app">
    <TheMenuBar></TheMenuBar>
    <router-view class="router-view"/>
  </div>
</template>

<script>
import TheMenuBar from '@/components/TheMenuBar'

export default {
  name: 'App',
  components: { TheMenuBar }
}
</script>

<style>
html, body {
  width: 100%;
  height: 100%;
  min-height: 100%;
  margin: 0;
}

body {
  background-color: #1a073e;
  text-align: center;
  color: #ffffff;
}

#app {
  width: 100%;
  height: 100%;
  min-height: 100%;
  display: flex;
}

.router-view {
  flex: 1;
  padding: 0 8px;
  height: 100%;
  overflow-y: auto;
}

/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
