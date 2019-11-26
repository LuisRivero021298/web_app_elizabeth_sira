<template>
	<div class="content section">
		<transition name="slide-fade">
			<router-view />
		</transition>
	</div>
</template>

<script>
import {mapMutations} from 'vuex';
import M from 'materialize-css';
export default{
	name:'AppView',
	data(){
		return {
			route: this.$route.path
		}
	},
	methods: {
		...mapMutations(['enabledButtonIf'])
	},
	updated(){
		this.route = this.$route.path; //update route
		this.enabledButtonIf(this.route);
	}
}
</script>

<style scoped>
.content{
	width: 100%;
	min-height: 600px;
	grid-area: g-content;
}

/**************** 
  transiciones
****************/ 
.slide-fade-enter-active {
  	transition: all .5s ease-in;
}
.slide-fade-leave-active {
  	transition: all .3s cubic-bezier(.17, .67, .83, .67);
}
.slide-fade-enter, .slide-fade-leave-to{
	transform: translateY(800px);
	opacity: 0;
}
</style>