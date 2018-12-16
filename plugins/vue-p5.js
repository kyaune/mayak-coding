import Vue from 'vue';
import VueP5 from 'vue-p5';
 
export default {
  methods: {
    setup(sketch) {
      sketch.background('green');
      sketch.text('Hello p5!', 20, 20);
    }
  },
  render(h) { 
    return h(VueP5, {on: this}); 
  }
};