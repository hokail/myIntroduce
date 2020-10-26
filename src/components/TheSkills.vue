<template>
<div id="box">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <polygon 
      id="progress-bg"
      fill="none" 
      points="10,70 90,10 170,70 170,190 90,240 10,190" 
      stroke="wheat" 
      stroke-width="5" 
      stroke-linecap="round"/>
   <polygon 
      class="cir" 
      ref="progressCir"
      id='progress-cir' 
      fill="none"  
      points="10,70 90,10 170,70 170,190 90,240 10,190"  
      :stroke="`url(#${skillColor})`" 
      stroke-width="5" 
      stroke-linecap="round"
      />
  </svg>
  <div class="progress-content">
    <img class="progress-icon" :src="skillIcon" alt="" :title="skillName">
    <span class="progres-title" >{{thePer}}%</span>
  </div>
</div>
</template>

<script>
export default {
  props: {
    toSkills:Boolean,
    per: Number,  
    skillName: String,
    skillColor: String,
    skillIcon: String,
  },
  data() {
    return{
      thePer: 0,
    };
  },
  mounted () {
    
  },
  watch: {
    toSkills(val){
      if(val){
        this.$refs.progressCir.style.strokeDashoffset = `calc(630 - 630 * ${this.per} / 100)`
        let timer = setInterval(()=>{
          this.thePer >= this.per ? clearInterval(timer) : this.thePer += 1
        }, 1000/this.per)
      }else{
        this.$refs.progressCir.style.strokeDashoffset = '630'
        this.thePer = 0
      }
    }
  }
};
</script>

<style>
#box{
  position: relative;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 180px;
	height: 250px;
}
svg{
  position: absolute;
}
.progress-content{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.progres-title{
  /* position: absolute; */
  top: 50%;
  width: 100%;
  text-align: center;
  color: black;
  font: 15px/50px "微软雅黑";
  font-weight: bold;
  z-index: 10;
}
.progress-icon{
  /* position: absolute; */
  margin-top: 50px;
  width: 100px;
  height: 100px;
}
#progress-cir{
  stroke-dasharray: 630 630;
  stroke-dashoffset: 630;
  transition: all 1s;
}
</style>
