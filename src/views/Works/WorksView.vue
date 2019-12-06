<template>
  <div class="works">
    <Parallax 
    class="main-slider"
    title="Briefcase"/>

    <div class="container-works container">
      <ul>
        <li 
          v-for="work in filterWork" 
          :key="work.id">
          <WorksCard :work="work"/>
        </li>
      </ul>
    </div>
  </div>
  
</template>

<script>
import TitleComponent from '@/components/TitleComponent/TitleComponent.vue';
import Parallax from "@/components/Parallax/Parallax.vue";
import WorksCard from '@/components/WorksCard/WorksCard.vue';
import {mapState,mapActions,mapMutations,mapGetters} from 'vuex';

export default{
    name:'WorksView',
    components:{
        TitleComponent,
        WorksCard,
        Parallax,
    },
    computed:{
        ...mapState(['urlBase','next','prev']),
        ...mapGetters(['filterById']),

        filterWork(){
          let data = {};
          if (this.$route.params.id_service) {
            data = {
                id: this.$route.params.id_service,
                filter: 'filterWorks'
            };
          }
          data = {filter: 'noFilterWorks'};
          return this.filterById(data);
        }
    },
    methods:{
        ...mapMutations(['addAll']),
        loadWorks(){
            fetch(`${this.urlBase}api/work`)
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
        this.loadWorks()
    },

}
</script>

<style scoped>
.works{
  display: grid;
  grid-template-columns: minmax(400px, 1fr);
  grid-template-rows: 700px 1fr;
  grid-template-areas:"main-slider"
                      "works";
}
.main-slider{
  grid-area: main-slider;
}
.container-works{
  grid-area: works;
  margin: 60px auto;
}

</style>