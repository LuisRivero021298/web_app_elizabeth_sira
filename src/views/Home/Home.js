import {mapState, mapMutations} from 'vuex';
import Parallax from '@/components/Parallax/Parallax.vue';
import Portfolio from '@/components/Portfolio/Portfolio.vue';
import Preloader from '@/components/Preloader/Preloader.vue';
import CategoriesCard from '@/components/CategoriesCard/CategoriesCard.vue';
import TitleComponent from '@/components/TitleComponent/TitleComponent.vue';
import AboutCard from '@/components/AboutCard/AboutCard.vue';
import ContactCard from '@/components/ContactCard/ContactCard.vue';
import M from 'materialize-css';

export default{
	name:'Home',
	components:{
		Parallax,
		Portfolio,
		CategoriesCard,
		TitleComponent,
		AboutCard,
		ContactCard,
		Preloader
	},
	data(){
		return {
			load: false
		}
	},
	computed: {
		...mapState(['urlBase','categories', 'route'])
	},
	methods: {
		...mapMutations(['addAll','changeRoute']),
		loadCategories(){
            fetch(`${this.urlBase}/api/category`)
            .then(response => { return response.json(); })
            .then(json => {
                this.setCategories(json.data);
            })
            .catch(error => console.log(error));
        },
        setCategories(data){
            let datas = {
                data,
                data2: 'addcategories'
            };
            this.addAll(datas); //execute the mutation
		},
		scrollspy() {
			var elems = document.querySelectorAll('#home');
			var instances = M.ScrollSpy.init(elems, {scrollOffset: 0});
        }
		
	},
	mounted(){
		this.$nextTick(function () {
		    window.addEventListener('load', () => {
				this.load = true;
			});
		});
		
		this.changeRoute(this.$route.path);
		M.AutoInit();
		this.loadCategories();
	},
	updated(){
		this.load = true;
	}

}