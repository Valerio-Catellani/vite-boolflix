<template>
    <main class="position-relative">
        <CaruselComponent />
        <div class=" container">
            <SearchResultsComponent v-for="element in findEmptyResults" :key="element[1].name"
                :arrayValues="element[1].results" :title="element[1].name" :searchParameter="element[1].searchInput"
                :typeOfCollection="element[1].type" />
        </div>
    </main>
</template>

<script>
import { store } from '../../store';
import SearchResultsComponent from '../MainComponents/SearchResultsComponent.vue';
import CaruselComponent from '../MainComponents/CaruselComponent.vue';

export default {
    name: 'MainComponent',
    components: {
        SearchResultsComponent,
        CaruselComponent
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
    margin-top: 80px;
}
</style>