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
        <img class="Skills-logo" :src="this.skill.logo"  title="Retour">
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
.Skill-selected {
  width: fit-content;
  margin: 0 auto;
  cursor: pointer;

  img {
    height: 170px;
    margin: 20px;
  }

  .Skill-description {
    display: block;
    @media screen and (min-width: 1000px) {
      display: inline-block;
      margin: 13px;
      width: 50%;
      max-width: 700px;
      vertical-align: top;
    }

    p {
      margin: 10px 0;
    }
  }
}

.vue-easy-pie-chart {
  display: block;
  margin: 0 auto;

  @media screen and (min-width: 1000px) {
    display: inline-block;
    margin: 13px;
  }
}

.Skills-logo {
  height: 100px;
  vertical-align: middle;
  cursor: pointer;
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

