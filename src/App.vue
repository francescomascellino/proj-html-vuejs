<script>

import { store } from './store.js';

import avHeader from './components/avHeader.vue';

export default {

    components: {
        avHeader
    },

    data() {
        return {

            store,

        }
    },


}

</script>

<template>
    <avHeader />
</template>

<style lang="scss" scoped>
@use './assets/scss/style.scss';

@use './assets/scss/partials/avHeader.scss';
</style>
