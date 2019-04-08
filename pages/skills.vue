<template>
  <div class="Skills">
    <h1>Compétences</h1>
    <div>
      <vue-easy-pie-chart
        :percent="85"
        bar-color="#52d2fa"
        track-color="#dedede"
        scale-color="transparent"
        :size="200"
        :scale-length="10"
        :line-width="8"
      >
        <img class="Skills-logo" src="../assets/react.png">
      </vue-easy-pie-chart>
      <vue-easy-pie-chart
        :percent="70"
        bar-color="#7955bd"
        track-color="#dedede"
        scale-color="transparent"
        :size="200"
        :scale-length="10"
        :line-width="8"
      >
        <img class="Skills-logo" src="../assets/redux.png">
      </vue-easy-pie-chart>
      <vue-easy-pie-chart
        :percent="60"
        bar-color="#5bb984"
        track-color="#dedede"
        scale-color="transparent"
        :size="200"
        :scale-length="10"
        :line-width="8"
      >
        <img class="Skills-logo" src="../assets/vue.png">
      </vue-easy-pie-chart>
      <vue-easy-pie-chart
        :percent="40"
        bar-color="#e45699"
        track-color="#dedede"
        scale-color="transparent"
        :size="200"
        :scale-length="10"
        :line-width="8"
      >
        <img class="Skills-logo" src="../assets/graphql.png">
      </vue-easy-pie-chart>
      <vue-easy-pie-chart
        :percent="95"
        bar-color="#ef652c"
        track-color="#dedede"
        scale-color="transparent"
        :size="200"
        :scale-length="10"
        :line-width="8"
      >
        <img class="Skills-logo" src="../assets/html.png">
      </vue-easy-pie-chart>
      <vue-easy-pie-chart
        :percent="90"
        bar-color="#36a9dc"
        track-color="#dedede"
        scale-color="transparent"
        :size="200"
        :scale-length="10"
        :line-width="8"
      >
        <img class="Skills-logo" src="../assets/css.svg">
      </vue-easy-pie-chart>
      <vue-easy-pie-chart
        :percent="75"
        bar-color="#73a763"
        track-color="#dedede"
        scale-color="transparent"
        :size="200"
        :scale-length="10"
        :line-width="8"
      >
        <img class="Skills-logo" src="../assets/node.png">
      </vue-easy-pie-chart>
    </div>
  </div>
</template>

<script>
import VueEasyPieChart from "vue-easy-pie-chart";
import "vue-easy-pie-chart/dist/vue-easy-pie-chart.css";

export default {
  components: { VueEasyPieChart }
};
</script> 

<style lang="scss" scoped>
.Skills {
  background: url("../assets/bgPhotoSkills.jpeg");
  background-position: center left;
  background-size: cover;
  height: 100vh;
  padding: 170px 50px 50px;
}

h1 {
  font-size: 80px;
  line-height: 90px;
  font-weight: 700;
  margin: 0px;
  padding-bottom: 40px;
  text-transform: uppercase;
  text-align: left;
}

.Skills-logo {
  height: 100px;
  vertical-align: middle;
}

.vue-easy-pie-chart {
  display: inline-block;
  margin: 13px;
}
</style>
