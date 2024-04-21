<template>
  <SplashPageComponent />
  <HeaderComponent />
  <ModalBackgroundComponent v-if="store.showModal" />
  <MainComponent v-if="!store.isPlaying" />
  <OffCanvasComponent />
  <FooterComponent />

</template>

<script>
import { store, storeMethods } from './store';
import axios from 'axios';
import HeaderComponent from './components/HeaderComponents/HeaderComponent.vue';
import MainComponent from './components/MainComponents/MainComponent.vue';
import ModalBackgroundComponent from './components/ModalBackgroundComponent.vue';
import SplashPageComponent from './components/SplashPageComponent.vue';
import FooterComponent from './components/FooterComponents/FooterComponent.vue';
import OffCanvasComponent from './components/OffCanvasComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    MainComponent,
    ModalBackgroundComponent,
    SplashPageComponent,
    FooterComponent,
    OffCanvasComponent
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
    this.storeMethods.findTreningWeek();
    this.storeMethods.findPopularSeries()
  }
}
</script>

<style lang="scss" scoped></style>