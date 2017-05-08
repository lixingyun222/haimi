// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import vueAwesomeSwiper from 'vue-awesome-swiper'


Vue.use(vueAwesomeSwiper)

Vue.use(Vuex)

Vue.use(VueResource)

Vue.config.productionTip = false

var store = new Vuex.Store({
 	 	state: {
    		loadingShow:false,
    		carList:[],
  		},
  	mutations: {
    	getDatas (state,data) {
      		state.loadingShow=data
   	 	},
   	 	addCarList (state,data){
   	 		state.carList.push(data);
 			window.localStorage["carList"]= JSON.stringify(state.carList);
   	 	},
   	 	setCarList (state,data){
   	 		state.carList=data;
   	 	}
  	},
  	actions :{
  		getCarList (context){
  			var data = JSON.parse(window.localStorage["carList"]);
  			if(data){
  				context.commit("setCarList",data)
  			}
  		}
  	}
})

Vue.http.interceptors.push((request, next)  =>{
 	store.commit('getDatas',true)
	next((response) => {
	    store.commit('getDatas',false)
	    return response;
	});
});

 

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created (){
  	this.$store.dispatch("getCarList")
  }
})
