<template>
	<div id="app">
		<div id="nav">
			<Navbar />
		</div>
		<router-view />
		<FooterComponent/>
	</div>
</template>

<script>
import Navbar from './components/Navbar/Navbar.vue';
import FooterComponent from './components/Footer/FooterComponent.vue';
import M from 'materialize-css';

import { mapState } from 'vuex';

  	export default{
		name: 'App',
		data(){
			return{
				
			}
		},
		components: {
			Navbar,
			FooterComponent
		},
		computed: {
			...mapState(['enableButton'])
		},
		methods: {
			next(){
				this.$router.go(1);
			},
			scrollspy() {
				var elems = document.querySelectorAll('.scrollspy');
				var instances = M.ScrollSpy.init(elems, {scrollOffset: 50});
			}
		},
		mounted(){
			document.addEventListener('DOMContentLoaded', this.scrollspy());
		},
		updated(){
			this.scrollspy();
		}
  }  
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300&display=swap');
*{
	font-family: 'Open Sans Condensed', sans-serif !important;
}
body{
   overflow-x: hidden !important;
}
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
#nav a {
	font-weight: bold;
	color: #2c3e50;
}
#nav a.router-link-exact-active {
  	color: #42b983;
}

.material-icons {
	font-family: 'Material Icons';
	font-weight: normal;
	font-style: normal;
	font-size: 24px;  /* Preferred icon size */
	display: inline-block;
	line-height: 1;
	text-transform: none;
	letter-spacing: normal;
	word-wrap: normal;
	white-space: nowrap;
	direction: ltr;

	/* Support for all WebKit browsers. */
	-webkit-font-smoothing: antialiased;
	/* Support for Safari and Chrome. */
	text-rendering: optimizeLegibility;

	/* Support for Firefox. */
	-moz-osx-font-smoothing: grayscale;

	/* Support for IE. */
	font-feature-settings: 'liga';
}

/*responsive*/
@import './assets/style.css';
</style>
