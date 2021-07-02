/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;
import store from './vuex/store'

Vue.component('chat-component', require('./components/Chat/ChatComponent.vue').default);


const app = new Vue({
    el: '#app',
    store
});
