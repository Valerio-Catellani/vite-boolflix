<template>
    <header class="shadow-white" @click="console.log(initialPositionWindow)">
        <div class="fixed-header container d-flex rounded-4 align-items-center justify-content-between shadow"
            :class="{ 'window-movement': checkMovement, 'rounded-bottom-0': openSearch }">
            <div class="img-container py-1">
                <img class="img-fluid" src="/images/Boolflix_logo.jpg" alt="Boolflix logo">
            </div>
            <div class="user-account gap-5 d-flex fs-3 align-self-stretch align-items-end">
                <div class="icon-container" v-if="!openSearch" role="button" @click="openSearch = true">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <div class="icon-container rounded-top-2" v-else role="button" @click="openSearch = false"
                    :class="{ 'active-color': openSearch }">
                    <i class="fa-solid fa-xmark"></i>
                </div>
                <div class="icon-container">
                    <i class="fa-solid fa-user" role="button"></i>
                </div>
                <div v-if="openSearch"
                    class="search-bar-input active-color rounded-bottom-4 position-absolute container">
                    <form class="d-flex p-3" role="search">
                        <input class="form-control me-4 bg-dark-subtle" type="search" placeholder="Search"
                            aria-label="Search" v-model="userSearch">
                        <button class="btn btn-outline-danger btn-mine text-dark hover-size" type="submit"
                            :disabled="!userSearch"
                            @click.prevent="storeMethods.searchMedia(userSearch, ['movies', 'series'])"
                            @keyup.enter.prevent="storeMethods.searchMedia(userSearch, ['movies', 'series'])">Search</button>
                    </form>

                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { store, storeMethods } from '../../store';

export default {
    name: 'HeaderComponent',
    data() {
        return {
            store,
            storeMethods,
            openSearch: false,
            userSearch: '',
            initialPositionWindow: 0
        }
    },
    computed: {
        checkMovement() {
            if (this.initialPositionWindow === 0) {
                return false
            } else {
                return true
            }
        }
    },
    created() {
        this.initialPositionWindow = window.scrollY;
        window.addEventListener('scroll', this.updateScrollPosition);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.updateScrollPosition);
    },
    methods: {
        updateScrollPosition() {
            this.initialPositionWindow = window.scrollY;
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/partials/variables' as *;

.active-color {
    background-color: $user-bar-active !important;
}

header {
    height: 75px;
    background-color: $header-background-color;

    .window-movement {
        transform: translate(-50%, 10px) !important;

        transition: transform 0.5s;
    }

    .fixed-header {

        position: fixed;
        top: 0;
        width: 100vw;
        left: 0;
        height: 80px;
        z-index: 1000;
        height: 75px;
        left: 50%;
        transform: translateX(-50%);
        transition: transform 0.5s;
        background-color: inherit;

        .img-container {
            width: 7%;
            min-width: 90px;
        }

        .user-account {
            color: $contrast-color;
            background-color: inherit;

            .icon-container {
                width: 40px;
                height: 57.5px;
                display: flex;
                justify-content: center;
                align-items: center;
                padding-bottom: calc((75px - 40px) / 2);
            }

            .search-bar-input {
                top: 100%;
                left: 0%;
                height: 70px;
                background-color: inherit;
            }
        }

        button {
            &:hover {
                color: $contrast-color !important;
            }
        }
    }
}
</style>