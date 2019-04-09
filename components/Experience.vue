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
    transition () {
      return 'slide-' + this.$parent.direction
    }

  }
};
</script>

<style lang="scss" scoped>
.Experience {
  margin: 15px 10px 40px;
  display: inline-block;
  max-width: 600px;
}

.Experience-left,
.Experience-right {
  display: inline-block;
  vertical-align: top;
}

.Experience-left {
  width: 40%;
}

.Experience-right {
  width: 59%;
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
  animation: slideRightIn 2s;
}

.slide-right-leave-active {
  animation: slideRightOut 2s;
  position: absolute;
  top: 0;
  left: 0;
}

@keyframes slideRightIn {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slideRightOut {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

.slide-left-enter-active {
  animation: slideLeftIn 1s;
}

.slide-left-leave-active {
  animation: slideLeftOut 1s;
  position: absolute;
  top: 0;
  left: 0;
}

@keyframes slideLeftIn {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slideLeftOut {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}
</style>

