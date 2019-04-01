<template>
  <div class="Home-Container-top">
    <div class="Home-Presentation">
      <div>Hi,</div>
      <div>I'm Mathis</div>
      <div>front-end developer</div>
    </div>
    <video class="Home-bgVideo" autoplay muted loop id="myVideo">
      <source src="../assets/bgVideo.mp4" type="video/mp4">
    </video>
  </div>
</template>

<script>
export default {

};
</script>



<style>
.Home-Container-top {
  height: 100vh;
  position: relative;
}

.Home-Presentation {
  font-size: 50px;
  padding: 100px;
}

.Home-bgVideo {
  position: absolute;
  top: 0;
  bottom: 0;
  height: 100%;
  z-index: -1;
}
</style>

