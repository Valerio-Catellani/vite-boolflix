<template>
    <footer class="py-3 shadow-white">
        <div class="d-flex flex-column align-items-center container">
            <div class="img-container pb-2">
                <img class="img-fluid" src="/images/Boolflix_logo.jpg" alt="Boolflix logo">
            </div>
            <div class="text-center">
                <ul class="d-flex list-unstyled">
                    <li v-for="(link, name) in links" :key="name" class="me-3">
                        <a class="text-decoration-none" :href="link">{{ name }}</a>
                    </li>
                    <li class="me-3">{{ information }}</li>
                </ul>
            </div>
        </div>

    </footer>
</template>

<script>
export default {
    name: 'FooterComponent',
    data() {
        return {
            links: {
                'Terms and Privacy Notice': '#',
                'Send us feedback': '#',
                'Help Center': '#',
                'About us': '#',
                'Cookies Notice': '#',
            },
            information: '© 2024-?, Boolean, Inc. or its affiliates'
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/partials/variables' as *;

footer {
    background-color: $header-background-color;

    .img-container {
        width: 100px;
    }

    li,
    a {
        color: $user-bar-active;

        a:hover {
            color: $main-red-color;
        }
    }

}
</style>