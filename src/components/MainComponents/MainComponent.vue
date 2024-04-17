<template>
    <main class="position-relative">
        <div class="bg-white container">
            MAIN -CONTENT
            <SearchResultsComponent />
        </div>
    </main>
</template>

<script>
import { store } from '../../store';
import SearchResultsComponent from '../MainComponents/SearchResultsComponent.vue';

export default {
    name: 'MainComponent',
    components: {
        SearchResultsComponent
    },
}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/partials/variables' as *;

main {
    margin-top: 80px;
}
</style>