<template>
    <div class="film-card">
        <div class="card-playground" ref="playground" :class="isFlipped ? 'flipped' : 'inactive'"
            :style="{ transform: `rotateY(${rotDeg}deg)`, left: `${initialX}px`, top: `calc(${initialY}px)` }"
            @click="!isFlipped ? openDetails($event.target) : ''">
            <div class="front img-container">
                <img v-if="info.image" class="img-fluid h-100" :src="info.image" :alt="info.title">
                <div v-else class="no-image h-100">
                    <h6 class="text-white text-center p-2 overflow-hidden">{{ info.title }}</h6>
                </div>
            </div>
            <div class="back border-dark border rounded-2 overflow-hidden shadow-white"
                :class="{ 'opacity-0': !isFlipped }"
                :style="`width: ${startingWidth}px; height: ${startingHeight}px; left:${backXCompensation}px; top:${backYCompensation}px; background-image: url('${info.imageLarge}')`">
                <div class="filter h-100 d-flex justify-content-center justify-content-md-start "
                    :class="{ 'full': !info.imageLarge }" :style="`opacity: ${opacity};`">
                    <div class="information d-flex align-self-end w-75  flex-column align-items-start text-white p-3">
                        <h2 class="mine-text-shadow display-6 display-md-4 fw-bold ">{{ info.title }}</h2>
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
                        <p class="description">{{ info.description }}</p>
                        <p>Release date: {{ info.release_date }}</p>
                        <div v-if="flagUrl" class="flag-container mb-3">
                            <img class="img-fluid w-100" :src="flagUrl" :alt="info.language">
                        </div>
                        <h6 class="mb-3" v-else>Language: {{ info.language }}</h6>
                        <div class="d-flex justify-content-center align-items-center align-self-center ">
                            <i class="play mine-text-white-shadow text-success fa-regular fa-circle-play px-5 hover-size"
                                role="button"></i>
                            <i class="play mine-text-white-shadow text-danger fa-solid hover-size fa-xmark"
                                role="button" :disabled="opacity < 1" @click.stop="closeDetails()"></i>
                        </div>
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
    name: 'CardComponent',
    props: ['info'],
    data() {
        return {
            store,
            storeMethods,
            isFlipped: false,
            backgroundImage: `url('${this.info.imageLarge}')`,
            rotDeg: 0,
            opacity: 0,
            initialX: null,
            initialY: null,
            startingWidth: 125,
            startingHeight: 200,
            endingWidth: 900,
            endingHeight: 600,
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
            this.handleWiewprth();
            this.handleDegAnimation(0, 180, 1, '+');
            this.expandDetailsX();
            this.expandDetailsY();
            this.moveToCenter();
            setTimeout(() => {
                const interval = setInterval(() => {
                    if (this.opacity > 1) {
                        clearInterval(interval);
                    } else {
                        this.opacity += 0.05;
                    }
                }, 50);
            }, 700);

        },
        closeDetails() {
            this.handleDegAnimation(180, 0, 1, '-');
            this.isFlipped = false;
            this.startingWidth = 125; //!
            this.startingHeight = 200; //!
            this.endingWidth = 900;
            this.endingHeight = 600;
            this.backXCompensation = 0;
            this.backYCompensation = 0;
            this.store.showModal = false;
            this.opacity = 0;
        },



        handleDegAnimation(StartingValue, EndingValue, milliseconds, operation) {
            if (operation === '+') {
                const interval = setInterval(() => {
                    if (StartingValue >= EndingValue) {
                        clearInterval(interval);
                    } else {
                        StartingValue++;
                        this.rotDeg = StartingValue;
                    }
                }, milliseconds);
            } else {
                const interval = setInterval(() => {
                    if (StartingValue <= EndingValue) {
                        clearInterval(interval);
                    } else {
                        StartingValue = StartingValue - 180;
                        this.rotDeg = StartingValue;
                    }
                }, milliseconds);
            }
        },

        /**
         * Funzione che si occupa di spostare l'elemento in posizione centrale
         */
        moveToCenter() {
            //ottengo il centro dello schermo a cui vado a sotrrarre metà dell'altezza della carta
            let playground = this.$refs.playground;
            const centerX = window.innerWidth / 2 - (125 / 2); //!
            const centerY = window.innerHeight / 2 - (200 / 2); //!
            //posizione iniziale del playground (che andremo a modificare ogni interval finchè non si troverà in posizione centrale)
            const rect = playground.getBoundingClientRect();
            this.initialX = rect.left;
            this.initialY = rect.top;
            const interval = setInterval(() => {
                //calcolo le differenze tra la posizione desiderata (i centri dello schermo) e quella corrente
                const diffX = centerX - this.initialX;
                const diffY = centerY - this.initialY;
                // Sposta l'elemento gradualmente verso il centro
                this.initialX = this.initialX + diffX * 0.1
                this.initialY = this.initialY + diffY * 0.1
                // Se l'elemento è abbastanza vicino al centro, interrompi l'animazione
                const distance = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
                if (distance < 1) { // Utilizziamo un valore di tolleranza di 1 pixel
                    clearInterval(interval);
                }
            }, 16);
        },

        expandDetailsX() {
            const inerval = setInterval(() => {
                if (this.startingWidth < this.endingWidth) {
                    this.startingWidth += 10;
                    this.backXCompensation = -(this.startingWidth - 125) / 2; //!
                } else {
                    clearInterval(inerval);
                }
            }, 10)
        },
        expandDetailsY() {
            const inerval = setInterval(() => {
                if (this.startingHeight < this.endingHeight) {
                    this.startingHeight += 10;
                    this.backYCompensation = -(this.startingHeight - 200) / 2; //!

                } else {
                    clearInterval(inerval);
                }
            }, 10)
        },

        handleWiewprth() {
            if (window.innerWidth < 760) {
                this.endingWidth = 550;
                this.endingHeight = 600
            }
            else if (window.innerWidth < 850) {
                this.endingWidth = 700;
                this.endingHeight = 650
            } else if (window.innerWidth < 1050) {
                this.endingWidth = 750;
                this.endingHeight = 600
            }
        },

    },
    created() {
        this.stars.fullStars = Math.floor(this.info.vote_average / 2);
        this.stars.halfStars = Math.ceil(this.info.vote_average / 2) - this.stars.fullStars;
        this.stars.emptyStars = 5 - this.stars.fullStars - this.stars.halfStars;
        axios.get(`https://flagcdn.com/80x60/${this.info.language_flag}.png`)
            .then(() => {
                this.hasFlag = true;
                this.flagUrl = `https://flagcdn.com/80x60/${this.info.language_flag}.png`;
            })
            .catch((error) => {
                console.log('there is no flag for', this.info.language_flag);
            })
    },


}
</script>


<style lang="scss" scoped>
@use '../../assets/styles/partials/variables' as *;

.film-card {
    width: 125px; //!
    height: 200px; //!
    box-shadow: rgba(255, 255, 255, 0.4) 0px 5px, rgba(230, 230, 230, 0.3) 0px 10px, rgba(204, 204, 204, 0.2) 0px 15px, rgba(179, 179, 179, 0.1) 0px 20px, rgba(153, 153, 153, 0.05) 0px 25px;

    &:hover {
        box-shadow: rgba(255, 0, 0, 0.4) 0px 5px, rgba(255, 51, 51, 0.3) 0px 10px, rgba(255, 102, 102, 0.2) 0px 15px, rgba(255, 153, 153, 0.1) 0px 20px, rgba(255, 204, 204, 0.05) 0px 25px;
    }


    .card-playground {
        width: 125px; //!
        height: 200px; //!
        transform-style: preserve-3d;
        z-index: 1000;
        position: relative;

        &:hover .front {
            transform: translatey(10px);
            transition: transform 0.2s ease-in;
        }

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

        .back {
            transform: rotateY(180deg); // Inizialmente mostra la parte posteriore della carta
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

                .description {
                    max-height: 200px;
                    overflow: auto;
                }

                .flag-container {
                    width: 32px;
                }

                .play {
                    font-size: 4rem;
                    box-shadow: none;
                }
            }

            .full {
                background: black;
                opacity: 1 !important
            }
        }
    }
}

.flipped {
    position: fixed !important;
    z-index: 100;
}

.inactive {
    position: static !important;
}
</style>