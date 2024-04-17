<template>
    <div class="bg-white container d-flex flex-wrap justify-content-center">

        <CardComponent v-for="i in store.formattedResults" :key="i.id" :info="i" />
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