<template>
  <div class="Experiences">
    <h1>Expériences</h1>
    <div class="Experiences-buttons">
      <div class="Experiences-wrapper">
        <Experience v-for="exp in experiences" v-bind:key="exp.title" :exp="exp"></Experience>
      </div>
      <button class="Experiences-slide slide-prev" @click.prevent="prev">
        <font-awesome-icon icon="chevron-left"/>
      </button>
      <button class="Experiences-slide slide-next" @click.prevent="next">
        <font-awesome-icon icon="chevron-right"/>
      </button>
      <div class="Experience-nav">
        <button
          v-for="n in nbExperiences"
          :key="n"
          @click="goto(n-1)"
          :class="{active: n-1 === index}"
        ></button>
      </div>
    </div>
  </div>
</template>

<script>
import Experience from "../components/Experience.vue";
import experiences from "../static/experiences.js";

export default {
  data() {
    console.log(experiences.length);
    return {
      experiences: experiences,
      index: 0,
      nbExperiences: experiences.length,
      direction: "right"
    };
  },
  components: {
    Experience
  },
  methods: {
    next() {
      this.index++;
      this.direction = "right";
      if (this.index >= this.experiencesCount) {
        this.index = 0;
      }
    },
    prev() {
      this.index--;
      this.direction = "left";
      if (this.index < 0) {
        this.index = this.experiencesCount - 1;
      }
    },
    goto(index) {
      this.direction = index > this.index ? "right" : "left";
      this.index = index;
    }
  },
  computed: {
    experiencesCount() {
      return this.experiences.length;
    }
  }
};
</script>

<style lang="scss" scoped>
.Experiences {
  background-color: #e7e7e7;
  color: #292929;
  height: 100%;
  min-height: 100vh;
  padding: 30px;

  @media screen and (min-width: 600px) {
      background: url("../assets/bgPhotoExperiences.jpeg");
  background-position: center left;
  background-size: cover;
    padding: 200px 50px 50px;
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
    padding: 25px 0 0px;
      margin: 0 0 20px;

  }

  @media screen and (min-width: 1400px) {
    font-size: 80px;
    line-height: 100px;
    padding: 100px 0 0px;
  }
}

.Experiences-buttons {
  position: relative;
}

.Experiences-wrapper {
  position: relative;
  overflow: hidden;
}

.Experiences-slide {
  background-color: transparent;
  border: none;
  position: absolute;
  bottom: 0px;
  font-size: 50px;
  padding: 10px;
  color: #292929;
  outline: none;
  opacity: 0.8;
  transition: all ease-in-out 300ms;
  z-index: 2;

  &:hover {
    opacity: 1;
  }

  &.slide-next {
    right: 6%;
  }

  &.slide-prev {
    left: 6%;
  }

  @media screen and (min-width: 800px) {
    top: 27%;
    bottom: inherit;
    padding: 35px;
  }
}

.Experience-nav {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  bottom: 26px;
  text-align: center;

  button {
    border: none;
    background-color: #292929;
    opacity: 0.5;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin: 10px;
    transition: all ease-in-out 300ms;

    &.active {
      opacity: 1;
    }
  }

  @media screen and (max-width: 600px) {
    bottom: 0;
  }
}
</style>
