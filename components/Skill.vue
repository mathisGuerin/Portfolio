<template>
  <div class="Skill-wrapper">
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
</template>

<script>
import VueEasyPieChart from "vue-easy-pie-chart";
import "vue-easy-pie-chart/dist/vue-easy-pie-chart.css";

export default {

  props: ["skill"],
  computed: {},
  components: {VueEasyPieChart}
};
</script>

<style lang="scss" scoped>

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
}
</style>

