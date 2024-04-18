<template>
    <div class="card-list-container">
        <div class="card-list-title container">
            <div v-if="typeOfCollection === 'search' && searchParameter">
                <h2 v-if="arrayValues.length === 0">No {{ title }} results found for "{{ searchParameter
                    }}"
                </h2>
                <h2 v-else>{{ title }} for "{{ searchParameter }}"</h2>
            </div>
            <h2 v-else-if="typeOfCollection === 'normal'">{{ title }}</h2>
        </div>
        <div class="card-list-card-container container position-relative d-flex">
            <div class="arrow-container">
                <i class="arrow fa-solid fa-caret-left fa-2xl mine-text-shadow"></i>
            </div>
            <CardComponent v-for="element in arrayValues" :key="element.id" :info="element" />
            <div class="arrow-container arrow-container-right">
                <i class="arrow fa-solid fa-caret-right fa-2xl mine-text-shadow"></i>
            </div>
        </div>
    </div>


</template>

<script>
import { store } from '../../store';
import CardComponent from '../MainComponents/CardComponent.vue';

export default {
    name: 'SearchResultsComponent',
    props: {
        arrayValues: {
            type: Array,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        searchParameter: {
            type: String,
            required: false
        },
        typeOfCollection: {
            type: String,
            dafault: 'normal'
        }

    },
    components: {
        CardComponent,
    },
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/partials/variables' as *;

.card-list-card-container {

    .arrow-container {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        z-index: 500;
        height: 100%;
        width: 5%;
        background: linear-gradient(90deg, rgba(0, 0, 0, 0.9640231092436975) 4%, rgba(80, 80, 80, 0.3925945378151261) 78%, rgba(0, 0, 0, 0) 200%);
        cursor: pointer;
        opacity: 0;

        &:hover {
            opacity: 1;
        }

        .arrow {
            font-size: 4rem;
            color: $main-red-color;
        }
    }

    .arrow-container-right {
        right: 0;
    }


}
</style>
