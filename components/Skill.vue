<template>
  <nuxt-link :to="'/skills/'+skill.name">
    <div class="Skill-wrapper" title="Cliquez pour voir plus de détails">
      <vue-easy-pie-chart
        :percent="this.skill.value"
        :bar-color="this.skill.color"
        track-color="#dedede"
        scale-color="transparent"
        :size="200"
        :scale-length="10"
        :line-width="8"
      >
        <img class="Skills-logo" :src="this.skill.logo">
      </vue-easy-pie-chart>
    </div>
  </nuxt-link>
</template>

<script>
import VueEasyPieChart from "vue-easy-pie-chart";
import "vue-easy-pie-chart/dist/vue-easy-pie-chart.css";

export default {
  props: ["skill"],
  components: {VueEasyPieChart}
};
</script>

<style lang="scss" scoped>

a {
  -webkit-tap-highlight-color: transparent;
}

.Skill-wrapper {
  display: inline-block;
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

  &:hover {
    animation: hover 500ms ease-in-out forwards;
  }

  @keyframes hover {
    0%, 100% {
      transform: scale(1)
    }
    50% {
      transform: scale(1.05)
    }
  }
}
</style>

