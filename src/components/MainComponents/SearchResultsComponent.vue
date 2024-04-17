<template>
    <h2 v-if="store.searchResults.movies.length === 0">No movies results found for "{{ store.searchResults.searchInput
        }}"
    </h2>
    <h2 v-else>Movies for "{{ store.searchResults.searchInput }}"</h2>
    <div class="bg-white container d-flex flex-wrap justify-content-center">
        <CardComponent v-for="i in store.searchResults.movies" :key="i.id" :info="i" />
    </div>
    <h2 v-if="store.searchResults.movies.length === 0">No series results found for "{{ store.searchResults.searchInput
        }}"
    </h2>
    <h2 v-else>Series for "{{ store.searchResults.searchInput }}"</h2>
    <div class="bg-white container d-flex flex-wrap justify-content-center">
        <CardComponent v-for="i in store.searchResults.series" :key="i.id" :info="i" />
    </div>
</template>

<script>
import { store } from '../../store';
import CardComponent from '../MainComponents/CardComponent.vue';
export default {
    name: 'SearchResultsComponent',
    components: {
        CardComponent
    },
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/partials/variables' as *;
</style>