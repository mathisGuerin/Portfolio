<template>
  <div class="Experiences">
    <div class="Experiences-wrapper">
      <h1>Expériences</h1>
      <Experience v-for="exp in experiences" v-bind:key="exp.title" :exp="exp"></Experience>
    </div>
  </div>
</template>

<script>
import Experience from "../components/Experience.vue";
import experiences from "../static/experiences.js";

export default {
  data() {
    return {
      experiences: experiences
    };
  },
  components: {
    Experience
  }
};
</script>

<style lang="scss" scoped>
.Experiences {
  height: 100vh;
  background: #ddd;
}

.Experiences-wrapper {
  width: 80%;
  margin: 0 auto;
  padding: 30px;
}

h1 {
  text-align: center;
  margin: 20px;
}
</style>
