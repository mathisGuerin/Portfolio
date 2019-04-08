<template>
  <div class="Experiences">
    <div class>
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
  background: url("../assets/bgPhotoExperiences.jpeg");
  background-position: center left;
  background-size: cover;
  padding: 200px 50px 50px;
  color: #292929;
}

h1 {
  position: relative;
  font-size: 80px;
  line-height: 90px;
  font-weight: 700;
  margin: 0 0 20px;
  padding: 150px 0 0px;
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
}

.Experiences-wrapper {
  width: 80%;
  margin: 0 auto;
  padding: 30px;
}
</style>
