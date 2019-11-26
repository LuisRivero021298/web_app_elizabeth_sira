import {mapState} from 'vuex';
import Preloader from '@/components/Preloader/Preloader.vue';

export default{
    name: 'CategoriesCard',
    props:['category'],
    data(){
        return {
            aa: false
        }
    },
    components:{
        Preloader
    },
    computed:{
        ...mapState(['urlBase'])
    }
}