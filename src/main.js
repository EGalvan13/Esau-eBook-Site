import { createApp, VueElement } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

// import { library } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import { faUserSecret, faCaretDown } from "@fortawesome/free-solid-svg-icons";
// library.add(faUserSecret, faCaretDown);


import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fas, far, fab)
dom.watch();


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBeB9ukxp0IVKvTX2Xv6lQV_r9MwZ2-E80",
//   authDomain: "e-book-4c93d.firebaseapp.com",
//   projectId: "e-book-4c93d",
//   storageBucket: "e-book-4c93d.appspot.com",
//   messagingSenderId: "266739952343",
//   appId: "1:266739952343:web:838fec2b14d0137c3b9e92"
// };
const firebaseConfig = {
  apiKey: "AIzaSyCzWz68UM6zFZS6ZIovfL5bl_oTUIAriOw",
  authDomain: "e-book-5dcf3.firebaseapp.com",
  projectId: "e-book-5dcf3",
  storageBucket: "e-book-5dcf3.appspot.com",
  messagingSenderId: "1061489197021",
  appId: "1:1061489197021:web:f5fb24c71ebc17f741c034"
};

// Initialize Firebase
initializeApp(firebaseConfig);

import store from './store'

const app = createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.use(store)
app.mount('#app')
