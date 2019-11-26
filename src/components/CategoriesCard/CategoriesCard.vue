<template>
	<div class="category">
		<router-link :to="{name: 'Services', params:{ id_category: category.id}}">
			<div class="row">
				<div class="col">
					<div class="card">
						<Preloader v-if="!category.image_category"></Preloader>
						<div v-if="category.image_category" class="card-image">
							<img :src="urlBase+'images/'+category.image_category">
							<span  class="card-title">{{ category.name_category }}</span>
						</div>
					</div>
				</div>
			</div>
		</router-link>
	</div>
</template>

<script src="./CategoriesCard.js"></script>
<style src="./CategoriesCard.css" scoped></style>