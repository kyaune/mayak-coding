<template>
  <div class="main">
    <div class="wrapper">
      <TheHeader/>
    </div>
  </div>
</template>

<script>

import TheHeader from '~/components/TheHeader/TheHeader.vue'
require('@/components/reset.css')

export default {
  components: {
    TheHeader
  }
}
</script>

<style scoped>
.wrapper{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
TheHeader{
  height: 424px;
  width: 100%;
}
</style>

