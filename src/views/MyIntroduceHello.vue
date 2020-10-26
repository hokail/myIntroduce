<template>
<div id="hello" class="hello bac"  :style="`background-image: url(${pics[indexOfPic]})`">
  <!-- :style="`background-image: url(${pics[indexOfPic]})` -->
  <div class="cover"></div>
  <div id="hello-title" class="hello-title threed">
    <div class="front">
      <p class="title-content" ref="titleContent">Tow seeds, a forest.</p>
      <div class="title-intro">
        <span>我叫小L</span>
        <span>想要做一个前端</span>
      </div>
    </div>
  </div>

  
</div>
</template>

<script>
import rotate from '../js/rotate';

import achieve from '../assets/Hello/achieve.jpg';
import morning from '../assets/Hello/morning.jpg'; 
import runner from '../assets/Hello/runner.jpg';


export default {
  data() {
    return {
      indexOfPic: 0,
      indexOfTitle: 0,
      pics: [
        achieve,
        morning,
        runner,
      ],
    };
  },
  mounted() {
    rotate.rotate()
    this.changeTitle()
  },
  methods: {
    changeTitle() {
      setInterval(() => {
        this.indexOfPic = this.indexOfPic + 1 === 3 ? 1 : this.indexOfPic + 1
      }, 10000);
    },
  },
};
</script>

<style>
@import '../css/MyIntroduceHello/MyintroduceHello.css';
</style>
