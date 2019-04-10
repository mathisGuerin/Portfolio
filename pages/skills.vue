<template>
  <div class="Skills">
    <h1>Compétences</h1>
    <div class="Skills-transition">
      <transition name="skills">
        <div v-if="selectedSkill==''" class="Skills-wrapper">
          <div class="Skill-wrapper" @click="select('react')">
            <vue-easy-pie-chart
              :percent="reactValue"
              bar-color="#52d2fa"
              track-color="#dedede"
              scale-color="transparent"
              :size="200"
              :scale-length="10"
              :line-width="8"
            >
              <img class="Skills-logo" src="../assets/react.png">
            </vue-easy-pie-chart>
          </div>
          <div class="Skill-wrapper" @click="select('redux')">
            <vue-easy-pie-chart
              :percent="reduxValue"
              bar-color="#7955bd"
              track-color="#dedede"
              scale-color="transparent"
              :size="200"
              :scale-length="10"
              :line-width="8"
            >
              <img class="Skills-logo" src="../assets/redux.png">
            </vue-easy-pie-chart>
          </div>
          <div class="Skill-wrapper" @click="select('vue')">
            <vue-easy-pie-chart
              :percent="vueValue"
              bar-color="#5bb984"
              track-color="#dedede"
              scale-color="transparent"
              :size="200"
              :scale-length="10"
              :line-width="8"
            >
              <img class="Skills-logo" src="../assets/vue.png">
            </vue-easy-pie-chart>
          </div>
          <div class="Skill-wrapper" @click="select('graphql')">
            <vue-easy-pie-chart
              :percent="graphqlValue"
              bar-color="#e45699"
              track-color="#dedede"
              scale-color="transparent"
              :size="200"
              :scale-length="10"
              :line-width="8"
            >
              <img class="Skills-logo" src="../assets/graphql.png">
            </vue-easy-pie-chart>
          </div>
          <div class="Skill-wrapper" @click="select('html')">
            <vue-easy-pie-chart
              :percent="htmlValue"
              bar-color="#ef652c"
              track-color="#dedede"
              scale-color="transparent"
              :size="200"
              :scale-length="10"
              :line-width="8"
            >
              <img class="Skills-logo" src="../assets/html.png">
            </vue-easy-pie-chart>
          </div>
          <div class="Skill-wrapper" @click="select('css')">
            <vue-easy-pie-chart
              :percent="cssValue"
              bar-color="#36a9dc"
              track-color="#dedede"
              scale-color="transparent"
              :size="200"
              :scale-length="10"
              :line-width="8"
            >
              <img class="Skills-logo" src="../assets/css.svg">
            </vue-easy-pie-chart>
          </div>
          <div class="Skill-wrapper" @click="select('node')">
            <vue-easy-pie-chart
              :percent="nodeValue"
              bar-color="#73a763"
              track-color="#dedede"
              scale-color="transparent"
              :size="200"
              :scale-length="10"
              :line-width="8"
            >
              <img class="Skills-logo" src="../assets/node.png">
            </vue-easy-pie-chart>
          </div>
        </div>
      </transition>
      <div @click="select('')" class="Skills-selected">
        <transition name="skill">
          <div class="Skill-selected" v-if="selectedSkill == 'react'">
            <vue-easy-pie-chart
              :percent="reactValue"
              bar-color="#52d2fa"
              track-color="#dedede"
              scale-color="transparent"
              :size="300"
              :scale-length="15"
              :line-width="8"
            >
              <img class="Skills-logo" src="../assets/react.png">
            </vue-easy-pie-chart>
            <div class="Skill-description">
              React est un framework front-end permettant la gestion de l'interface utilisateur.
            </div>
          </div>
        </transition>
        <transition name="skill">
          <div class="Skill-selected" v-if="selectedSkill == 'redux'">
            <vue-easy-pie-chart
              :percent="reduxValue"
              bar-color="#7955bd"
              track-color="#dedede"
              scale-color="transparent"
              :size="300"
              :scale-length="15"
              :line-width="8"
            >
              <img class="Skills-logo" src="../assets/redux.png">
            </vue-easy-pie-chart>
            <div class="Skill-description">
              Redux permet la gestion de l'état (le state) de nos composants React.
              En centralisant le state de l'application dans un objet global (le store), il devient plus simple de prédire l'état du composant en fonction.
            
            </div>
          </div>
        </transition>

        <transition name="skill">
          <div class="Skill-selected" v-if="selectedSkill == 'vue'">
            <vue-easy-pie-chart
              :percent="vueValue"
              bar-color="#5bb984"
              track-color="#dedede"
              scale-color="transparent"
              :size="300"
              :scale-length="15"
              :line-width="8"
            >
              <img class="Skills-logo" src="../assets/vue.png">
            </vue-easy-pie-chart>
            <div class="Skill-description">
              Vue.js est un framework front-end permettant la création d'interfaces utilisateurs.<br/>
              Je n'ai jamais utilisé Vue.js dans un cadre professionel, mais j'ai créé plusieurs projets perso avec ce framework.
            </div>
          </div>
        </transition>

        <transition name="skill">
          <div class="Skill-selected" v-if="selectedSkill == 'graphql'">
            <vue-easy-pie-chart
              :percent="graphqlValue"
              bar-color="#e45699"
              track-color="#dedede"
              scale-color="transparent"
              :size="300"
              :scale-length="15"
              :line-width="8"
            >
              <img class="Skills-logo" src="../assets/graphql.png">
            </vue-easy-pie-chart>
            <div class="Skill-description">
              GraphQL est un language de requête, permettant de récupérer des informations venant d'une API ou d'une base de données.
            </div>
          </div>
        </transition>

        <transition name="skill">
          <div class="Skill-selected" v-if="selectedSkill == 'html'">
            <vue-easy-pie-chart
              :percent="htmlValue"
              bar-color="#ef652c"
              track-color="#dedede"
              scale-color="transparent"
              :size="300"
              :scale-length="15"
              :line-width="8"
            >
              <img class="Skills-logo" src="../assets/html.png">
            </vue-easy-pie-chart>
            <div class="Skill-description">
              Le HTML est un language permettant de structurer une page web.
            </div>
          </div>
        </transition>

        <transition name="skill">
          <div class="Skill-selected" v-if="selectedSkill == 'css'">
            <vue-easy-pie-chart
              :percent="cssValue"
              bar-color="#36a9dc"
              track-color="#dedede"
              scale-color="transparent"
              :size="300"
              :scale-length="15"
              :line-width="8"
            >
              <img class="Skills-logo" src="../assets/css.svg">
            </vue-easy-pie-chart>
            <div class="Skill-description">
              Le CSS est un langage permettant de créer le style d'une page web.
              En attribuant une classe à une balise HTML, on va pouvoir determiner le position, la taille, ou tout autre attribut visuel de cet élément. 
            </div>
          </div>
        </transition>

        <transition name="skill">
          <div class="Skill-selected" v-if="selectedSkill == 'node'">
            <vue-easy-pie-chart
              :percent="nodeValue"
              bar-color="#73a763"
              track-color="#dedede"
              scale-color="transparent"
              :size="300"
              :scale-length="15"
              :line-width="8"
            >
              <img class="Skills-logo" src="../assets/node.png">
            </vue-easy-pie-chart>
            <div class="Skill-description">
              Node.js permet d'utiliser le Javascript pour créer un environnement côté serveur.
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import VueEasyPieChart from "vue-easy-pie-chart";
import "vue-easy-pie-chart/dist/vue-easy-pie-chart.css";

export default {
  data() {
    return {
      selectedSkill: "",
      reactValue: 85,
      reduxValue: 70,
      vueValue: 60,
      graphqlValue: 40,
      htmlValue: 95,
      cssValue: 90,
      nodeValue: 75
    };
  },
  methods: {
    select(skill) {
      this.selectedSkill = skill;
    }
  },
  components: { VueEasyPieChart }
};
</script> 

<style lang="scss" scoped>
.Skills {
  background: url("../assets/bgPhotoSkills.jpeg");
  background-position: center left;
  background-size: cover;
  height: 100vh;
  padding: 240px 50px 50px;
  color: #292929;
  overflow: hidden;
}

.Skills-wrapper {
  margin-top: 20px;
}

.Skill-wrapper {
  display: inline-block;
}

.Skills-selected {
  margin: 50px 20px;

  .Skill-selected {
    width: fit-content;
    margin: 0 auto;

    img {
      height: 170px;
      margin: 20px;
    }
  }

  .Skill-description {
    display: inline-block;
    vertical-align: top;
    margin: 13px;
    max-width: 500px;
  }
}

h1 {
  position: relative;
  font-size: 80px;
  line-height: 90px;
  font-weight: 700;
  margin: 0px;
  text-transform: uppercase;
  text-align: left;
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

.Skills-logo {
  height: 100px;
  vertical-align: middle;
  cursor: pointer;
}

.vue-easy-pie-chart {
  display: inline-block;
  margin: 13px;
}

// Animation des skills
.Skills-transition {
  position: relative;
}

.skills-enter-active {
  animation: skillsIn 1s ease-in-out 300ms;
  opacity: 0;
}

.skills-leave-active {
  animation: skillsOut 1s ease-in-out;
  position: absolute;
  top: -50px;
  left: 0;
}

@keyframes skillsIn {
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  70% {
    transform: translateX(10%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes skillsOut {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  30% {
    transform: translateX(10%);
  }
  to {
    opacity: 0;
    transform: translateX(-100%);
  }
}

// Animation d'une compétence
.skill-enter-active {
  animation: skillIn 1s cubic-bezier(0.49, 0.15, 0.51, 1.25) 600ms forwards;
  opacity: 0;
}

.skill-leave-active {
  animation: skillOut 500ms cubic-bezier(0.49, 0.15, 0.51, 1.25);
  position: absolute;
  top: 30px;
  left: 0;
  right: 0;
}

@keyframes skillIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes skillOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

</style>
