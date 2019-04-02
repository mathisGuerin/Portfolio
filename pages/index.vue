<template>
  <div class="Portfolio">
    <div class="Home-Container-top">
      <div class="Home-Presentation">
        <h1>Je suis Mathis Guérin</h1>
        <h2>Développeur front-end</h2>
      </div>
      <img src="../assets/bgPhoto.jpeg"/>
      <!-- <video class="Home-bgVideo" autoplay muted loop id="myVideo">
        <source src="../assets/bgVideo.mp4" type="video/mp4">
      </video> -->
    </div>
  </div>
</template>

<script>
export default {
};
</script>



<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700');

.Portfolio {
  font-family: 'Open Sans', sans-serif;
  color: white;
}

.Home-Container-top {
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.Home-Presentation {
  position: absolute;
  left: 0;
  right: 0;
  top: 35%;
  text-align: center;
  margin: 0 auto;
  padding: 30px 0 30px;
  max-width: 960px;
  border: 1px solid #fff;
  background: rgba(0, 0, 0, 0.3);

  h1 {
    font-size: 80px;
    line-height: 90px;
    font-weight: 700;
    margin: 0px;
    padding-bottom: 8px;
    text-transform: uppercase;
  }

  h2 {
    font-size: 34px;
    font-weight: 300;
  }
}

.Home-bgVideo {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  min-width: 100%; 
  min-height: 100%; 
  height: 100%;
  width: auto; 
  object-fit: cover;
}
</style>

