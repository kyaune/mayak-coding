<template>
  <div class="main">
      <div class="wrapper">
          <TheHeader />
          <TheDescription />
          <div class="content">
              <div class="lessons">
                  <TheProjects />
                  <Balls />
                  <Clicker />
                  <PingPong />
              </div>
              <div class="info">
                  <TheTheory />
                  <TheOffline />
                  <About />
              </div>
          </div>
      </div>
    <TheFooter/>
  </div>
</template>

<script>

import TheHeader from '~/components/TheHeader/TheHeader.vue'
import TheDescription from '~/components/TheDescription/TheDescription.vue'
import TheFooter from '~/components/TheFooter/TheFooter.vue'
import Balls from '~/components/Lessons/Balls.vue'
import Clicker from '~/components/Lessons/Clicker.vue'
import PingPong from '~/components/Lessons/PingPong.vue'
import TheProjects from '~/components/Lessons/TheProjects.vue'
import TheTheory from '~/components/Info/TheTheory.vue'
import TheOffline from '~/components/Info/TheOffline.vue'
import About from '~/components/Info/About.vue'
require('@/components/reset.css')

export default {
  components: {
    TheHeader,
    TheDescription,
    TheFooter,
    Balls,
    Clicker,
    PingPong,
    TheProjects,
    TheTheory,
    TheOffline,
    About
  }
}
</script>

<style scoped>
.main{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.wrapper{
}
.content{
  display: flex;
  flex-direction: row;
  /* width: 800px; */
  margin-left: 15%;
  /* margin-right: 15%; */
}
.lessons{
  display: flex;
  flex-direction: column;
  max-width: 421px;
  min-width: 421px;
}
.info{
  margin-left: 30px;
  max-width: 380px;
  min-width: 380px;
}
</style>

