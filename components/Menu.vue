<template>
  <div>
    <nuxt-link to="/">
      <span>Accueil</span>
      <font-awesome-icon class="Menu-icon" icon="home"/>
    </nuxt-link>
    <nuxt-link to="/about">
      <span>A propos</span>
      <font-awesome-icon class="Menu-icon" icon="user"/>
    </nuxt-link>
    <nuxt-link to="/skills">
      <span>Compétences</span>
      <font-awesome-icon class="Menu-icon" icon="check-circle"/>
    </nuxt-link>
    <nuxt-link to="/experiences">
      <span>Expériences</span>
      <font-awesome-icon class="Menu-icon" icon="laptop"/>
    </nuxt-link>
    <nuxt-link to="/contact">
      <span>Contact</span>
      <font-awesome-icon class="Menu-icon" icon="at"/>
    </nuxt-link>
  </div>
</template>

<script>
export default {};
</script>



<style lang="scss" scoped>
span {
  display: none;
  @media screen and (min-width: 700px) {
    display: inline;
  }
}

.Menu-icon {
  width: 20px;
  height: 20px;
  @media screen and (min-width: 700px) {
    display: none;
  }
}

a {
  display: inline-block;
  list-style: none;
  padding: 15px 20px;
  font-size: 17px;
  cursor: pointer;
  transition: all ease-in-out 300ms;
  color: white;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;

  &:hover, &.nuxt-link-exact-active {
    background: rgba(0, 0, 0, 0.7);
  }
}
</style>

