<template>
  <HeaderComponent />
  <ModalBackgroundComponent v-if="store.showModal" />
  <MainComponent />
</template>

<script>
import { store, storeMethods } from './store';
import axios from 'axios';
import HeaderComponent from './components/HeaderComponents/HeaderComponent.vue';
import MainComponent from './components/MainComponents/MainComponent.vue';
import ModalBackgroundComponent from './components/ModalBackgroundComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    MainComponent,
    ModalBackgroundComponent
  },
  data() {
    return {
      store,
      storeMethods
    }
  },
  methods: {
    getMovies() {
      console.log(this.store.apiURL + this.store.endPoints.movies, this.store.options);
      axios.get(this.store.apiURL + this.store.endPoints.movies, this.store.options)
        .then((result) => {
          console.log(result.data.results);
        })
    },
    getSeries() {
      console.log(this.store.apiURL + this.store.endPoints.series, this.store.options);
      axios.get(this.store.apiURL + this.store.endPoints.series, this.store.options)
        .then((result) => {
          console.log(result.data.results);
        })
    }
  },
  created() {
    // this.getSeries();
    // this.getMovies();
    //this.store.formattedResults = this.storeMethods.formatData(this.store.rawResults);
  }
}
</script>

<style lang="scss" scoped></style>