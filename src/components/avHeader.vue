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
    <header>
        <div class="av-hero position-relative">

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

            <div class="container av-heroTxtCont">
                <div class="row">
                    <div class="col-12">
                        <h1>Drive with Avada</h1>
                        <h3>We offer the finest driving tuition money can buy</h3>
                    </div>

                </div>

            </div>

            <div class="col-1 av-sideShortcuts position-absolute">
                <div class="demos">

                    <div class="outer">
                    </div>

                    <div class="middle"></div>

                    <div class="icon">
                        <i class="fa-brands fa-atlassian fa-flip-horizontal"></i>
                    </div>

                    <span>Demos</span>

                </div>
                <div class="discount">
                    <h4><span class="currency">$</span>39</h4>
                    <span>On Sale</span>
                </div>
            </div>

        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/avHeader.scss';
</style>

