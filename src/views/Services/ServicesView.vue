<template>
<div class="services">
	<Preloader v-if="!load"></Preloader>
	<Parallax 
		class="main-slider"
		:title="categoryName + ' Services' "
		section="services"/>
  	<div class="container-services">
		<ul>
			<li 
			v-for="service in visibleServices" 
			:key="service.id"  
			:visibleServices="visibleServices"
			:currentPage="currentPage">
				<ServicesCard :service="service" />
			</li>
		</ul>
		<Pagination 
			:items="filterServices"
			@page:update="updatePage"
			:currentPage="currentPage"
			:pageSize="pageSize"
		>
				
		</Pagination>
  	</div>
</div>
</template>

<script>
import TitleComponent from "@/components/TitleComponent/TitleComponent.vue";
import ServicesCard from "@/components/ServicesCard/ServicesCard.vue";
import Parallax from "@/components/Parallax/Parallax.vue";
import Pagination from '@/components/Pagination/Pagination.vue';
import Preloader from '@/components/Preloader/Preloader.vue';
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";

export default{
  	name: "ServicesView",
  	data() {
  		return {
  			currentPage:0,
  			pageSize: 3,
  			visibleServices: [],
  			load: false
  		}
  	},
  	created() {
		this.loadServices();
		this.changeRoute(this.$route.path);
	},
  	beforeMount() {
  		this.updateVisibleServices();
  	},
	mounted(){
		this.$nextTick(function () {
		    window.addEventListener('load', () => {
				this.load = true;
			});
		});
	},
	updated(){
		this.load = true;
	},
  	components: {
		TitleComponent,
		ServicesCard,
		Parallax,
		Pagination,
		Preloader
	},
	computed: {
		...mapState(["urlBase", "next", "prev", "route"]),
		...mapGetters(["filterById"]),

		filterServices() {
			let data = {};
			//servicios filtrados por el id de la categoria
			if (this.$route.params.id_category) {
				data = {
					id: this.$route.params.id_category,
					filter: "filterServices"
				};
				return this.filterById(data);
			} 
			data = { filter: "noFilterServices" };
			return this.filterById(data); //all services
		},
		categoryName() {
			if (this.$route.params.id_category == 1) {
				return "Peluquería";
			} 
			if (this.$route.params.id_category == 2) {
				return "Spa";
			}
			return "";
		}
	},
  	methods: {
    	...mapMutations(["addAll",'changeRoute']),
    	loadServices() {
      		fetch(`${this.urlBase}api/service`)
        	.then(response => {
          		return response.json();
        	})
			.then(json => {
				this.setServices(json.data);
			})
        	.catch(error => console.log(error));
    	},
		setServices(data) {
			let datas = {
				data,
				data2: "addservices"
			};
			this.addAll(datas); //mutation addAll
			this.updateVisibleServices();
		},
		updatePage(pageNumber){
			this.currentPage = pageNumber;
			this.updateVisibleServices();
		},
		updateVisibleServices() {
			this.visibleServices = 
			this.filterServices.slice(this.currentPage * this.pageSize, 
									 (this.currentPage * this.pageSize) + this.pageSize);

			if (this.visibleServices.length == 0 && this.currentPage > 0 ) {
				this.updatePage(this.currentPage = 1 );
			}
		}
 	}
};
</script>

<style scoped>
.services{
	display: grid;
	grid-template-columns: minmax(400px, 1fr);
	grid-template-rows: 700px 1fr;
	grid-template-areas:"main-slider"
						"services";
}
.main-slider{
	grid-area: main-slider;
}
.container-services {
	margin: 30px auto;
	width: 80%;
  	display: grid;
  	grid-gap: 10px;
	grid-area: services;
  	grid-template-columns: 1fr;
  	grid-template-areas:"title"
						"content-service";
}


</style>