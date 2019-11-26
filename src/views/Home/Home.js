import {mapState, mapMutations} from 'vuex';
import Parallax from '@/components/Parallax/Parallax.vue';
import Portfolio from '@/components/Portfolio/Portfolio.vue';
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
		ContactCard
	},
	data(){
		return {
			
		}
	},
	computed: {
		...mapState(['urlBase','categories', 'route'])
	},
	methods: {
		...mapMutations(['addAll','changeRoute']),
		loadCategories(){
            fetch(`${this.urlBase}category`)
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
			var elems = document.querySelectorAll('.scrollspy');
			var instances = M.ScrollSpy.init(elems, {scrollOffset: 50});
        }
		
	},
	mounted(){
		this.changeRoute(this.$route.path);
		M.AutoInit();
		//document.addEventListener('DOMContentLoaded', this.scrollspy());
		this.loadCategories();
	},
	updated(){
		//this.scrollspy();
	}

}