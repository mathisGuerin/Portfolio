<template>
  <div>
    <h1>Expériences</h1>
    <Experience v-for="exp in experiences" v-bind:key="exp.title" :exp="exp"></Experience>
  </div>
</template>

<script>
import Experience from "../components/Experience.vue";
import experiences from '../static/experiences.js';

export default {
  data() {
    return {
      experiences: experiences
    };
  },
  mounted: function () {
      console.log('experiuences : ', experiences)
  },

  components: {
    Experience
  }
};
</script>

