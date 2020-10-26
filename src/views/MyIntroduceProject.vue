<template>
<div id="project" class="project bac" ref="toProject" >
  <!-- <div class="cover" id="projectCover"></div> -->
  <div class="project-title">
    <p>项目</p>
    <p>Demo</p>
  </div>
  <div class="project-preview">
    <img id="smartphone" src="../assets/Project/smartphone.png" alt="">
    <div class="phone-cover " :class="{'animate__animated animate__fadeOut': demoShow}"  @click="getDemoUrl" >
      <p class="animate__animated animate__fadeIn" v-show="toProject">点击打开预览</p>
    </div>
    <iframe :src="demoUrl" frameborder="0">
      <p>您的浏览器不支持iframe标签</p>
    </iframe>
  </div>
  <div class="project-all">
    <swiper ref="mySwiperProject" :options="swiperOptionsProject" class="project-content animate__animated animate__backInRight" v-show="toProject" >
      <swiper-slide class="card"   v-for="(pic, index) in pics" :key="index" >
        <img :src="pic"/>
      </swiper-slide>
      <div class="swiper-pagination-project" slot="pagination"></div> 
    </swiper>
    <!-- <div class=" left-arrow arrow swiper-button-prev animate__animated animate__backInRight" v-show="activeIn">
      <img src="../assets/Project/Left.png" alt="">
    </div> -->
    <!-- 左箭头 -->
    <div class="button-prev button animate__animated animate__backInRight " v-show="toProject">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 350 160 90">
      <g id="arrow-svg-home">
        <g id="circ" class="cls-1">
          <circle cx="42" cy="42" r="40" class="cls-4"></circle>
        </g>
        <g id="arrow">
          <path id="arrow-trg" d="M.983,6.929,4.447,3.464.983,0,0,.983,2.482,3.464,0,5.946Z"></path>
        </g>
        <path id="line" d="M120,0H0" class="cls-3" ></path>
      </g>
      </svg>
    </div>
    <!-- 右箭头 -->
      <div class="button-next button animate__animated animate__backInRight" v-show="toProject"> 
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 350 160 90">
        <!-- g标签表示分组，组中的元素会继承g的属性 -->
        <g id="arrow-svg-home">
          <g id="circ" class="cls-1">
            <circle  cx="42" cy="42" r="40" class="cls-4"></circle>
          </g>
          <g id="arrow">
            <path id="arrow-trg" d="M.983,6.929,4.447,3.464.983,0,0,.983,2.482,3.464,0,5.946Z" class="cls-2"></path>
          </g>
          <path id="line" d="M120,0H0" class="cls-3" ></path>
        </g>
      </svg>
    </div>

    <!-- <div class="right-arrow arrow swiper-button-next animate__animated animate__backInRight" v-show="activeIn">
      <img src="../assets/Project/right.png" alt="">
    </div> -->
  </div>
</div>
</template>

<script>

export default {
  props: {
    throttle: Function,
  },
  data() {
    return {
      demoShow: false,
      demoUrl: '',
      toProject: false,
      activeIn: false,
      pics:[
        require('../assets/Project/YuerPlayer/YuerPlaying.png'),
        require('../assets/Project/YuerPlayer/YuerTheList.png'),
        require('../assets/Project/YuerPlayer/YuerMv.png'),
        require('../assets/Project/YuerPlayer/YuerLists.png'),
        require('../assets/Project/YuerPlayer/YuerMain.png'),
      ],
      swiperOptionsProject:{
        pagination: {
          el: '.swiper-pagination-project',
          clickable: true,
          type: 'bullets',
        },
        navigation: {
          nextEl: '.button-next',
          prevEl: '.button-prev',
        },
        initialSlide: 0,
        observer: true,
        observeParents: true,
        // grabCursor: true,
        slidesPerView: 3,
        centeredSlides: true,
        autoHeight: true,
        loop: true,
      }
      };
  },
  mounted () {
     window.addEventListener('scroll', this.throttle(this.scrollProject, 500))
  },
  methods: {
    scrollProject () {
      if(!this.toProject){
        const toProject = this.$refs.toProject.getBoundingClientRect();
        const toProjectOffsetTop = toProject.top;
        const toProjectOffsetBottom = toProject.bottom;
        // 进入可视区域
        if (toProjectOffsetTop <= window.innerHeight && toProjectOffsetBottom >= 0) {
          this.toProject = true
        }else{
          this.toProject = false
        } 
      }
    },
    getDemoUrl() {
      this.demoUrl = 'https://hokail.github.io/MyPages/#/main'
      this.demoShow = true
    },
  },
  watch: {
    toProject(val){
      if(val){
        setTimeout(() => {
          this.activeIn = true
        }, 500);
      }else{
        this.activeIn = false
      }
    }
  }
  // mounted() {
  //   TheCards.init()
  // },
  // methods: {
  // },
  // watch: {
  //   toProject(val){
  //     if(val){
  //        TheCards.init()
  //     }else{
  //        TheCards.backCard()
  //     }
  //   }
  // }
};
</script>

<style >
@import '../css/MyIntroduceProject/MyIntroduceProject.css';
@import '../css/MyIntroduceProject/MyIntroduceProjectButton.css';
.project-all{
    --animate-duration: 1s;
}
.project-content{
  /* 这里是设置延迟时间的基础倍数。延迟时间为设置的基本时间与这个数相乘为最后的延迟时间 */
  --animate-delay: .5s;
}


/* 自定义分页器的父框 */
.project-content .swiper-pagination-bullets{
  position: relative;
  bottom: 20px;
  height: 20px;
  text-align: center;
}


/* 单个分页器样式 */
.project-content .swiper-pagination-bullet{
  width: 13px;
  height: 10px;
  display: inline-block;
  background: black;
  opacity: .2;
  margin: 0 5px;
  border-radius: 20px;
  transition: all .5s;
}
/*自定义分页器激活时的样式表现*/
.project-content .swiper-pagination-bullet-active {
  opacity: 1;
  background: black;
  width: 100px;
}

/* swiper选中的内容放大，其余内容虚化 */
.project-content  .swiper-slide{
  opacity: .4;
} 
.project-content  .swiper-slide-active{
  opacity: 1;
  transform: scale(1.1);
  transition: all .5s;
}

</style>
