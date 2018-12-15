<template>
  <div class="main">
    <div class="wrapper">
      <TheHeader />
      <TheDescription />
      <Balls />
      <Clicker />
      <PingPong />
      <TheOffline />
    </div>
    <TheFooter/>
  </div>
</template>

<script>

import TheHeader from '~/components/TheHeader/TheHeader.vue'
import TheDescription from '~/components/TheDescription/TheDescription.vue'
import TheFooter from '~/components/TheFooter/TheFooter.vue'
import Balls from '~/components/Projects/Balls.vue'
import Clicker from '~/components/Projects/Clicker.vue'
import PingPong from '~/components/Projects/PingPong.vue'
import TheOffline from '~/components/offline/TheOffline.vue'
require('@/components/reset.css')

export default {
  components: {
    TheHeader,
    TheDescription,
    TheFooter,
    Balls,
    Clicker,
    PingPong,
    TheOffline
  }
}
</script>

<style scoped>
.main{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>

