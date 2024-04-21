<template>
    <div class="modal-background">
    </div>
</template>

<script>
export default {
    name: 'ModalBackgroundComponent',
}
</script>

<style lang="scss" scoped>
.modal-background {
    position: fixed;
    top: 0%;
    z-index: 1000;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
}
</style>