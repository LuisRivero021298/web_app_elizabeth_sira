<template>
	<div class="service">
		<div class="row service-content">
			<div class="col s12 image-card">
				<img :src="urlBase+'images/'+service.image_service" class="img-card">
			</div>
			<div class="content-card">
				<h1>{{ service.name_service }}</h1>
				<span>s/ 200.00 </span>
				<p> {{ service.description_service }}</p>
			</div>
		</div>
		
	</div>	
</template>

<script>
import {mapState} from 'vuex';

	export default{
		name: 'ServicesCard',
		props:['service'],
		computed: {
			...mapState(['urlBase'])
		}
	}
</script>

<style scoped>
	.service-content {
		display: grid;
		grid-gap: 25px;
		grid-template-columns: 200px 500px;
		grid-template-areas: "image content-c"
	}

	.s12{
		padding: 0;
	}
	.image-card{
		grid-area: image;
	}
	.content-card{
		grid-area: content-c;
	}
	.content-card h1{
		font-size: 20px;
		text-transform: uppercase;
		margin: 0;
		text-align: left;
		color: #666666;
	}
	.content-card span{
		display: block;
		margin: 14px 0;
		text-align: left;
		color: #000;
		font-size: 24px;
	}
	.content-card p{
		font-weight: 100;
		text-align: left;
		color: #717171;
		font-size: 16px;
	}
	.img-card{
		width: 100%;
	}
	.service{
		margin: 0;
		max-width: 22em;
	}
	.service img{
		height: 250px;
		object-fit: cover;
		border-radius: 0;
	}

</style>