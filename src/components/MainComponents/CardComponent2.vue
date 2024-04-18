<template>
    <div class="film-card">
        <div class="card-playground"
            :class="{ 'flipped': isFlipped, 'inactive': !isFlipped, 'move-to-center-animation': move, 'rotate-card-animation': rotate }"
            :style="{ transform: `rotateY(${rotDeg}deg)`, left: `${finalX}px`, top: `${finalY}px` }" ref="playground"
            @click="!isFlipped ? openDetails($event.target) : ''">
            <div class="front img-container">
                <img v-if="info.image" class="img-fluid h-100" :src="info.image" :alt="info.title">
                <div v-else class="no-image h-100">
                    <h3 class="text-white text-center p-2 overflow-hidden">{{ info.title }}</h3>
                </div>
            </div>
            <div class="back border-dark border rounded-2" :class="!isFlipped ? 'opacity-0' : ''"
                :style="`width: ${startingWidth}px; height: ${startingHeight}px; left:${backXCompensation}px; top:${backYCompensation}px; background-image: url('${info.imageLarge}')`">
                <div class="filter h-100 d-flex" :class="info.imageLarge != null ? '' : 'full'">
                    <div class="d-flex align-self-end w-75 flex-column align-items-start text-white p-3">
                        <h2 class="mine-text-shadow display-4 fw-bold ">{{ info.title }}</h2>
                        <h5 class="mine-text-shadow mb-3">Original title: {{ info.original_title }}</h5>
                        <div class="d-flex gap-1 align-items-center mb-3">
                            <h6 class="mb-0">Score ({{ info.vote_count }} votes): </h6>
                            <div class="star-container d-flex" v-for="i in stars.fullStars" :key="i">
                                <img class="img-fluid w-100" src="/images/full-star.png" alt="star">
                            </div>
                            <div class="star-container d-flex" v-for="i in stars.halfStars" :key="i">
                                <img class="img-fluid w-100" src="/images/half-star.png" alt="star">
                            </div>
                            <div class="star-container d-flex" v-for="i in stars.emptyStars" :key="i">
                                <img class="img-fluid w-100" src="/images/empty-star.png" alt="star">
                            </div>
                        </div>
                        <p>{{ info.description }}</p>
                        <p>Release date: {{ info.release_date }}</p>
                        <div v-if="flagUrl" class="flag-container mb-3">
                            <img class="img-fluid w-100" :src="flagUrl" :alt="info.language">
                        </div>
                        <h6 class="mb-3" v-else>Language: {{ info.language }}</h6>
                        <button class="btn btn-danger text-center align-self-center shadow-white"
                            @click.stop="closeDetails()">Close
                            Information</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { store, storeMethods } from '../../store';

export default {
    name: 'CardComponent2',
    props: ['info'],
    data() {
        return {
            store,
            storeMethods,
            move: false,
            rotate: false,
            isFlipped: false,
            backgroundImage: `url('${this.info.imageLarge}')`,
            rotDeg: 0,
            initialX: null,
            initialY: null,
            finalX: null,
            finalY: null,
            startingWidth: 250,
            startingHeight: 400,
            endingWidth: 1000,
            endingHeight: 700,
            backXCompensation: 0,
            backYCompensation: 0,
            stars: {
                fullStars: 0,
                halfStars: 0,
                emptyStars: 0
            },
            flagUrl: ''
        };
    },
    methods: {
        openDetails() {
            this.store.showModal = true;
            this.isFlipped = true;
            this.moveToCenter();
            setTimeout(() => {
                this.rotate = true;
            }
                , 1100);



        },
        closeDetails() {
            this.handleDegAnimation(180, 0, 1, '-');
            this.isFlipped = false;
            this.startingWidth = 250;
            this.startingHeight = 400;
            this.backXCompensation = 0;
            this.backYCompensation = 0;
            this.store.showModal = false;
        },





        moveToCenter() {
            this.move = true;
            const rect = this.$refs.playground.getBoundingClientRect();
            const startX = rect.left;
            const startY = rect.top;

            // Imposta le variabili CSS personalizzate per passare le coordinate iniziali all'animazione
            this.$refs.playground.style.setProperty('--startX', `${startX}px`);
            this.$refs.playground.style.setProperty('--startY', `${startY}px`);
            this.$refs.playground.style.setProperty('--startY', ``);
            this.$refs.playground.style.setProperty('', `${startY}px`);
        },
        expandDetailsX() {
            const inerval = setInterval(() => {
                if (this.startingWidth < this.endingWidth) {
                    this.startingWidth += 10;
                    this.backXCompensation = -(this.startingWidth - 250) / 2;
                } else {
                    clearInterval(inerval);
                }
            }, 10)
        },
        expandDetailsY() {
            const inerval = setInterval(() => {
                if (this.startingHeight < this.endingHeight) {
                    this.startingHeight += 10;
                    this.backYCompensation = -(this.startingHeight - 350) / 2;

                } else {
                    clearInterval(inerval);
                }
            }, 10)
        },

    },
    created() {
        this.stars.fullStars = Math.floor(this.info.vote_average / 2);
        this.stars.halfStars = Math.ceil(this.info.vote_average / 2) - this.stars.fullStars;
        this.stars.emptyStars = 5 - this.stars.fullStars - this.stars.halfStars;
        console.log(this.info);

        axios.get(`https://flagcdn.com/16x12/${this.info.language}.png`)
            .then(() => {
                this.hasFlag = true;
                this.flagUrl = `https://flagcdn.com/16x12/${this.info.language}.png`;
            })
            .catch((error) => {
                console.log('there is no flag');
            })
    }
}
</script>


<style lang="scss" scoped>
@use '../../assets/styles/partials/variables' as *;

.film-card {
    width: 250px;
    height: 400px;

    .card-playground {
        width: 250px;
        height: 400px;
        transform-style: preserve-3d;
        position: relative;

        .front,
        .back {
            width: 100%;
            height: 100%;
            position: absolute;
            backface-visibility: hidden;
            font-size: 1rem;
            will-change: transform;
        }

        .front {
            cursor: pointer;
        }

        .no-image {
            cursor: pointer;
            background-image: url('/images/place_holder_img.jpg');
        }


        .back {
            background-size: cover;
            background-position: center;

            .filter {
                background: linear-gradient(0deg, rgba(0, 0, 0, 1) 23%, rgba(0, 0, 0, 0) 100%);

                h2 {
                    color: $main-red-color;
                }

                .star-container {
                    width: 20px;
                    aspect-ratio: 1/1;
                }

                .flag-container {
                    width: 32px;
                }
            }

            .full {
                background: black;
            }
        }
    }
}

.flipped {
    position: absolute !important;
    z-index: 100;
}

.inactive {
    position: static !important;
}

.back {
    transform: rotateY(180deg); // Inizialmente mostra la parte posteriore della carta
}



@keyframes moveToCenterAnimation {
    0% {
        transform: translate(0, 0);
    }

    100% {
        transform: translate(calc(50vw - 50% - var(--startX)), calc(50vh - 50% - var(--startY)));
    }
}

.move-to-center-animation {
    animation-name: moveToCenterAnimation;
    animation-duration: 1s;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;
}

@keyframes rotateCard {
    0% {
        transform: rotateY(0deg);
        /* Angolo di rotazione iniziale */
    }

    100% {
        transform: rotateY(180deg);
        /* Angolo di rotazione finale */
    }
}

.rotate-card-animation {
    animation-name: rotateCard;
    animation-duration: 1s;
    /* Durata dell'animazione */
    animation-timing-function: ease;
    /* Tipo di timing */
    animation-fill-mode: forwards;
    /* Mantieni l'ultimo frame */
}
</style>