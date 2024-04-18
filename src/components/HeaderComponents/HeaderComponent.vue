<template>
    <header class="shadow-white">
        <div class="container d-flex align-items-center justify-content-between py-1">
            <div class="img-container">
                <img class="img-fluid" src="/images/Boolflix_logo.jpg" alt="Boolflix logo">
            </div>
            <form class="d-flex" role="search">
                <input class="form-control me-2 bg-dark-subtle" type="search" placeholder="Search" aria-label="Search"
                    v-model="userSearch">
                <button class="btn btn-outline-danger text-dark" type="submit" :disabled="!userSearch"
                    @click.prevent="storeMethods.searchMedia(userSearch, ['movies', 'series'])">Search</button>
            </form>
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
            userSearch: ''
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/partials/variables' as *;

header {
    position: fixed;
    top: 0;
    width: 100vw;
    left: 0;
    height: 70px;
    background-color: $header-background-color;
    z-index: 1000;

    .img-container {
        width: 7%;
        min-width: 90px;
    }

    button {
        background-color: $main-red-color !important;

        &:hover {
            color: $contrast-color !important;
        }
    }
}
</style>