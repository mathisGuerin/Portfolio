<template>
  <div class="Experiences">
    <h1>Expériences</h1>
    <div class="Experiences-wrapper">
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
      experiences: experiences,
    };
  },
  components: {
    Experience
  }
};
</script>

<style lang="scss" scoped>
.Experiences {
  position: relative;
  color: #292929;
  height: 100%;
  min-height: 100vh;
  padding: 30px 30px 53px;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.3;
    background: url("../assets/bgPhotoExperiences.jpeg");
    //background-position: left 11% center;
    //background-size: cover;
  }
}

h1 {
  position: relative;
  font-size: 40px;
  line-height: 60px;
  font-weight: 700;
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

  @media screen and (min-width: 600px) {
    font-size: 80px;
    line-height: 90px;
    margin: 0 0 20px;
  }
}

.Experiences-wrapper {
  position: relative;
  overflow: hidden;
}
</style>
