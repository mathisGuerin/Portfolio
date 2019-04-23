<template>
  <div class="Portfolio">
    <div class="Home-Container-top">
      <div class="Home-Presentation">
        <h1>Je suis </h1>
        <h1>Mathis Guérin</h1>
        <vue-typed-js
          :typeSpeed="100"
          :backDelay="1000"
          :backSpeed="50"
          :loop="true"
          :contentType="'null'"
          :strings="['< Développeur front-end />']"
        >
          <h2 class="typing"></h2>
        </vue-typed-js>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VueTypedJs from "vue-typed-js";

Vue.use(VueTypedJs);

export default {};
</script>



<style lang="scss" scoped>
.Portfolio {
  color: white;
  background: url("../assets/bgPhoto.jpeg");
  background-position: center left;
  background-size: cover;
}

.Home-Container-top {
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.Home-Presentation {
  max-width: 82%;
  position: absolute;
  left: 0;
  right: 0;
  top: 12%;
  text-align: center;
  margin: 0 auto;
  padding: 30px 5px 30px;
  border: 1px solid #fff;
  background: rgba(0, 0, 0, 0.8);

  @media screen and (min-width: 600px) {
    top: 28%;
  }

  @media screen and (min-width: 1000px) {
    top: 35%;
    max-width: 1000px;
  }

  h1 {
    display: inline-block;
    font-size: 50px;
    line-height: 60px;
    font-weight: 700;
    margin: 0px;
    padding: 0 4px 8px;
    text-transform: uppercase;

    @media screen and (min-width: 600px) {
      top: 28%;
      font-size: 80px;
      line-height: 90px;
    }
  }

  .typed-element {
    justify-content: center;
  }

  h2 {
    font-size: 34px;
    font-weight: 400;
  }
}
</style>

