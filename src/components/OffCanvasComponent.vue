<template>
    <div id="offCanvas" class="bg-light position-fixed bottom-0 w-100 d-none" :class="{ 'open': isOpen }">
        TEST
    </div>
</template>

<script>
export default {
    name: 'OffCanvasComponent',
    data() {
        return {
            isOpen: false,
        }
    },
    created() {
        this.isOpen = true;
    }

}
</script>

<style lang="scss" scoped>
#offCanvas {
    z-index: 50;
    height: 10%;
    transition: height 0.5s ease;
}

.open {
    height: 90% !important;
}
</style>