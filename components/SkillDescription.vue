<template>
  <transition name="skill">
    <div class="Skill-selected" v-if="selectedSkill == this.skill.name">
      <vue-easy-pie-chart
        :percent="this.skill.value"
        :bar-color="this.skill.color"
        track-color="#dedede"
        scale-color="transparent"
        :size="300"
        :scale-length="15"
        :line-width="8"
      >
        <img class="Skills-logo" :src="this.skill.logo">
      </vue-easy-pie-chart>
      <div class="Skill-description">
        <p v-for="desc in this.skill.description" v-bind:key="desc.index">{{desc}}</p>
      </div>
    </div>
  </transition>
</template>

<script>
import VueEasyPieChart from "vue-easy-pie-chart";
import "vue-easy-pie-chart/dist/vue-easy-pie-chart.css";

export default {
  props: ["skill", "selectedSkill"],
  computed: {},
  components: { VueEasyPieChart }
};
</script>

<style lang="scss" scoped>
.Skills {
  background-color: #e7e7e7;

  height: 100%;
  min-height: 100vh;
  padding: 50px;
  color: #292929;
  overflow: hidden;

  @media screen and (min-width: 600px) {
    background: url("../assets/bgPhotoSkills.jpeg");
    background-position: center left;
    background-size: cover;
    padding: 240px 50px 50px;
  }
}

.Skills-wrapper {
  margin-top: 50px;
  text-align: center;
}

.Skill-wrapper {
  display: inline-block;
}

.Skills-selected {
  margin: 50px 0px;

  .Skill-selected {
    width: fit-content;
    margin: 0 auto;

    img {
      height: 170px;
      margin: 20px;
    }
  }

  .Skill-description {
    display: inline-block;
    vertical-align: top;
    margin: 13px;
    max-width: 500px;

    p {
      margin: 10px 0;
    }
  }
}

h1 {
  position: relative;
  font-size: 46px;
  line-height: 74px;
  font-weight: 700;
  margin: 0px;
  text-transform: uppercase;
  text-align: left;
  width: fit-content;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 50%;
    border-bottom: 5px solid #292929;
    animation: appearBorder 2s;
  }

  @media screen and (min-width: 700px) {
    font-size: 80px;
    line-height: 90px;
  }
}

.Skills-logo {
  height: 100px;
  vertical-align: middle;
  cursor: pointer;
}

.vue-easy-pie-chart {
  display: inline-block;
  @media screen and (min-width: 1000px) {
    margin: 13px;
  }
}

// Animation des skills
.Skills-transition {
  position: relative;
  @media screen and (min-width: 600px) {
    height: 835px;
  }

  @media screen and (min-width: 730px) {
    height: 630px;
  }

  @media screen and (min-width: 920px) {
    height: 540px;
  }
}

.skills-enter-active {
  animation: skillsIn 1s ease-in-out 300ms;
  opacity: 0;
}

.skills-leave-active {
  animation: skillsOut 1s ease-in-out;
  position: absolute;
  top: -50px;
  left: 0;
  right: 0;
}

@keyframes skillsIn {
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  70% {
    transform: translateX(10%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes skillsOut {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  30% {
    transform: translateX(10%);
  }
  to {
    opacity: 0;
    transform: translateX(-100%);
  }
}

// Animation d'une compétence
.skill-enter-active {
  animation: skillIn 1s cubic-bezier(0.49, 0.15, 0.51, 1.25) 600ms forwards;
  opacity: 0;
}

.skill-leave-active {
  animation: skillOut 500ms cubic-bezier(0.49, 0.15, 0.51, 1.25);
  position: absolute;
  top: 0px;
  left: 0;
  right: 0;
}

@keyframes skillIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes skillOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>

