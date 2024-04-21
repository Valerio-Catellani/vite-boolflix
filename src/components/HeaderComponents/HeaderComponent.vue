<template>
    <header class="shadow-white" @click="console.log(openMenu)">
        <div class="fixed-header container d-flex rounded-4 align-items-center justify-content-between shadow"
            :class="{ 'window-movement': checkMovement, 'rounded-bottom-0': openMenu !== '' }">
            <div class="img-container py-1">
                <img class="img-fluid" src="/images/Boolflix_logo.jpg" alt="Boolflix logo">
            </div>
            <div class="user-account gap-3 d-flex fs-3 align-self-stretch align-items-end">
                <div class="icon-container" v-if="openMenu !== 'search'" role="button" @click="openMenu = 'search'">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <div class="icon-container rounded-top-2" v-if="openMenu === 'search'" role="button"
                    @click="openMenu = ''" :class="{ 'active-color': openMenu === 'search' }">
                    <i class="fa-solid fa-xmark"></i>
                </div>
                <div v-if="openMenu !== 'login'" class="icon-container" @click="openMenu = 'login'">
                    <i class="fa-solid fa-user" role="button"></i>
                </div>
                <div class="icon-container rounded-top-2" v-else-if="openMenu === 'login'" role="button"
                    :class="{ 'active-color': openMenu === 'login' }" @click="openMenu = ''">
                    <i class="fa-solid fa-xmark"></i>
                </div>
                <div v-if="openMenu === 'search'"
                    class="search-bar-input bar-input active-color rounded-bottom-4 position-absolute container">
                    <form class="d-flex p-3" role="search">
                        <input class="form-control me-4 bg-dark-subtle" type="search" placeholder="Search"
                            aria-label="Search" v-model="userSearch">
                        <button class="btn btn-outline-danger btn-mine text-white hover-size" type="submit"
                            :disabled="!userSearch"
                            @click.prevent="storeMethods.searchMedia(userSearch, ['movies', 'series'])"
                            @keyup.enter.prevent="storeMethods.searchMedia(userSearch, ['movies', 'series'])">Search</button>
                    </form>
                </div>
                <div v-if="openMenu === 'login'"
                    class="bar-input active-color rounded-bottom-4 position-absolute container d-flex p-0">
                    <div class="login-container w-50 border-end border-dark border-2 p-3 m-1">
                        <form class="fs-6 d-flex flex-column">
                            <div class="mb-1">
                                <label for="InputLoginEmail" class="form-label">Email
                                    address</label>
                                <input type="email" class="form-control" id="InputLoginEmail" placeholder="Email">
                            </div>
                            <div class="mb-2">
                                <label for="InputLoginPassword" class="form-label">Password</label>
                                <input type="password" class="form-control" id="InputLoginPassword"
                                    placeholder="Password">
                            </div>
                            <div class="mb-0 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit"
                                class="btn btn-mine align-self-center text-white hover-size fs-5">Login</button>
                        </form>
                    </div>
                    <div class="singup-container w-50 p-3">
                        <form class="fs-6 d-flex flex-column h-100 ">
                            <div class="mb-1">
                                <label for="InputLoginEmail" class="form-label">Email
                                    address</label>
                                <input type="email" class="form-control" id="InputLoginEmail" placeholder="Email">
                            </div>
                            <div class="mb-2">
                                <label for="InputLoginPassword" class="form-label">Password</label>
                                <input type="password" class="form-control" id="InputLoginPassword"
                                    placeholder="Password">
                            </div>
                            <button type="submit"
                                class="btn btn-dark align-self-center text-white hover-size fs-5 mt-auto">Sign
                                up</button>
                        </form>
                    </div>
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
            openMenu: '',
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

            .bar-input {
                top: 100%;
                left: 0%;
                background-color: inherit;
            }

            .search-bar-input {
                height: 70px;
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