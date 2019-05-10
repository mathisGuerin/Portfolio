<template>
  <div class="Skills">
    <h1>Compétences</h1>
    <NuxtChild/>
  </div>
</template>

<style lang="scss" scoped>
.Skills {
  position: relative;
  height: 100%;
  min-height: 100vh;
  padding: 30px 30px 53px;
  color: #292929;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.3;
    background-color: #e7e7e7;

    @media screen and (min-width: 700px) {
      background: url("../assets/bgPhotoSkills.jpeg");
      background-position: left 11% center;
      background-size: cover;
    }
  }
}

h1 {
  position: relative;
  font-size: 41px;
  line-height: 68px;
  font-weight: 700;
  margin: 0px;
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
  @media screen and (min-width: 400px) {
    font-size: 46px;
    line-height: 74px;
  }

  @media screen and (min-width: 700px) {
    font-size: 80px;
    line-height: 90px;
  }
}
</style>
