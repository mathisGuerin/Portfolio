<template>
  <div class="Skills">
    <h1>Compétences</h1>
    <div class="Skills-transition">
      <transition name="skills">
        <div v-if="selectedSkill==''" class="Skills-wrapper">
          <Skill
            v-for="skill in skills"
            v-bind:key="skill.index"
            :skill="skill"
            v-on:click.native="select(skill.name)"
          ></Skill>
        </div>
      </transition>
      <div @click="select('')" class="Skills-selected">
        <SkillDescription
          v-for="skill in skills"
          v-bind:key="skill.index"
          :selectedSkill="selectedSkill"
          :skill="skill"
          v-on:click.native="select(skill.name)"
        ></SkillDescription>
      </div>
    </div>
  </div>
</template>

<script>
import VueEasyPieChart from "vue-easy-pie-chart";
import Skill from "../components/Skill";
import SkillDescription from "../components/SkillDescription";
import "vue-easy-pie-chart/dist/vue-easy-pie-chart.css";
import skills from "../static/skills.js";

export default {
  data() {
    return {
      selectedSkill: "",
      skills: skills
    };
  },
  methods: {
    select(skill) {
      this.selectedSkill = skill;
    }
  },
  components: { VueEasyPieChart, Skill, SkillDescription }
};
</script> 

<style lang="scss" scoped>
.Skills {
  position: relative;
  height: 100%;
  min-height: 100vh;
  padding: 30px 30px 53px;
  color: #292929;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.3;
    background-color: #e7e7e7;

    @media screen and (min-width: 700px) {
      background: url("../assets/bgPhotoSkills.jpeg");
      background-position: left 11% center;
      background-size: cover;
    }
  }
}

.Skills-wrapper {
  margin: 20px auto;
  text-align: center;
  max-width: 1000px;

  @media screen and (min-width: 1000px) {
    margin: 60px auto;
  }
}

.Skills-selected {
  margin: 20px 0px;

  @media screen and (min-width: 1000px) {
    margin: 60px auto;
  }
}

h1 {
  position: relative;
  font-size: 41px;
  line-height: 68px;
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
  @media screen and (min-width: 400px) {
    font-size: 46px;
    line-height: 74px;
  }

  @media screen and (min-width: 700px) {
    font-size: 80px;
    line-height: 90px;
  }
}

// Animation des skills
.Skills-transition {
  position: relative;
  -webkit-tap-highlight-color: transparent;
  min-height: 835px;

  @media screen and (min-width: 600px) {
    height: 835px;
    min-height: initial;
  }

  @media screen and (min-width: 730px) {
    height: 630px;
  }

  @media screen and (min-width: 920px) {
    height: 500px;
  }
}

.skills-enter-active {
  animation: skillsIn 1s ease-in-out 300ms;
  opacity: 0;
}

.skills-leave-active {
  animation: skillsOut 1s ease-in-out;
  position: absolute;
  top: -20px;
  left: 0;
  right: 0;

  @media screen and (min-width: 1000px) {
    top: -60px;
  }
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
</style>
