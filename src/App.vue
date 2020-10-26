<template>
<div id="app">
  <div class="hello-top">
    <div class="top-up">
    </div> 
    <!-- <div class="top-center">
      <p>L</p>
    </div> -->
    <div class="top-down">
      <a href="#runner"><p>Experence</p></a>
      <a href="#smartphone"><p>Demo</p></a>
      <a href="#hello" class="flag">
        <img src="./assets/flag.png" alt="">
        <!-- <img src="./assets/flag2.png" alt=""> -->
        <p>Hello</p>
      </a>
      <a href="#skills"><p>Skills</p></a>
      <a href="#others"><p>others</p> </a>
    </div>

  </div>
     <MyIntroduceHello/>
     <div class="firstbg middlebg" :style="{backgroundPositionY : scrollY / 100 + 'px'}"></div>
     <MyIntroduceEdu :throttle="throttle"/> 
     <div class="secondbg middlebg" :style="{backgroundPositionY : scrollY / 100 + 'px'}"></div>
     <MyIntroduceProject :throttle="throttle"/> 
     <div class="thirdbg middlebg" :style="{backgroundPositionY : scrollY / 100 + 'px'}"></div>
     <MyIntroduceSkills :throttle="throttle"/> 
     <div class="fourthbg middlebg" :style="{backgroundPositionY : scrollY / 100 + 'px'}"></div>
     <MyIntroduceOthers :throttle="throttle"/> 

</div>
</template>

<script>
const MyIntroduceHello = () => import('./views/MyIntroduceHello')
const MyIntroduceEdu = () => import('./views/MyIntroduceEdu')
const MyIntroduceProject = () => import('./views/MyIntroduceProject')
const MyIntroduceSkills = () => import('./views/MyIntroduceSkills')
const MyIntroduceOthers = () => import('./views/MyIntroduceOthers')

export default {
  components: {
    // MyIntroduceHeader,
    MyIntroduceHello,
    MyIntroduceEdu,
    MyIntroduceProject,
    MyIntroduceSkills,
    MyIntroduceOthers,
  },
  data() {
    return {
      scrollY: 0,
      swiperOptions:{
        mousewheel: true, // 开启滚轮滚动
        // 分页器
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'bullets',
        },
        initialSlide: 0,
        direction: 'vertical',
        preventClicks: false,
        observer: true,
        observeParents: true,
        autoHeight: true,
        threshold: 10, // 设置拖动临界值，拖动距离小于该值不会被拖动
        mousewheel: true,
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    },
  },
  mounted () {
    let that = this
    // 给swiper添加slideChangeTransitionEnd方法
    // window.onscroll = this.scrollHandle()
  },
  methods: {
    // 节流方法
    throttle (fn, delay) {
      let valid = true
      return function() {
        if(!valid){
          return false
        }
        // 修改状态为不可执行，进入冷却
        valid = false
        setTimeout(() => { 
          // fn()也可以放在定时器外，让函数立即执行，而不是在延迟之后执行
          fn()
          // 函数执行完一次后，冷却一段时间，才修改状态
          valid = true
        }, delay);
      }
    }
  },
};
</script>

<style>
/* 使用swiper时，需要给<swiper>（即容器）设置高度，此时 （即每个页面）高度自动撑满<swiper> */
#app, .mySwiper{
  height: 100%;
}
#app > .clear-margin{
  z-index: 2;
  margin-bottom: 0;
}

/* 重写分页器样式 */

/* 分页器容器*/
.swiper-container-vertical > .swiper-pagination-bullets{
  right: 20px
}
/* 单个分页器 （未激活）*/
.swiper-pagination-bullet{
  border-radius: 0;
  height: 50px;
  background-color: rgb(154, 147, 147);
}
/* 激活的分页器 */
.swiper-pagination-bullet-active{
  background-color: azure;
}
.middlebg{
  width: 100%;
  height: 600px;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
.firstbg{
   background-image: url('./assets/man.jpg');
}
.secondbg{
   background-image: url('./assets/fatigued.jpg');
}
.thirdbg{
   background-image: url('./assets/laptop.jpg');
}
.fourthbg{
  background-image: url('./assets/wheat.jpg');
}
.flag{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 50px;;
}
.flag img, .flag p{
  position: absolute;
}
.flag img{
  width: 120px;
}
</style>
