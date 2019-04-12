<template>
  <transition :name="transition">
    <div v-show="visible" class="Experience">
      <div class="Experience-top">
        <div>
          <img class="Experience-img" :src="this.exp.logo">
        </div>
        <div class="Experience-date">
          <span>{{this.exp.date.begin}}</span>
          <font-awesome-icon class="Experience-date-icon" icon="arrow-circle-down"/>
          <span>{{this.exp.date.end}}</span>
        </div>
      </div>
      <div class="Experience-middle">
        <h2>{{this.exp.title}}</h2>
        <div
          v-for="desc in this.exp.description"
          v-bind:key="desc"
          :desc="desc"
          class="Experience-desc"
        >{{desc}}</div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["exp"],
  computed: {
    visible() {
      return this.exp.index === this.$parent.index;
    },
    transition() {
      return "slide-" + this.$parent.direction;
    }
  }
};
</script>

<style lang="scss" scoped>
.Experience {
  margin: 25px auto;
  max-width: 500px;

  @media screen and (min-width: 800px) {
    margin: 50px auto;
  }
}

.Experience-left,
.Experience-right {
  display: inline-block;
  vertical-align: top;
}

.Experience-top {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #e2e2e2;
  border-top-left-radius: 25px;

  @media screen and (min-width: 600px) {
    flex-direction: row;
  }

  .Experience-img {
    margin: 0 auto;
    display: block;
    padding: 20px;
    height: 70px;

    @media screen and (min-width: 600px) {
      height: 100px;
    }
  }
}

.Experience-middle {
  margin: 10px 0;
  min-height: 340px;

  @media screen and (min-width: 600px) {
    min-height: 240px;
  }

  @media screen and (min-width: 1000px) {
    min-height: 220px;
  }

  h2 {
    margin: 5px 0;
  }

  .Experience-desc {
    padding: 2px 0;
  }
}

.Experience-date {
  position: relative;
  display: flex;
  flex-direction: column;
  border-left: 2px solid #292929;

  span {
    padding: 10px;
    background-color: #58b3fb;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;

    &:first-child {
      background-color: #99d2ff;
    }
  }
  .Experience-date-icon {
    position: absolute;
    top: 39%;
    left: 80%;
    color: white;
    background-color: #292929;
    padding: 1px;
    width: 22px;
    height: 22px;
    border-radius: 50%;

    @media screen and (min-width: 600px) {
      left: 38%;
    }
  }
}

// Animation bouton droit
.slide-right-enter-active {
  animation: slideRightIn 1s cubic-bezier(0.49, 0.15, 0.51, 1.25);
}

.slide-right-leave-active {
  animation: slideRightOut 1s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  perspective: 1000px;
}

@keyframes slideRightIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideRightOut {
  from {
    transform: translateX(0) rotateY(0deg);
    opacity: 1;
  }
  to {
    transform: translateX(-90%) rotateY(90deg);
    opacity: 0;
  }
}

// Animation bouton gauche
.slide-left-enter-active {
  animation: slideLeftIn 1s cubic-bezier(0.49, 0.15, 0.51, 1.25);
}

.slide-left-leave-active {
  animation: slideLeftOut 1s ease-in-out;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  perspective: 1000px;
}

@keyframes slideLeftIn {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideLeftOut {
  from {
    transform: translateX(0) rotateY(0deg);
    opacity: 1;
  }
  to {
    transform: translateX(90%) rotateY(90deg);
    opacity: 0;
  }
}
</style>

