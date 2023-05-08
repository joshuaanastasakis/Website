import { createApp, nextTick } from 'vue'
import { createPinia } from 'pinia'
// import VueScrollHook from 'vue-scroll-hook'

import App from './App.vue'
import router from './router'

import './assets/main.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import IntroSectionVue from './components/IntroSection.vue'
import AboutSectionVue from './components/AboutSection.vue'
import ProjectsSectionVue from './components/ProjectsSection.vue'
import ContactSectionVue from './components/ContactSection.vue'
import Divider from './components/Divider.vue'
import FirebaseIcon from './components/icons/FirebaseIcon.vue'
import Icon from './components/icons/Icon.vue'
import ProjectCardBig from './components/ProjectCardBig.vue'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzeMXk5WNMlYwhtbJ5_Xvjg_Y7lKVAxW4",
//   authDomain: "portfolio-fa999.firebaseapp.com",
  projectId: "portfolio-fa999",
//   storageBucket: "portfolio-fa999.appspot.com",
//   messagingSenderId: "541353224341",
  appId: "1:541353224341:web:2ee3856cea30c205a8539c",
  measurementId: "G-7WK62EP2L0"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

const app = createApp(App)
app.component('IntroSection', IntroSectionVue)
app.component('AboutSection', AboutSectionVue)
app.component('ProjectsSection', ProjectsSectionVue)
app.component('ContactSection', ContactSectionVue)
app.component('Divider', Divider)
app.component('FirebaseIcon', FirebaseIcon)
app.component('Icon', Icon)
app.component('ProjectCardBig', ProjectCardBig)

app.use(createPinia())
app.use(router)
// app.use(VueScrollHook)

// router.afterEach((to, from, next) => {
//   if (to.hash) {
//     console.log(`Scroll: ${to.hash}`)
//     nextTick().then(() => VueScrollTo.scrollTo(to.hash, 700, {easing: 'ease', cancelable: false}))
//   }
//   if (to.path==='/projects') {
//   }
// })

app.mount('#app')
