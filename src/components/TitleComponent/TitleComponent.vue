<template>
	<div>
		<h2> {{msg}}</h2>
	</div>
</template>

<script>
import { mapState } from 'vuex';
	export default{
		name: 'titlecomponent',
		props: ['msg'],
		data(){
			return {
				route: this.$route.path
			}
		},
		methods:{
			
		},
	}
</script>

<style scoped>
	div{
		width: 90%;
		margin: 0 auto;
		text-align: center;
		display: grid;
		grid-template-columns: repeat(3, minmax(200px, 1fr));
		grid-template-areas: "box-material msg other"
	}
		
	.box-material{
		grid-area: box-material;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.box-material .material-icons{
		font-size: 30px;
		cursor: pointer;
	}
	
	h2{
		grid-area: msg;
		text-transform: uppercase;
		font-size: 50px;
		margin: 20px auto;
	}

	.no-visible{
		visibility: hidden;
	}
</style>