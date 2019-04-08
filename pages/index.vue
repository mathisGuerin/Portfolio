<template>
  <div class="Portfolio">
    <div class="Home-Container-top">
      <div class="Home-Presentation">
        <h1>Je suis Mathis Guérin</h1>
        <h2>Développeur front-end</h2>
      </div>
      <!-- <video class="Home-bgVideo" autoplay muted loop id="myVideo">
        <source src="../assets/bgVideo.mp4" type="video/mp4">
      </video>-->
    </div>
  </div>
</template>

<script>
export default {};
</script>



<style lang="scss" scoped>
.Portfolio {
  color: white;
    background: url('../assets/bgPhoto.jpeg');
    background-position: center left;
    background-size: cover;
}

.Home-Container-top {
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.Home-Presentation {
  max-width: 80%;
  position: absolute;
  left: 0;
  right: 0;
  top: 35%;
  text-align: center;
  margin: 0 auto;
  padding: 30px 0 30px;
  border: 1px solid #fff;
  background: rgba(0, 0, 0, 0.8);

  @media screen and (min-width: 1000px) {
    max-width: 960px;
  }

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
    font-weight: 400;
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

