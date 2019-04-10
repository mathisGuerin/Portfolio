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
  background: url("../assets/bgPhotoExperiences.jpeg");
  background-position: center left;
  background-size: cover;
  padding: 200px 50px 50px;
  color: #292929;
  height: 100vh;
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

.Experiences-buttons {
  position: relative;
}

.Experiences-wrapper {
  position: relative;
  margin: 0 auto;
  width: 600px;
  height: 430px;
  overflow: hidden;
}

.Experiences-slide {
  background-color: transparent;
  border: none;
  position: absolute;
  top: 40%;
  font-size: 50px;
  color: #292929;
  outline: none;

  &.slide-next {
    right: 6%;
  }

  &.slide-prev {
    left: 6%;
  }
}

.Experience-nav {
  position: absolute;
  bottom: 0;
  left: 50%;

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
}
</style>
