<template>
  <div class="MainLayout">
    <nuxt/>
    <Menu class="Menu"></Menu>
  </div>
</template>

<script>
import Menu from "../components/Menu.vue";
export default {
  components: {
    Menu
  }
};
</script>


<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,700");

html {
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.MainLayout {
  position: relative;
  min-height: 100vh;
}

.Portfolio + .Menu,
.Contact + .Menu,
.Contact + .Menu {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}

.Menu {
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  text-align: center;
  bottom: 0;
  left: 0;
  right: 0;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.25s ease-in-out;
}
.page-enter,
.page-leave-active {
  opacity: 0;
  transform-origin: 50% 50%;
}
</style>

