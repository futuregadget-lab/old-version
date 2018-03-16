<template>
  <div class="top-page">
    <p><img src="../assets/title.jpg" alt="" height="70" width="547"></p>
    <p class="title"><strong>HOMEPAGE</strong></p>
    <p>You're the <span class="counter">0000225485558TH</span> visitor to this site.</p>
    <p class="welcome">Welcome to the Future Gadget Laboratory Homepage!</p>
    <p>&nbsp;</p>
    <p class="blink">Breaking News</p>
    <p class="blink">Stage 1 of expansion of the western!!!</p>
    <p></p>
    <p class="update"><router-link to="/gadgets">Future Gadget update!</router-link></p>

    <table border="1">
      <tbody>
        <tr>
          <td>
            <p>
              This Paige of English is mad of efforts to expansion into west, as a
              making into perfect Engligh by glorious Super Hacka with a helping of
              machine translation software
            </p>
            <p>
              <a href="http://futuregadget-lab.com/" target="_blank">click here for main site</a>
            </p>
          </td>
        </tr>
      </tbody>
    </table>

    <p>&nbsp;</p>
    <p>This HOMEPAGE is compatible with deloode chrome ver.2.0 and up.</p>
    <p>Recommended resolution is 1600x1200 pixels.</p>
    <p>&nbsp;</p>
    <p><img src="../assets/1f.jpg" alt="burankankoubou" height="100" width="400"></p>
  </div>
</template>

<script>
export default {
  name: 'TheTopPage',
  data () {
    return {}
  }
}
</script>

<style scoped>
.top-page {
  font-size: x-small;
  background-image: url('../assets/haikei.jpg');
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
