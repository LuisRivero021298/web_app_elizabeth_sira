export default {
    name: 'ScrollUp',
    methods: {
    	scrollUp(){
    		window.scrollTo({
    			top: 0,
    			left: 0,
    			behavior: 'smooth'
    		});
    	}
    }
}