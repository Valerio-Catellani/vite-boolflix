<template>
    <div id="offCanvas" class=" position-fixed bottom-0 w-100" @click="console.log(store.fullVideo.element)"
        :class="{ 'open': store.fullVideo.isPlaying }">
        <div class="close-button d-flex align-items-center justify-content-center">
            <i class="mine-text-white-shadow text-danger fa-solid hover-size fa-xmark " role="button"
                @click="closeVideo()"></i>
        </div>
        <div v-if="!store.fullVideo.element && store.fullVideo.isPlaying" class="text-center text-white my-5">
            <h2>Cannot reproduce video. Please try later. If the problem persists, please contact us.</h2>
        </div>
        <div v-else class="video-container">
            <iframe v-if="store.fullVideo.isPlaying" ref="mineVideo" width="100%" height="100%"
                title="YouTube video player" frameborder="10"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                :src="store.fullVideo.element.url_fullVideo" referrerpolicy=" strict-origin-when-cross-origin">
            </iframe>
        </div>
    </div>
</template>

<script>
import { store } from '../store';
export default {
    name: 'OffCanvasComponent',
    data() {
        return {
            store
        }
    },

    methods: {
        closeVideo() {
            this.store.fullVideo.isPlaying = false
            this.store.fullVideo.element = ''
        }
    },

}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

#offCanvas {
    z-index: 100000;
    height: 0%;
    transition: height 0.5s ease;
    background-color: $header-background-color;

    .close-button {
        height: 60px;
        font-size: 4rem;

        .fa-xmark {
            box-shadow: none;
        }
    }

    .video-container {
        height: calc(100% - 120px);
        margin-bottom: 60px
    }
}

.open {
    height: 100% !important;
}
</style>