<script>

import { store } from './store.js';

import avHeader from './components/avHeader.vue';

import avMain from './components/avMain.vue';

export default {

    components: {
        avHeader,
        avMain
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

    <avMain />
</template>

<style lang="scss" scoped>
@use './assets/scss/style.scss';
</style>
