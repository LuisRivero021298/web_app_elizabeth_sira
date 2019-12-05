<template>
	<div class="main">
		<Preloader v-if="!load"></Preloader>
		<Parallax 
			id="home"
			class="main-slider scrollspy" 
			title="Elizabeth Sira"
			description="Estilista Profesional" 
			section="home"/>
		
		<div id="services" class="content scrollspy .no-autoinit">
			<div class="container-categories"> 
				<h2 class="title">services</h2>
				<ul class="categories">
					<li v-for="category in categories" class="col-sm" :key="category.id">
						<CategoriesCard :category="category" />
					</li>
				</ul>
			</div>
		</div>

		<div id="about" class="scrollspy .no-autoinit">
			<div class="container-about">
				<h2 class="title">about me</h2>
				<AboutCard />
			</div>
		</div>
		
		<div id="portfolio" class="scrollspy .no-autoinit">
			<div class="portfolio-container">
				<h2 class="title title-hide" >portfolio</h2>
				<Portfolio/>	
			</div>	
		</div>
		

		<div id="contact" class="scrollspy">
			<div class="container-contact">
				<h2 class="title">contact</h2>
				<ContactCard />
			</div>
		</div>

	</div>
</template>

<script src="./Home.js"></script>
<style src="./Home.css" scoped></style>