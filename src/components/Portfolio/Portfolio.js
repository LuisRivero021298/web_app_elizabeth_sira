import { mapState, mapGetters, mapMutations } from 'vuex';
export default{
    name: 'Portfolio',
    data(){
        return {
            specialSales : []
        }
    },
    computed:{
        ...mapState(['urlBase','works']),
        ...mapGetters(['filterOrderDesc']),
        classHide(){
            return {
                
            }
        }
    },
    methods:{
        ...mapMutations(['addAll']),
        loadWorks(){
            fetch(`${this.urlBase}work`)
            .then(response => { return response.json(); })
            .then(json => {
                this.setWork(json.data);
            })
            .catch(error => console.log(error));
        },
        setWork(data){
            let datas = {
                data,
                data2: 'addworks'
            };
            this.addAll(datas);
        }
    },
    created(){
        this.loadWorks();
    }
}