import Preloader from '@/components/Preloader/Preloader.vue';
import {mapState} from 'vuex';
import M from 'materialize-css';

export default{
    name: 'Parallax',
    props: ['title','description', 'section'],
    components:{
        Preloader
    },
    data() {
      	return {
            imageToParallax:'',
            loadImg:false
      	}
    },
    computed:{
        ...mapState(['urlBase']),
    },
    mounted(){
        console.log(this.imageToParallax.length);
        M.AutoInit();
		this.loadImages();
    },
    methods: {
		loadImages(){
			fetch(`${this.urlBase}parallax/${this.section}`)
			.then( (response)=> {
				return response.json();
			})
            .then(json => {
                this.imageToParallax = json[0];
                if(this.imageToParallax) {
                    setTimeout(()=> {this.loadImg = true}, 1000);
                }
                
            })  
			.catch(error => console.log(error));
		}
    }
}