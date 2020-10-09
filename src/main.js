import firebase from 'firebase/app';
import 'firebase/database';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/css/style.scss';


const firebaseDevConfig = {
	apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
	authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
	projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGE_SENDER_ID,
	appId: process.env.VUE_APP_FIREBASE_APP_ID
};

firebase.initializeApp(process.env.NODE_ENV === 'production' ? firebaseProdConfig : firebaseDevConfig);
const database = firebase.database();
export { database };


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
