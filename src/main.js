import Vue, { createApp, h } from 'vue';
import VueI18n from 'vue-i18n';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import messages from './i18n/messages.json';

Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: navigator.language.substr(0, 2),
  fallbackLocale: 'en',
  messages,
});

createApp({
  i18n,
  render: () => h(App)
}).use(router).mount('#app');
