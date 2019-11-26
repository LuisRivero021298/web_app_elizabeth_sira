<template>
	<div class="work">
		<div class="row work-content">
			<div class="col s12 image-card">
				<img :src="urlBase+'images/'+work.image_work" class="img-card">
			</div>
			<div class="content-card">
				<h1>{{ work.name_work }}</h1>
				<p> {{ work.details }}</p>
			</div>
		</div>
	</div>
</template>

<script>
import {mapState} from 'vuex';

	export default{
		name: 'WorksCard',
		props:['work'],
		computed: {
			...mapState(['urlBase'])
		}
	}
</script>

<style scoped>
.work{
	margin: 0 auto;
	max-width: 22em;
	min-width: 20em;
}

.work img{
	height: 300px;
	object-fit: cover;
}

.work-content {
	display: grid;
	grid-gap: 25px;
	grid-template-columns: 200px 500px;
	grid-template-areas: "image content-c"
}
.content-card h1{
	font-size: 20px;
	text-transform: uppercase;
	margin: 0;
	text-align: left;
	color: #666666;
}

.content-card p{
	font-weight: 100;
	text-align: left;
	color: #717171;
	font-size: 16px;
}


</style>