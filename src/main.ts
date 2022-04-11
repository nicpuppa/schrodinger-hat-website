import Vue, { createApp, h } from 'vue';
import VueI18n from 'vue-i18n';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import messages from './i18n/messages.json';

const i18n = new VueI18n({
  locale: navigator.language.substring(0, 2),
  fallbackLocale: 'en',
  messages,
});

createApp({ ...App, i18n })
  .use(router)
  .mount('#app');
