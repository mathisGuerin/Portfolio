<template>
  <div class="Contact">
    <h1>Contact</h1>
    <div class="Contact-imgs">
      <a href="https://www.linkedin.com/in/mathis-gu%C3%A9rin-086939100/" target="_blank">
        <img class="Contact-img" src="../assets/linkedin.png">
      </a>
      <a href="https://github.com/mathisGuerin" target="_blank">
        <img class="Contact-img" src="../assets/github.svg">
      </a>
      <a href="https://twitter.com/MathisGuerin" target="_blank">
        <img class="Contact-img" src="../assets/twitter.png">
      </a>
    </div>
    <div>
      <h2>Mathis Guérin</h2>
      <h2>4 rue Gauvin, 49000 Angers</h2>
      <h2>06.67.54.43.16</h2>
      <h2>guerin.mathis@gmail.com</h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.Contact {
  background: url("../assets/bgPhotoContact.jpeg");
  background-position: center left;
  background-size: cover;
  height: 100vh;
  padding: 50px;
}

h1 {
  font-size: 80px;
  line-height: 90px;
  font-weight: 700;
  margin: 0px;
  padding-bottom: 40px;
  text-transform: uppercase;
  text-align: right;
  color: #fbfdfc;
}

.Contact-imgs {
  text-align: center;
}

.Contact-img {
  height: 120px;
  margin: 20px;
}
</style>
