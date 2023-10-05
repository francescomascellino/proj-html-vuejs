<script>

// IMPORT GLOBAL STATE
import { store } from './store.js';

// IMPORT COMPONENTS
import avHeader from './components/avHeader.vue';

import avMain from './components/avMain.vue';

import avFooter from './components/avFooter.vue';

export default {

    // COMPONENTS DECLARATION
    components: {
        avHeader,
        avMain,
        avFooter
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

    <avFooter :contacts="store.footerContacts" :courses="store.footerCourses" />
</template>

<style lang="scss" scoped>
@use './assets/scss/style.scss';
</style>
