<template>
    <main class="position-relative">
        <CaruselComponent />
        <div class="container d-flex flex-column">
            <LoaderComponent v-if="store.isLoading" />
            <template v-for="element in findEmptyResults" :key="element[1].name">
                <SearchResultsComponent
                    v-if="(element[1].type === 'search' && !this.store.isLoading) || element[1].type === 'normal'"
                    :arrayValues="element[1].results" :title="element[1].name" :searchParameter="element[1].searchInput"
                    :typeOfCollection="element[1].type" />
            </template>
        </div>
    </main>
</template>

<script>
import { store } from '../../store';
import SearchResultsComponent from '../MainComponents/SearchResultsComponent.vue';
import CaruselComponent from '../MainComponents/CaruselComponent.vue';
import LoaderComponent from '../MainComponents/LoaderComponent.vue';

export default {
    name: 'MainComponent',
    components: {
        SearchResultsComponent,
        CaruselComponent,
        LoaderComponent,
    },
    data() {
        return {
            store
        }
    },
    computed: {
        findEmptyResults() {
            let emptyResults = Object.entries(store.formattedResults).filter(element => {
                return element[1].results.length > 0
            })
            return emptyResults
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/partials/variables' as *;

main {
    margin: 60px;
}
</style>