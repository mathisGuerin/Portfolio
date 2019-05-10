<template>
  <div class="Skills-wrapper">
    <Skill v-for="skill in skills" v-bind:key="skill.index" :skill="skill"></Skill>
  </div>
</template>

<script>
import Skill from "~/components/Skill";
import skills from "~/static/skills.js";

export default {
  transition: "skills",
  data() {
    return {
      skills: skills
    };
  },
  components: { Skill }
};
</script> 

<style lang="scss">
.Skills-wrapper {
  margin: 20px auto;
  text-align: center;
  max-width: 1000px;

  @media screen and (min-width: 1000px) {
    margin: 60px auto;
  }
}

// Animation des skills
.skills-enter-active {
  animation: skillsIn 1s ease-in-out;
  opacity: 0;
}

.skills-leave-active,
.skills-leave-to {
  animation: skillsOut 1s ease-in-out;

  @media screen and (min-width: 1000px) {
    top: -60px;
  }
}

// Animation d'une compétence
.skill-enter-active {
  animation: skillIn 1s cubic-bezier(0.49, 0.15, 0.51, 1.25) forwards;
  opacity: 0;
}

.skill-leave-active {
  animation: skillOut 1s cubic-bezier(0.49, 0.15, 0.51, 1.25);
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
  }
  to {
    opacity: 0;
  }
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
