<template>
    <div class="load splash-page vw-100 vh-100 text-white" v-if="loading"></div>
    <div v-if="opacity > 0" class="splash-page vw-100 vh-100" :style="{ opacity: opacity }">
        <div class='glowing-btn' :style="{ transform: 'scale(' + dimension + ')' }">
            <span class='glowing-txt'>B<span class='faulty-letter'>OO</span>LFL<span
                    class='faulty-letter'>I</span>X</span>
        </div>
    </div>
</template>

<script>
import { store } from '../store';
export default {
    name: 'SplashPageComponent',
    data() {
        return {
            store,
            dimension: 1,
            loading: true,
            active: false,
            opacity: 1
        }
    },
    methods: {
        handleAnimation() {
            setTimeout(() => { this.active = true }, 2000) //! 2 seconds;
            setTimeout(() => { this.increase() }, 2500) //! 1 + 2 seconds;
            setTimeout(() => {
                this.opacityReduce()
                this.store.showModal = false
            }, 2500) //! 1 + 2 + 3 seconds;
        },
        increase() {
            const intervall = setInterval(() => {
                if (this.dimension > 10) {
                    clearInterval(intervall)
                } else {
                    this.dimension += 0.058
                }
            }, 5)
        },
        opacityReduce() { //! 1 seconds
            const interval = setInterval(() => {
                if (this.opacity > 0) {
                    this.opacity -= 0.05;
                } else {
                    clearInterval(interval);
                }
            }, 20);
        }
    },

    created() {
        this.store.showModal = true
        setTimeout(() => {
            this.loading = false
            this.handleAnimation()
        }, 1000)
    }
}
</script>



<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.load {
    z-index: 10000 !important;
}

.splash-page {
    z-index: 1500;
    position: fixed;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, );
    height: 100%;
    width: 100%;
    overflow: hidden;
}

.splash-page {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: black;
}

.glowing-btn {
    position: relative;
    color: $main-red-color;
    cursor: pointer;
    padding: 0.35em 1em;
    border: 0.15em solid $main-red-color;
    border-radius: 0.45em;
    background: none;
    perspective: 2em;
    font-family: $fontSplash;
    font-size: 2em;
    font-weight: 900;
    letter-spacing: 1em;

    -webkit-box-shadow: inset 0px 0px 0.5em 0px $main-red-color,
        0px 0px 0.5em 0px $main-red-color;
    -moz-box-shadow: inset 0px 0px 0.5em 0px $main-red-color,
        0px 0px 0.5em 0px $main-red-color;
    box-shadow: inset 0px 0px 0.5em 0px $main-red-color,
        0px 0px 0.5em 0px $main-red-color;
    animation: border-flicker 2s linear infinite;
}

.glowing-txt {
    float: left;
    margin-right: -0.8em;
    -webkit-text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3),
        0 0 0.45em $main-red-color;
    -moz-text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3),
        0 0 0.45em $main-red-color;
    text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em $main-red-color;
    animation: text-flicker 3s linear infinite;
}

.faulty-letter {
    opacity: 0.5;
    animation: faulty-flicker 2s linear infinite;
}

.glowing-btn::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.7;
    filter: blur(1em);
    transform: translateY(120%) rotateX(95deg) scale(1, 0.35);
    background: $main-red-color;
    pointer-events: none;
}

.glowing-btn::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    z-index: -1;
    background-color: $main-red-color;
    box-shadow: 0 0 2em 0.2em $main-red-color;
    transition: opacity 100ms linear;
}

.glowing-btn-hover {
    color: rgba(0, 0, 0, 0.8);
    text-shadow: none;
    animation: none;
}

.glowing-btn-hover .glowing-txt {
    animation: none;
}

.glowing-btn-hover .faulty-letter {
    animation: none;
    text-shadow: none;
    opacity: 1;
}

.glowing-btn-hover:before {
    filter: blur(1.5em);
    opacity: 1;
}

.glowing-btn-hover:after {
    opacity: 1;
}

@keyframes faulty-flicker {
    0% {
        opacity: 0.1;
    }

    2% {
        opacity: 0.1;
    }

    4% {
        opacity: 0.5;
    }

    19% {
        opacity: 0.5;
    }

    21% {
        opacity: 0.1;
    }

    23% {
        opacity: 1;
    }

    80% {
        opacity: 0.5;
    }

    83% {
        opacity: 0.4;
    }

    87% {
        opacity: 1;
    }
}

@keyframes text-flicker {
    0% {
        opacity: 0.1;
    }

    2% {
        opacity: 1;
    }

    8% {
        opacity: 0.1;
    }

    9% {
        opacity: 1;
    }

    12% {
        opacity: 0.1;
    }

    20% {
        opacity: 1;
    }

    25% {
        opacity: 0.3;
    }

    30% {
        opacity: 1;
    }

    70% {
        opacity: 0.7;
    }

    72% {
        opacity: 0.2;
    }

    77% {
        opacity: 0.9;
    }

    100% {
        opacity: 0.9;
    }
}

@keyframes border-flicker {
    0% {
        opacity: 0.1;
    }

    2% {
        opacity: 1;
    }

    4% {
        opacity: 0.1;
    }

    8% {
        opacity: 1;
    }

    70% {
        opacity: 0.7;
    }

    100% {
        opacity: 1;
    }
}

@media only screen and (max-width: 600px) {
    .glowing-btn {
        font-size: 1em;
    }
}
</style>