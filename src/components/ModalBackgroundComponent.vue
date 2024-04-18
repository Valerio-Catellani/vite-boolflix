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
    top: 70px;
    z-index: 5;
    left: 0;
    width: 100vw;
    height: calc(100vh - 70px);
    background-color: rgba(0, 0, 0, 0.5);
}
</style>