<template>
  <div class="Experience">
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
</template>

<script>
export default {
  props: ["exp"]
};
</script>

<style lang="scss" scoped>
.Experience {
  margin: 15px 10px 40px;
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
</style>

