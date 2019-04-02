<template>
  <div class="About">
    <div class="About-container">
      <div class="About-container-left">
        <h1>A propos</h1>
        <h2>Mathis Guérin, 24 ans</h2>
        <div>
          Issu d'une formation d'ingénieur généraliste à l'ISEN Brest,
          mon alternance à Sopra Stéria m'a permis d'approfondir mes compétences dans les technologies du web.
          J'ai ensuite choisi de m'orienter vers le développement front-end.
        </div>
      </div>
      <img src="../assets/MathisGuerin.jpg">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.About {
  font-family: "Open Sans", sans-serif;
  color: white;
  background-color: #0c2233;
  height: 100vh;
  padding: 50px;

  h1 {
  }

  img {
    display: inline-block;
    height: 200px;
    border-radius: 50%;
    border: 3px solid #444;
    margin: 100px 0;
  }

  .About-container {
    margin: 0 auto;
    width: 80%;
  }

  .About-container-left {
    display: inline-block;
    width: 60%;
    margin: 20px;
    vertical-align: top;
  }
}
</style>
