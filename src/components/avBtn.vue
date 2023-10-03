<template>
    <a href="#" class="btn rounded-5 av-btn">

        <slot></slot>

    </a>
</template>


<script>

export default {
    name: 'avBtn',

}

</script>


<style lang="scss" scoped>
@use '../assets/scss/partials/avBtn.scss';
</style>