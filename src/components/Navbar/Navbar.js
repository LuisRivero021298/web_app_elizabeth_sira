import {mapState, mapMutations} from 'vuex';

export default{
    name: 'NavBar',
    data() {
        return {
            
        }
    },
    computed: {
        ...mapState(['route'])
    },
    methods:{
        ...mapMutations(['changeRoute']),
        sidenav() {
            document.addEventListener('DOMContentLoaded', function() {
                var elems = document.querySelectorAll('.sidenav');
                var instances = M.Sidenav.init(elems);
            });
        },
        
        prueba(e){
            console.log(e);
        }
    },
    mounted() {
        this.changeRoute(this.$route.path);
        this.sidenav();
    },
    updated() {
        
    }
}