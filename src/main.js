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

const firebaseProdConfig = {
	apiKey: 'AIzaSyChia8ECfUc8K6BPounYES4Icn9YYWwoH8',
	authDomain: 'filmsovet.firebaseapp.com',
	databaseURL: 'https://filmsovet.firebaseio.com',
	projectId: 'filmsovet',
	storageBucket: 'filmsovet.appspot.com',
	messagingSenderId: '22290152608',
	appId: '1:22290152608:web:13a4a9dbaa5f733fcb9dc5'
}

firebase.initializeApp(firebaseProdConfig);
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
