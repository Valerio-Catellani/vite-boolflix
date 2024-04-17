<template>
    <div class="film-card">
        <div class="card-playground" :class="isFlipped ? 'flipped' : 'inactive'"
            :style="{ transform: `rotateY(${rotDeg}deg)`, left: `${finalX}px`, top: `${finalY}px` }"
            @click="!isFlipped ? openDetails($event.target) : ''">
            <div class="front img-container">
                <img class="img-fluid h-100" :src="info.image" :alt="info.title">
            </div>
            <div class="back border-dark border rounded-2" :class="!isFlipped ? 'opacity-0' : ''"
                :style="`width: ${startingWidth}px; height: ${startingHeight}px; left:${backXCompensation}px; top:${backYCompensation}px; background-image: url('${info.imageLarge}')`">
                <div class="filter h-100 d-flex" :class="info.imageLarge != null ? '' : 'full'">
                    <div class="d-flex align-self-end w-75 flex-column align-items-start text-white p-3">
                        <h2 class="mine-text-shadow display-4 fw-bold ">{{ info.title }}</h2>
                        <div class="d-flex gap-1 align-items-center mb-3">
                            <h6 class="mb-0">Score ({{ info.vote_count }} votes): </h6>
                            <div class="star-container d-flex" v-for="i in stars.fullStars" :key="i">
                                <img class="img-fluid w-100" src="/images/full-star.png" alt="star">
                            </div>
                            <div class="star-container d-flex" v-for="i in stars.halfStars" :key="i">
                                <img class="img-fluid w-100" src="/images/half-star.png" alt="star">
                            </div>
                        </div>
                        <p>{{ info.description }}</p>
                        <h6>Release date: {{ info.release_date }}</h6>
                        <button @click.stop="closeDetails()"> clikc</button>

                    </div>


                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardComponent',
    props: ['info'],
    data() {
        return {
            isFlipped: false,
            backgroundImage: `url('${this.info.imageLarge}')`,
            rotDeg: 0,
            initialX: null,
            initialY: null,
            actualX: null,
            actualY: null,
            finalX: null,
            finalY: null,
            bgIncrease: 1,
            startingWidth: 250,
            startingHeight: 400,
            endingWidth: 1000,
            endingHeight: 700,
            backXCompensation: 0,
            backYCompensation: 0,
            stars: {
                fullStars: 0,
                halfStars: 0
            }
        };
    },
    methods: {
        openDetails(el) {
            console.log(this.info.imageLarge);
            this.$emit('openDetails');
            this.isFlipped = true;
            this.handleDegAnimation(0, 180, 1, '+');
            this.expandDetailsX()
            this.expandDetailsY()
            this.moveToCenter(el);
            //this.handleDegAnimation(180, 0, 1, '-');
        },
        closeDetails() {
            this.handleDegAnimation(180, 0, 1, '-');
            this.$emit('openDetails');
            this.isFlipped = false;
            this.startingWidth = 250;
            this.startingHeight = 400;
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
        moveToCenter(element) {
            const centerX = window.innerWidth / 2 - (250 / 2);
            const centerY = window.innerHeight / 2 - (400 / 2);

            // Ottieni le coordinate dell'elemento rispetto alla finestra
            const rect = element.getBoundingClientRect();
            this.initialX = rect.left;
            this.initialY = rect.top;
            console.log(this.initialX, this.initialY);
            //posizione dell'immagine che è la stessa del contenutore
            this.actualX = this.initialX;
            this.actualY = this.initialY;


            const interval = setInterval(() => {
                // Calcola la differenza tra la posizione corrente e quella desiderata


                const diffX = centerX - this.actualX;
                const diffY = centerY - this.actualY;

                // Sposta l'elemento gradualmente verso il centro
                this.actualX = this.actualX + diffX * 0.1
                this.finalX = this.actualX;
                this.actualY = this.actualY + diffY * 0.1
                this.finalY = this.actualY;

                // Se l'elemento è abbastanza vicino al centro, interrompi l'animazione
                const distance = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));

                // Se l'elemento è abbastanza vicino al centro, interrompi l'animazione
                if (distance < 1) { // Utilizziamo un valore di tolleranza di 10 pixel
                    clearInterval(interval);
                }
            }, 16); // Utilizziamo un intervallo di circa 60fps per una transizione fluida
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
    }
}
</script>


<style lang="scss" scoped>
@use '../../assets/styles/partials/variables' as *;

.film-card {
    width: 250px;
    height: 400px;
    cursor: pointer;

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
            }

            .full {
                background: black;
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




.back {
    transform: rotateY(180deg); // Inizialmente mostra la parte posteriore della carta
}
</style>