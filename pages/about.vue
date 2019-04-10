<template>
  <div class="About">
    <div class="About-container">
      <div class="About-container-left">
        <img class="About-picture" src="../assets/MathisGuerin.jpg">
      </div>
      <div class="About-container-right">
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
        <div
          class="About-description"
        >Curieux et passionné, j'aime travailler sur des projets persos afin de me former sur d'autres technologies.</div>
      </div>
      <div class="About-icons">
        <img class="About-icon About-icon-bretagne" src="../assets/bretagne.jpg">
        <img class="About-icon" src="../assets/foot.png">
        <img class="About-icon" src="../assets/travel.png">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.About {
  font-family: "Open Sans", sans-serif;
  color: white;
  height: 100vh;
  padding: 50px;
  background: url("../assets/bgPhotoAbout.jpeg");
  background-position: center left;
  background-size: cover;
  color: #292929;

  h1 {
    font-size: 80px;
    line-height: 90px;
    font-weight: 700;
    margin: 0px;
    text-transform: uppercase;
    position: relative;
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

  h2 {
    font-size: 34px;
    font-weight: 400;
    margin-top: 204px;
  }

  .About-picture {
    display: block;
    height: 250px;
    border-radius: 50%;
    border: 3px solid #444;
    margin: 100px auto;
  }

  .About-container {
    @media screen and (min-width: 1400px) {
      margin: 0 100px;
    }

    @media screen and (min-width: 1500px) {
      margin: 0 220px;
    }
  }

  .About-description {
    font-size: 20px;
    margin: 20px 0;
  }

  .About-container-left {
    display: inline-block;
    width: 39%;
  }

  .About-container-right {
    display: inline-block;
    width: 60%;
  }

  .About-icons {
    margin: 20px 0 0 39%;
  }

  .About-icon {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    border: 3px solid #444;

    &.About-icon-bretagne {
      padding: 10px;
      background-color: white;
    }
  }
}
</style>
