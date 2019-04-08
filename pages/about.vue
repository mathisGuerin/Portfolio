<template>
  <div class="About">
    <div class="About-container">
      <div class="About-container-left">
        <h1>A propos</h1>
        <h2>Mathis Guérin, 24 ans</h2>
        <div class="About-description">
          Issu d'une formation d'ingénieur généraliste à l'ISEN Brest,
          mon alternance à Sopra Stéria m'a permis d'approfondir mes compétences dans les technologies du web.
          J'ai ensuite choisi de m'orienter vers le développement front-end.
        </div>
        <div class="About-description">
          Mon expérience chez iDVROOM, site de covoiturage, m'a permis de mettre mes compétences ...
        </div>
        <div class="About-description">
          En parallèle de mon expérience professionelle, je me forme sur d'autres technologies ...
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
  background: url("../assets/bgPhotoAbout.jpeg");
  background-position: center left;
  background-size: cover;

  h1 {
    font-size: 80px;
    line-height: 90px;
    font-weight: 700;
    margin: 0px;
    padding-bottom: 40px;
    text-transform: uppercase;
    text-align: center;
  }

  h2 {
    font-size: 34px;
    font-weight: 400;
  }

  img {
    display: inline-block;
    height: 200px;
    border-radius: 50%;
    border: 3px solid #444;
    margin: 100px 0;
  }

  .About-container {
    width: 80%;
  }

  .About-description {
    font-size: 18px;
    margin: 20px 0;
  }

  .About-container-left {
    display: inline-block;
    width: 60%;
    margin: 20px;
    vertical-align: top;
  }
}
</style>
