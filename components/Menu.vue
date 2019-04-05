<template>
  <div>
    <nuxt-link to="/">Accueil</nuxt-link>
    <nuxt-link to="/about">A propos</nuxt-link>
    <nuxt-link to="/skills">Compétences</nuxt-link>
    <nuxt-link to="/experiences">Expériences</nuxt-link>
    <nuxt-link to="/contact">Contact</nuxt-link>
  </div>
</template>

<script>
export default {

};
</script>



<style lang="scss" scoped>
    a {
        display: inline-block;
        list-style: none;
        padding: 15px 20px;
        font-size: 17px;
        cursor: pointer;
        transition: all ease-in-out 300ms;
        color: white;
        text-decoration: none;

        &:hover {
            background: rgba(0, 0, 0, 0.7);
        }
    }
</style>

