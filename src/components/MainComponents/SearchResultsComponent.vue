<template>
    <div class="card-list-container my-3 pt-3">
        <div class="card-list-title container text-white ps-0">
            <div v-if="typeOfCollection === 'search' && searchParameter">
                <h4 v-if="arrayValues.length === 0">No {{ title }} results found for "{{ searchParameter
                    }}"
                </h4>
                <h4 v-else>{{ title }} for "{{ searchParameter }}"</h4>
            </div>
            <h4 v-else-if="typeOfCollection === 'normal'">{{ title }}</h4>
        </div>
        <div ref="containerDimensioned"
            class="card-list-card-container container d-flex position-relative overflow-x-hidden px-0">
            <div v-if="count !== 0" class="arrow-container" @click="scroll('left')">
                <i class="arrow fa-solid fa-caret-left fa-2xl mine-text-shadow"></i>
            </div>
            <div ref="scrollable" class="rail d-flex position-relative">
                <CardComponent v-for="element in arrayValues" :key="element.id" :info="element" />
            </div>
            <div v-if="-count < maxScroll" class="arrow-container arrow-container-right" @click="scroll('right')">
                <i class="arrow fa-solid fa-caret-right fa-2xl mine-text-shadow"></i>
            </div>
        </div>
    </div>


</template>

<script>
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
            moveValue: 0,
            count: 0,
            maxScroll: 0
        }
    },
    methods: {
        scroll(direction) {
            if (direction === 'left') {
                this.count++
                this.moveValue += 125; //!
                this.$refs.scrollable.setAttribute('style', `left: ${this.moveValue}px`);
            } else {
                this.moveValue -= 125 //!
                this.count--
                this.$refs.scrollable.setAttribute('style', `left: ${this.moveValue}px`)
            }
        },
        measureContainerWidth() {
            const containerWidth = this.$refs.containerDimensioned.clientWidth;
            this.maxScroll = this.arrayValues.length - Math.floor(containerWidth / 125) //!
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.measureContainerWidth();
            window.addEventListener('resize', this.measureContainerWidth);
        });
    },

}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/partials/variables' as *;

.card-list-card-container {
    height: 220px;

    .rail {
        left: 0;
        transition: left 0.5s;
    }

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
        background: linear-gradient(-90deg, rgba(0, 0, 0, 0.9640231092436975) 4%, rgba(80, 80, 80, 0.3925945378151261) 78%, rgba(0, 0, 0, 0) 200%);

    }




}
</style>
