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
  background: url("../assets/bgPhotoExperiences.jpeg");
  background-position: center left;
  background-size: cover;
  padding: 50px;
}

h1 {
  font-size: 80px;
  line-height: 90px;
  font-weight: 700;
  margin: 0px;
  padding: 150px 0 40px;
  text-transform: uppercase;
  text-align: center;
}

.Experiences-wrapper {
  width: 80%;
  margin: 0 auto;
  padding: 30px;
}


</style>
