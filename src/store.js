import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  	state: {
		urlBase: 'http://localhost:8000/',
		categories: [],
		services: [],
		works: [],
		next : '<ion-icon name="ios-arrow-forward"></ion-icon>',
		prev : '<ion-icon name="ios-arrow-back"></ion-icon>',
		route: ''
  	},
  	mutations: {
		addAll(state, data){
			switch(data.data2){
				case 'addcategories': 
					state.categories = data.data;
					break;
				case 'addservices':
					state.services = data.data;
					break;
				case 'addworks':
					state.works = data.data;
					break;
				default:
					console.log('nada');
			}
		},
		changeRoute(state, route){
			state.route = route;
		}
  	},
  	actions: {
		loadCategories({ commit, state }){
			fetch(`${state.urlBase}category`)
			.then(response => { return response.json(); })
			.then(json => {
				commit('addCategories',json);
			})
			.catch(error => console.log(error));
		},
	},
  	getters: {
		filterById:(state) => (data) => {
			switch(data.filter){
				case 'filterServices':
					return state.services.filter(service => service.category_id == data.id);
					break;
				case 'filterWorks':
					return state.works.filter(work => work.service_id == data.id);
					break;
				case 'noFilterServices': 
					return state.services;
					break;
				case 'noFilterWorks': 
					return state.works;
					break;
				default:
					console.log('No filtra');
			}
		},
		filterOrderDesc: (state) => {
			return state.works.sort(function(a,b){
				a.id - b.id;
			});
		}
  	}
})
