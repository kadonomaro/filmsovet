import firebase from 'firebase/app';
import 'firebase/database';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueMeta from 'vue-meta'
import Vuelidate from 'vuelidate';
import Paginate from 'vuejs-paginate';
import '@/assets/css/style.scss';

import EscapeDirective from '@/directives/escape.directive';


const firebaseDevConfig = {
	apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
	authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
	projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGE_SENDER_ID,
	appId: process.env.VUE_APP_FIREBASE_APP_ID
};

const firebaseProdConfig = {
	apiKey: 'AIzaSyChia8ECfUc8K6BPounYES4Icn9YYWwoH8',
	authDomain: 'filmsovet.firebaseapp.com',
	databaseURL: 'https://filmsovet.firebaseio.com',
	projectId: 'filmsovet',
	storageBucket: 'filmsovet.appspot.com',
	messagingSenderId: '22290152608',
	appId: '1:22290152608:web:13a4a9dbaa5f733fcb9dc5'
}

firebase.initializeApp(process.env.NODE_ENV === 'production' ? firebaseProdConfig : firebaseDevConfig);
const database = firebase.database();
export { database };

Vue.use(VueMeta);
Vue.use(Vuelidate);
Vue.component('paginate', Paginate);
Vue.directive('escape', EscapeDirective);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
