<template>
    <div class="d-flex flex-column-reverse flex-md-row align-items-center">
        <div
            class="highlight-info text-white d-flex justify-content-end flex-column align-items-center align-items-md-start pt-3">
            <h2 class="mine-main-color mine-text-shadow display-6 fw-bold mb-3"> {{ info.title }} </h2>
            <h6 class="mb-4 pb-2">Popularity : {{ info.popularity }}</h6>
            <div class="d-flex align-items-center ">
                <button class="btn btn-mine hover-size text-white p-xl-3 p-2 me-xl-4 me-2" @click="muted">More
                    Information</button>
                <div class="icon-container rounded-circle" style="width: 50px; height: 50px;" role="button">
                    <i
                        class="fa-solid fa-plus fw-bold w-100 h-100 d-flex align-items-center justify-content-center"></i>
                </div>
            </div>
        </div>
        <div class="w-70 h-100 d-flex flex-column justify-content-between align-items-center ">
            <div class="border-video d-flex align-items-center justify-content-center overflow-hidden">
                <div class="left-border-gradient h-100"></div>
                <iframe ref="mineVideo" width="700" height="615" :src="info.video" title="YouTube video player"
                    frameborder="10" allow=" autoplay" referrerpolicy=" strict-origin-when-cross-origin">
                </iframe>
                <div class="right-border-gradient h-100"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VideoPreviewComponent',
    props: ['info'],
    data() {
        return {
        }
    },

    // J-GWW9LIOb0
    methods: {

    },
    created() {

    }
}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/partials/variables' as *;



.highlight-info {
    width: 35%;

    .fa-plus {
        font-size: 2rem;
    }
}

.border-video {
    height: 500px;

    .left-border-gradient {
        background-image: linear-gradient(-90deg, rgba(0, 0, 0, 0.9640231092436975) 1%, rgba(80, 80, 80, 0) 78%);
        width: 30px;
    }

    .right-border-gradient {
        background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.9640231092436975) 1%, rgba(80, 80, 80, 0) 78%);
        width: 30px;
    }
}



/** MEDIA QUERIES */


@media screen and (max-width: 1400px) {
    iframe {
        width: 600px;
    }

}

@media screen and (max-width: 1200px) {

    .highlight-info {
        button {
            font-size: 0.8rem;
        }

    }


    .border-video {
        height: 300px;

        iframe {
            width: 500px;
            height: 700px;
        }
    }
}

@media screen and (max-width: 992px) {

    .highlight-info {
        button {
            font-size: 0.7rem;
        }

        .fa-plus {
            font-size: 1.5rem;
        }
    }


    .border-video {
        height: 200px;

        iframe {
            width: 350px;
            height: 350px;
        }
    }
}



@media screen and (max-width: 767px) {

    .highlight-info {
        width: 100%;

        button {
            font-size: 0.7rem;
        }

        .fa-plus {
            font-size: 1rem;
        }
    }


    .border-video {
        height: 200px;

        iframe {
            width: 350px;
            height: 350px;
        }
    }
}
</style>