<template>
    <!-- BUTTON TEMPLATE. SLOT CAN BE COMPLETED WITH AN ANCHOR TAG. ANCHOR TAG NEEDS A TEXT COLOR -->
    <button class="btn rounded-5 av-btn">

        <slot></slot>

    </button>
</template>


<script>

export default {
    name: 'avBtn',
}

</script>


<style lang="scss" scoped>
@use '../assets/scss/partials/avBtn.scss';
</style>