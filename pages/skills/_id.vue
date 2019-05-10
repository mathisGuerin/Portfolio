<template>
  <div class="Skill-selected">
    <nuxt-link to="/skills">
      <vue-easy-pie-chart
        :percent="value"
        :bar-color="color"
        track-color="#dedede"
        scale-color="transparent"
        :size="300"
        :scale-length="15"
        :line-width="8"
      >
        <img :src="logo">
      </vue-easy-pie-chart>
      <div class="Skill-description">
        <p v-for="desc in description" v-bind:key="desc.index">{{desc}}</p>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import skills from "~/static/skills.js";
import VueEasyPieChart from "vue-easy-pie-chart";
import "vue-easy-pie-chart/dist/vue-easy-pie-chart.css";

export default {
  transition: "skill",
  validate({ params }) {
    return params.id != undefined;
  },
  asyncData({ params, env, error }) {
    const skill = skills.find(skill => String(skill.name) === params.id);
    if (!skill) {
      return error({ message: "Skill not found", statusCode: 404 });
    }
    return skill;
  },
  components: { VueEasyPieChart }
};
</script>


<style lang="scss">
.Skill-selected {
  position: relative;
  width: fit-content;
  margin: 30px auto;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  a {
    text-decoration: none;
    color: #292929;
    -webkit-tap-highlight-color: transparent;
  }

  img {
    height: 170px;
    margin: 20px;
    vertical-align: middle;
    cursor: pointer;
  }

  .Skill-description {
    display: block;
    @media screen and (min-width: 1000px) {
      display: inline-block;
      margin: 13px;
      width: 50%;
      max-width: 700px;
      vertical-align: top;
      font-size: 18px;
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

</style>

