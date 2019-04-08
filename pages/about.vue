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
          Mon expérience chez iDVROOM (opérateur de covoiturage au quotidien) m'a permis de travailler sur un site grand public et de travailler 
          avec des technologies front-end récentes (React, Redux...)
        </div>
        <div class="About-description">
          Curieux et passionné, j'aime travailler sur des projets persos afin de me former sur d'autres technologies.
        </div>
      </div>
      <img class="About-picture" src="../assets/MathisGuerin.jpg">
      <div class="About-icons">
        <img class="About-icon About-icon-bretagne" src="../assets/bretagne.jpg">
        <img class="About-icon " src="../assets/foot.png">
        <img class="About-icon" src="../assets/travel.png">
      </div>   
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

  .About-picture {
    display: inline-block;
    height: 250px;
    border-radius: 50%;
    border: 3px solid #444;
    margin: 100px 0;
  }

  .About-container {
    width: 80%;
  }

  .About-description {
    font-size: 20px;
    margin: 20px 0;
  }

  .About-container-left {
    display: inline-block;
    width: 60%;
    margin: 20px;
    vertical-align: top;
  }

  .About-icons {
    margin: 0 20px;
  }

  .About-icon {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    border: 3px solid #444;
    margin: 100px 0;

    &.About-icon-bretagne {
      padding: 10px;
      background-color: white;
    }
  }
}
</style>
