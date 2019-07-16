let skills = [
  {
    index: 0,
    name: 'react',
    value: 85,
    color: '#52d2fa',
    logo: require('../assets/react.png'),
    description: [
      "React est une librairie Javascript permettant la création d'interfaces utilisateur.",
      "Chez iDVROOM, l'application était composée de plusieurs composants React, plus ou moins complexes.",
      "J'ai également travaillé sur quelques projets persos pour pouvoir tester les différentes fonctionnalités qu'offre cette librairie (React hooks, Higher-Order Components...)."
    ]
  },
  {
    index: 1,
    name: 'redux',
    value: 70,
    color: '#7955bd',
    logo: require('../assets/redux.png'),
    description: [
      "Redux permet la gestion des données et des actions de nos composants React. Lorsqu'un composant devient plus complexe, il est plus difficile de correctement mettre à jour les données transitant à l'intérieur du composant.",
      "En centralisant le state de l'application dans un objet global (le store), il devient plus simple de prédire l'état du composant en fonction des actions de l'utilisateur."
    ]
  },
  {
    index: 2,
    name: 'vue',
    value: 60,
    color: '#5bb984',
    logo: require('../assets/vue.png'),
    description: [
      "Vue.js est un framework front-end permettant la création d'interfaces utilisateur. Vue.js dispose également de nombreux plugins permettant notamment de gérer le routing de l'application (Vue-router), la gestion du state (Vuex)...",
      "Il est également possible de faire du rendu côté serveur, en utilisant le framework Nuxt. Celui-ci inclut de nombreux plugins par défault (Vuex, Vue-router...), et permet de créer des applications universelles, c'est à dire qui peuvent être rendues à la fois côté client et côté serveur.",
      "Je n'ai jamais utilisé Vue.js dans un cadre professionnel, mais j'ai créé plusieurs projets persos avec ce framework, dont ce portfolio, développé avec Nuxt."
    ]
  },
  {
    index: 3,
    name: 'graphql',
    value: 40,
    color: '#e45699',
    logo: require('../assets/graphql.png'),
    description: [
      "GraphQL est un langage de requête, permettant de récupérer des informations venant d'une API ou d'une base de données.",
      "J'ai eu l'occasion de travailler avec cette technologie sur un projet perso. Le client, créé avec React et la librairie React-apollo, récupérait les données venant d'un serveur web Node.js (framework Express), et pouvait également effectuer des mutations sur ces données."
    ]
  },
  {
    index: 4,
    name: 'html',
    value: 95,
    color: '#ef652c',
    logo: require('../assets/html.png'),
    description: [
      "Le HTML est un langage permettant de structurer une page web.",
      "Chez iDVROOM, j'ai notamment travailler avec le moteur de template Twig, qui permet de séparer la Vue du code PHP.",
      "Twig permet d'inclure dans nos templates des variables PHP, d'effectuer des conditions, ou bien de déclarer des variables."
    ]
  },
  {
    index: 5,
    name: 'css',
    value: 90,
    color: '#36a9dc',
    logo: require('../assets/css.svg'),
    description: [
      "Le CSS est un langage permettant de créer le style d'une page web.",
      "En attribuant une classe à une balise HTML, on va pouvoir déterminer le position, la taille, ou tout autre attribut visuel de cet élément.",
      "Il existe également des préprocesseurs, qui permettent de générer dynamiquement des fichiers CSS. Grâce aux préprocesseurs, il est possible d'insérer des variables, d'imbriquer les classes CSS, et d'effectuer certaines opérations (boucles, conditions...).",
      "Il est également possible d'écrire du \"CSS-in-JS\", afin d'écrire du CSS à l'intérieur de nos composants JS. Grâce à certaines librairies comme Styled-components, on peut conditionner le style d'un élement en fonction d'une propriété du composant."
    ]
  },
  {
    index: 6,
    name: 'node',
    value: 65,
    color: '#73a763',
    logo: require('../assets/node.png'),
    description: [
      "Node.js permet d'utiliser le Javascript pour créer un environnement côté serveur.",
      "Le framework Express offre plusieurs fonctionnalités permettant de créer plus rapidement une application en Node.js. J'ai utilisé ce framework pour créer un serveur web pouvant récupérer et modifier des données stockées dans une base MongoDB. "
    ]
  },
];

export default skills;