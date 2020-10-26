<template>
<div class="skills bac" ref="toSkills" id="skills">
  <!-- <div class="cover"></div> -->
  <div class="skill-title">
    <p>技能掌握</p>
    <p>Skills</p>
  </div>
  <div class="skills-main">
    <!-- <img class="skills-title animate__animated animate__fadeIn" v-show="toSkills" src="../assets/Skills/mySkills.png" alt="" > -->
    <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
      <defs>
        <linearGradient id="greenGradient">
          <stop offset="0" stop-color="#00ff40" />
          <stop offset="100%" stop-color="#008020" />
        </linearGradient>
        <linearGradient id="redGradient">
          <stop offset="0" stop-color="#ffff00" />
          <stop offset="100%" stop-color="#ff0000" />
        </linearGradient>
        <linearGradient id="yellowGradient">
          <stop offset="0" stop-color="#ffff00" />
          <stop offset="100%" stop-color="#ffc020" />
        </linearGradient>
        <linearGradient id="blueGradient">
          <stop offset="0" stop-color="#00a0ff" />
          <stop offset="100%" stop-color="#6600ff" />
        </linearGradient>
        <linearGradient id="purpleGradient">
          <stop offset="0" stop-color="#ff0080" />
          <stop offset="100%" stop-color="#c000a0" />
        </linearGradient>
      </defs>  
      </svg>
        <!-- <path d="M0 450 Q1000 100 1800 80" 
        stroke='url(#allGradient)'
        stroke-width='1'
        fill="none"  /> -->
    <div class="skill-content">
      <TheSkills v-for="(skill, index) in skills" :key="index" 
        :per="skill.per" 
        :skillName="skill.name" 
        :skillColor="skill.color" 
        :skillIcon="skill.icon"
        :toSkills="toSkills"
        />
    </div>
  </div>
</div>
</template>

<script>
const TheSkills = () => import('../components/TheSkills')

export default {
  props: {
    throttle: Function,
  },
  components: {
    TheSkills,
  },
  data() {
    return {
      toSkills: false,
      skills: [
        {
          name: 'HTML',
          per: 70,
          color: 'redGradient',
          icon: require('../assets/Skills/icon/html.png'),
        },
        {
          name: 'CSS',
          per: 75,
          color: 'blueGradient',
          icon: require('../assets/Skills/icon/css.png'),
        },
        {
          name: 'JS',
          per: 70,
          color: 'yellowGradient',
          icon: require('../assets/Skills/icon/js.png'),
        },
        {
          name: 'VUE',
          per: 70,
          color: 'greenGradient',
          icon: require('../assets/Skills/icon/vue.png'),
        },
        {
          name: 'ES6',
          per: 75,
          color: 'purpleGradient',
          icon: require('../assets/Skills/icon/es6.png'),
        },
      ],
    };
  },
  mounted () {
     window.addEventListener('scroll', this.throttle(this.scrollToSkills, 500))
  },
  methods: {
     scrollToSkills () {
      if(!this.toSkills){
        const toSkills = this.$refs.toSkills.getBoundingClientRect();
        const toSkillsOffsetTop = toSkills.top;
        const toSkillsOffsetBottom = toSkills.bottom;
        // 进入可视区域
        if (toSkillsOffsetTop <= window.innerHeight && toSkillsOffsetBottom >= 0) {
          this.toSkills = true
        }else{
          this.toSkills = false
        } 
      }
    }
  },
};
</script>

<style >
@import '../css/MyIntroduceSkills/MyIntroduceSkills.css';
</style>
