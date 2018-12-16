

<template>
<div class="main">
  <vue-p5 v-on="element"></vue-p5>
    </div>
</template>

 <script>
export default {    
  methods: {
    setup(sketch) {
      sketch.background('green');
      sketch.text('Hello p5!', 20, 20);
      
    }
  },
  render(h) { 
    return h(VueP5, {on: element}); 
  }
}
console.log('!!!!!');
</script>


<style scoped>
    .main{
        margin-top: 100px;
        width: 400px;
        height: 400px;
    }
</style>

