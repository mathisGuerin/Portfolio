<template>
  <div>
    <li> Accueil </li>
    <li> A propos </li>
    <li> Compétences </li>
    <li> Exprériences </li>
    <li> Contact </li>
  </div>
</template>

<script>
export default {

};
</script>



<style lang="scss" scoped>
    li {
        display: inline-block;
        list-style: none;
        padding: 15px 20px;
        font-size: 17px;
        cursor: pointer;
        transition: all ease-in-out 300ms;

        &:hover {
            background: rgba(0, 0, 0, 0.6);
        }
    }
</style>

