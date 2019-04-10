<template>
  <transition :name="transition">
    <div v-show="visible" class="Experience">
      <div class="Experience-left">
        <div class="Experience-date">
          {{this.exp.date.begin}}
          <font-awesome-icon icon="arrow-right"/>
          {{this.exp.date.end}}
        </div>
        <img class="Experience-img" :src="this.exp.logo">
      </div>
      <div class="Experience-right">
        <h2>{{this.exp.title}}</h2>
        <h3>{{this.exp.company}}</h3>
        <div v-for="desc in this.exp.description" v-bind:key="desc" :desc="desc">{{desc}}</div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["exp"],
  mounted() {
    console.log(this.exp.index);
  },
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
  margin: 15px auto;
  display: block;
  max-width: 600px;
  width: 80%;
}

.Experience-left,
.Experience-right {
  display: inline-block;
  vertical-align: top;
}

.Experience-left {
}

.Experience-right {
}

.Experience-date {
  padding: 5px;
  width: fit-content;
  background-color: #abffdd;
}

.Experience-img {
  width: 100px;
  margin: 10px auto;
  text-align: center;
}

.slide-right-enter-active {
  animation: slideRightIn 1s cubic-bezier(0.49, 0.15, 0.51, 1.25);
}

.slide-right-leave-active {
  animation: slideRightOut 1s cubic-bezier(0.49, 0.15, 0.51, 1.25);
  position: absolute;
  top: 0;
  left: 0;
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
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-100%);
    opacity: 0;
  }
}

.slide-left-enter-active {
  animation: slideLeftIn 1s cubic-bezier(0.49, 0.15, 0.51, 1.25);
}

.slide-left-leave-active {
  animation: slideLeftOut 1s cubic-bezier(0.49, 0.15, 0.51, 1.25);
  position: absolute;
  top: 0;
  left: 0;
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
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
}
</style>

