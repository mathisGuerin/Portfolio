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
        <h2>19 avenue Georges Clémenceau, 22400 Lamballe</h2>
      </div>
      <div class="Contact-item">
        <font-awesome-icon class="Contact-icon" icon="phone"/>
        <h2><a href="tel:+0667544316">06.67.54.43.16</a></h2>
      </div>
      <div class="Contact-item">
        <font-awesome-icon class="Contact-icon" icon="at"/>
        <h2><a href="mailto:guerin.mathis@gmail.com">guerin.mathis@gmail.com</a></h2>
      </div>
    </div>
    <div class="Contact-imgs">
      <a href="https://www.linkedin.com/in/mathisGuerin/" target="_blank">
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

<script>
export default {
  head () {
    return {
      title: 'About Us - Nuxt.js',
      meta: [
        { hid: 'robots', name: 'robots', content: 'noindex' }
      ]
    }
  }
}
</script>


<style lang="scss" scoped>
.Contact {
  position: relative;
  height: 100%;
  min-height: 100vh;
  padding: 30px;
  color: #292929;
  padding: 30px 30px 53px;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.3;
    width: 100%;
    height: 100%;
    background: url("../assets/bgPhotoContact.jpeg");
    background-position: center center;
    background-size: cover;
  }
}

h1 {
  position: relative;
  font-size: 52px;
  line-height: 66px;
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
  @media screen and (min-width: 600px) {
    width: 500px;
    margin: 0 auto;
    font-size: 80px;
    line-height: 90px;
  }
}

.Contact-wrapper {
  margin: 50px 0;
  width: 100%;

  @media screen and (min-width: 600px) {
    width: 500px;
    margin: 100px auto;
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
  font-size: 18px;
  width: 77%;


}

.Contact-icon {
  width: 32px;
  height: 32px;
  opacity: 0;
  background-color: #292929;
  padding: 7px;
  border-radius: 50%;
  color: white;
  vertical-align: top;
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
  display: block;
  margin: 0 auto;
  @media screen and (min-width: 600px) {
    width: 500px;
  }

  a {
    &:hover .Contact-img {
      animation: bounce 500ms ease-in-out;
    }
  }
}

.Contact-img {
  height: 80px;
  margin: 8px;
  opacity: 0.9;

  @media screen and (min-width: 600px) {
    height: 120px;
    margin: 20px;
  }
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
}
</style>
