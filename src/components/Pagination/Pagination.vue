<template>
	<ul v-if="totalPages() > 0" class="pagination pagination-wrapper ">
		<li 
			class="pagination-btn"
			:class="{'disabled': !showPreviousLink()}" 
			@click="updatePage(currentPage - 1)">
			<a href="#!"> <ion-icon name="ios-arrow-dropleft"></ion-icon> 
			</a>
		</li><!-- end prev-btn!-->	
		<li v-for="(page, index) of totalPages()" :class="{'active': index == currentPage}" >
			<a href="#!">{{ index + 1 }}</a>
		</li>
		<li 
			class="pagination-btn"
			:class="{'disabled': !showNextLink()}" 
			@click="updatePage(currentPage + 1)"
			><a href="#!"> 
				<ion-icon  name="ios-arrow-dropright"></ion-icon> 
			</a>
		</li><!-- end next-btn!-->
	</ul>
</template>

<script src="./Pagination.js"></script>

<style src="./Pagination.css" scoped></style>