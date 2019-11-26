<template>
	<div v-if="totalPages() > 0" class="pagination-wrapper">
		<span 
			v-if="showPreviousLink()" 
			class="pagination-btn" 
			@click="updatePage(currentPage - 1)"> < </span>	
	
		{{ currentPage + 1 }} of {{ totalPages() }}
		<span 
			v-if="showNextLink()" 
			class="pagination-btn"
			@click="updatePage(currentPage + 1)"
			> > </span>
	</div>
</template>

<script src="./Pagination.js"></script>

<style src="./Pagination.css" scoped></style>