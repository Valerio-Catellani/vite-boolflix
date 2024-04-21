<template>
    <div class="wrapper px-5 rounded-5 ">
        <div id="carouselExampleIndicators" class="carousel slide h-100 container" @mouseover="stopAutomaticScroll"
            @mouseleave="AutomaticScroll">
            <div class="carousel-inner container pt-4">
                <template v-for="(element, index) in store.carusel.results" :key="element">
                    <div class="carousel-item" :class="{ 'active': index === count - 1 }" v-if="index === count - 1">
                        <VideoPreviewComponent :info="element" />
                    </div>
                </template>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                @click="count <= 1 ? count = 5 : count--">
                <i class="arrow fa-solid fa-caret-left fa-2xl mine-text-shadow "></i>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                @click="count < 5 ? count++ : count = 1">
                <i class="arrow fa-solid fa-caret-right fa-2xl mine-text-shadow "></i>
                <span class="visually-hidden">Next</span>
            </button>
            <div class="carousel-indicators py-3">

                <button type="button" data-bs-target="#carouselExampleIndicators" v-for="i in numberOfElements" :key="i"
                    :class="{ 'active': i === count }" @click="count = i"></button>
            </div>
        </div>
    </div>

</template>

<script>
import { store, storeMethods } from '../../store';
import VideoPreviewComponent from '../MainComponents/VideoPreviewComponent.vue';
export default {

    name: 'CaruselComponent',
    components: {
        VideoPreviewComponent
    },
    data() {
        return {
            store,
            storeMethods,
            numberOfElements: 5,
            count: 1,
            interval: null
        }
    },

    methods: {
        AutomaticScroll() {
            if (!this.interval) {
                this.interval = setInterval(() => {
                    if (this.count < 5) {
                        this.count++
                    } else {
                        this.count = 1
                    }
                }, 1000 * 10)
            }
        },
        stopAutomaticScroll() {
            clearInterval(this.interval)
            this.interval = null
        }
    },

    mounted() {
        this.AutomaticScroll()
    },

}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/partials/variables' as *;

.wrapper {
    background-color: $jumbo-color;
    margin-top: -10px;
    box-shadow: 0 0 15px $main-red-color;

    .carousel-indicators {
        position: static;
    }

    .carousel-inner {
        height: 90%;
        width: 86%;
    }

    .carousel-control-prev,
    .carousel-control-next {
        width: 7%;
    }


    .arrow {
        font-size: 4rem;
        color: $main-red-color;
    }
}
</style>