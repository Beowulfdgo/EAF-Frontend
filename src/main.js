import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import VueWaveSurfer from "vue-wave-surfer";
import LecturaEAF from "./components/LecturaEAF.vue";

Vue.use(VueAxios, axios, VueWaveSurfer);

// npm i vue-wave-surfer
//npm install --save axios vue-axios
//npm install xml2js

Vue.config.productionTip = false;

Vue.component("LecturaEAF", LecturaEAF);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
