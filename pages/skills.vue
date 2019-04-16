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
import SkillDescription from '../components/SkillDescription'
import "vue-easy-pie-chart/dist/vue-easy-pie-chart.css";
import skills from "../static/skills.js";

export default {
  data() {
    return {
      selectedSkill: "",
      skills: skills,
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
  background-color: #e7e7e7;
  height: 100%;
  min-height: 100vh;
  padding: 30px 30px 150px;
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

.Skills-selected {
  margin: 50px 0px;
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
</style>
