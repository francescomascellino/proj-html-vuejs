<script>

import avNav from './avNav.vue';

export default {
    name: 'avHeader',

    components: {
        avNav
    }
}

</script>

<template>
    <div class="av-hero">

        <div class="av-ctaBook">

            <div class="container">

                <div class="row justify-content-center align-content-center">

                    <div class="col d-flex justify-content-between">
                        <span>We have a 95% Successful Pass Rate!</span>
                        <span><i class="fa-solid fa-phone-flip me-2"></i> Give us a call to book your tuition!
                            1-800-555-555</span>
                    </div>

                </div>

            </div>

        </div>

        <avNav />

    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/avHeader.scss';
</style>

