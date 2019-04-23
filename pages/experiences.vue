<template>
  <div class="Experiences">
    <h1>Expériences</h1>
    <div class="Experiences-wrapper">
      <Experience v-for="exp in experiences" v-bind:key="exp.title" :exp="exp"></Experience>
    </div>
    <div class="Experience-nav">
      <button class="Experiences-slide slide-prev" @click.prevent="prev">
        <font-awesome-icon icon="chevron-left"/>
      </button>
      <button class="Experience-nav--button"
        v-for="n in nbExperiences"
        :key="n"
        @click="goto(n-1)"
        :class="{active: n-1 === index}"
      ></button>
      <button class="Experiences-slide slide-next" @click.prevent="next">
        <font-awesome-icon icon="chevron-right"/>
      </button>
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
    background-position: left 11% center;
    background-size: cover;
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

  @media screen and (min-width: 1400px) {
    font-size: 80px;
    line-height: 100px;
  }
}

.Experiences-wrapper {
  position: relative;
  overflow: hidden;
}

.Experiences-slide {
  background-color: transparent;
  border: none;
  font-size: 50px;
  padding: 10px;
  color: #292929;
  outline: none;
  vertical-align: middle;
  opacity: 0.8;
  transition: all ease-in-out 300ms;
  z-index: 2;

  &:hover {
    opacity: 1;
  }
}

.Experience-nav {
  position: relative;
  text-align: center;

  .Experience-nav--button {
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
