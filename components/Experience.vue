<template>
  <div class="Experience">
    <div class="Experience-top">
      <h2>{{this.exp.title}}</h2>
      <div class="Experience-date">
        <span>{{this.exp.date.begin}}</span>
        <div class="Experience-date--bottom">
          <font-awesome-icon class="Experience-date-icon" icon="arrow-circle-right"/>
          <span>{{this.exp.date.end}}</span>
        </div>
      </div>
      <div>
        <img class="Experience-img" :src="this.exp.logo">
      </div>
      <div class="Home-arrow" :class="[displayDetails ? 'rotate' : 'rotate2']">
        <font-awesome-icon @click="toogleDetails" class="Home-arrow--icon" icon="angle-down"/>
      </div>
    </div>
    <transition name="details">
      <div v-show="displayDetails" class="Experience-middle">
        <div
          v-for="desc in this.exp.description"
          v-bind:key="desc"
          :desc="desc"
          class="Experience-desc"
        >
          <font-awesome-icon class="Experience-desc-icon" icon="circle"/>
          <div>{{desc}}</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["exp"],
  data() {
    return {
      displayDetails: false
    }
  },
  methods: {
    toogleDetails() {
      this.displayDetails = !this.displayDetails
    }
    }
};
</script>

<style lang="scss" scoped>
.Experience {
  margin: 45px auto;
  max-width: 500px;
}

.Experience-top {
  position: relative;
  padding: 20px;
  background: url("../assets/exp.svg");
  background-position: center center;
  background-size: cover;

  h2 {
    text-align: center;
  }

  .Experience-date {
    text-align: center;

    .Experience-date--bottom {
      display: inline-block;
    }
  }

  .Experience-img {
    margin: 25px auto;
    display: block;
    height: 35px;
  }
}

.Experience-middle {
  margin: 10px 0;

  @media screen and (min-width: 600px) {
    padding: 0 30px;
  }

  .Experience-desc {
    display: flex;
    padding: 2px 0;
  }

  .Experience-desc-icon {
    font-size: 7px;
    margin: 8px;
    color: #757575;
  }
}

.Home-arrow {
  position: absolute;
  bottom: -6px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  z-index: 2;
  color: white;
  width: fit-content;
  animation: rotateArrow 1s ease-in-out forwards;

  &.rotate {
    animation: rotateArrow 1s ease-in-out forwards;
  }

  &.rotate2 {
    animation: rotateArrow2 1s ease-in-out forwards;
  }

  .Home-arrow--icon {
    cursor: pointer;
    height: 40px;
    width: 40px;
  }
}


.details-enter-active {
  animation: displayDetails 1s ease-in-out forwards;
}

.details-leave-active {
  animation: hideDetails 1s ease-in-out forwards;
}


@keyframes displayDetails {
  from {
    opacity: 0;
    max-height: 0;
  }
  to {
    opacity: 1;
    max-height: 200px;
  }
}

@keyframes hideDetails {
  0% {
    opacity: 1;
    max-height: 200px;
  }
  50% {
    opacity: 0;
  }
  100% {
    max-height: 0;
    opacity: 0
  }
}

@keyframes rotateArrow {
  from {
    transform: rotate(0deg)
  } to {
    transform: rotate(180deg) translateY(7px)
  }
}

@keyframes rotateArrow2 {
  from {
    transform: rotate(180deg) translateY(7px)
  } to {
    transform: rotate(0deg)
  }
}
</style>

