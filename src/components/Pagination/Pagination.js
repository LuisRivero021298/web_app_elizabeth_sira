export default {
    name: 'Pagination',
    props:['items', 'currentPage', 'pageSize'],
    methods: {
        updatePage(pageNumber) {
            this.$emit('page:update', pageNumber);
        },
        totalPages(){
            return Math.ceil(this.items.length / this.pageSize);
        },
        showPreviousLink() {
            return this.currentPage == 0 ? false : true;
        },
        showNextLink() {
            return this.currentPage == (this.totalPages() - 1) ? false : true;
        }
    }
}