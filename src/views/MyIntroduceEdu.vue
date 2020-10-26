<template>
<div class="edu bac" ref="toEdu" id="edu">
  <!-- <div class="cover"></div> -->
  <img id="runner" class="runner animate__animated animate__zoomInDown" v-show="toEdu" src="../assets/Edu/runner2.png" alt="">
  <div class="edu-title">
    <p>我的经历</p>
    <p>Experience</p>
  </div>
  <img src="../assets/Edu/lll.png" alt="" class="liveToLearn">
  <div class="edu-all">
    <div class="edu-card animate__animated animate__slideInLeft" v-show="toEdu" >
      <div class="card-main">
        <img src="../assets/Edu/150.png" alt="">
          <p>河南科技大学 计算机科学与技术</p>
          <p>GPA: 3.61 / 15%</p>
        <span>
            在校期间除课程学习外，还学习了c++、Java、及前端基础内容，之后开始进一步学习。
        </span>
        <img class="card-pic" src="../assets/Edu/school.jpg" alt="">
      </div>
      <div class="card-line"></div>
      <div class="card-bottom">
        <div class="dot"></div>
      </div>
    </div>

    <div class="edu-card animate__animated animate__slideInLeft" v-show="toEdu">
      <div class="card-main">
        <img src="../assets/Edu/151.png" alt="">
        <div class="card-title">
          <p>富鼎电子科技有限公司</p>
          <p>网络维护</p>
        </div>
        <span>
          主要工作内容包括：对公司内网络设备进行点检及维护公司内网络故障问题，主要对摄像头、交换机等网络设备进行维护。
        </span>
        <img class="card-pic" src="../assets/Edu/network.jpg" alt="">

      </div>
      <div class="card-line"></div>
      <div class="card-bottom">
        <div class="dot"></div>
      </div>
    </div>

    <div class="edu-line"></div>
  </div>

</div>
</template>

<script>
import TheCIrcleIn from '../js/TheCircleIn';

export default {
  props: {
    throttle: Function,
  },
  data() {
    return {
      toEdu: false,
    };
  },
  mounted() {
    this.isenter = true
    TheCIrcleIn.draw()
    window.addEventListener('scroll', this.throttle(this.scrollToEdu, 500))
  },
  methods: {
     scrollToEdu () {
      if(!this.toEdu){
        const toEdu = this.$refs.toEdu.getBoundingClientRect();
        const toEduOffsetTop = toEdu.top;
        const toEduOffsetBottom = toEdu.bottom;
        // 进入可视区域
        if (toEduOffsetTop <= window.innerHeight && toEduOffsetBottom >= 0) {
          this.toEdu = true
        }else{
          this.toEdu = false
        } 
      }
    }
  },
  watch: {
    toEdu(val){
      if(val){
        setTimeout(() => {
          this.isenter = true
        }, 500);
      }else{
        this.isenter = false
      }
    }
  }
};
</script>

<style>
@import '../css/MyIntroduceEdu/MyIntroduceEdu.css';
.animiteEdu{
    --animate-duration: .5s;
}
</style>
