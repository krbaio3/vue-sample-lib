import Vue from 'vue';
import App from './App.vue';

// import DummyButton from "./components/DummyButton.vue";
// export default DummyButton;

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
