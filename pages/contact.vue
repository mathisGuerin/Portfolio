<template>
  <div class="Contact">
    <h1>Contact</h1>
    <div class="Contact-wrapper">
      <div class="Contact-item">
        <font-awesome-icon class="Contact-icon" icon="address-book"/>
        <h2>Mathis Guérin</h2>
      </div>
      <div class="Contact-item">
        <font-awesome-icon class="Contact-icon" icon="home"/>
        <h2>4 rue Gauvin, 49000 Angers</h2>
      </div>
      <div class="Contact-item">
        <font-awesome-icon class="Contact-icon" icon="phone"/>
        <h2>06.67.54.43.16</h2>
      </div>
      <div class="Contact-item">
        <font-awesome-icon class="Contact-icon" icon="at"/>
        <h2>guerin.mathis@gmail.com</h2>
      </div>
    </div>
    <div class="Contact-imgs">
      <a href="https://www.linkedin.com/in/mathis-gu%C3%A9rin-086939100/" target="_blank">
        <img class="Contact-img" src="../assets/linkedin.svg">
      </a>
      <a href="https://github.com/mathisGuerin" target="_blank">
        <img class="Contact-img" src="../assets/github.svg">
      </a>
      <a href="https://twitter.com/MathisGuerin" target="_blank">
        <img class="Contact-img" src="../assets/twitter.png">
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.Contact {
  background: url("../assets/bgPhotoContact.jpeg");
  background-position: center left;
  background-size: cover;
  height: 100vh;
  padding: 400px 50px 50px;
  color: #292929;
}

h1 {
  position: relative;
  font-size: 80px;
  line-height: 90px;
  font-weight: 700;
  margin: 0px;
  text-transform: uppercase;
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
}

.Contact-wrapper {
  display: inline-block;
  margin: 30px 0 20px;
  width: 100%;

  @media screen and (min-width: 1000px) {
    width: 50%;
  }

  @media screen and (min-width: 1200px) {
    width: 40%;
  }
  @media screen and (min-width: 1600px) {
    width: 30%;
  }
}

.Contact-item {
  margin: 5px 0;

  @for $i from 1 through 4 {
    &:nth-child(#{$i}) {
      h2 {
        animation: h2Anim 500ms ease-in-out #{($i * 500) + 200}ms forwards;
      }

      .Contact-icon {
        animation: iconAnim 500ms ease-in-out #{$i * 500}ms forwards;
      }
    }
  }
}

h2 {
  display: inline-block;
  margin: 0 10px;
  font-weight: 400;
  vertical-align: super;
  opacity: 0;
}

.Contact-icon {
  width: 32px;
  height: 32px;
  opacity: 0;
  background-color: #292929;
  padding: 7px;
  border-radius: 50%;
  color: white;
}

@keyframes h2Anim {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes iconAnim {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.Contact-imgs {
  display: inline-block;
}

.Contact-img {
  height: 120px;
  margin: 20px;
  opacity: 0.9;
  transition: all 300ms ease-in-out;

  &:hover {
    opacity: 1;
  }
}
</style>
