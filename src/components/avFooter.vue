<template>
    <footer>
        <section id="av-contacts">

            <div class="container d-flex align-items-lg-center">

                <div class="row align-items-start justify-content-between">

                    <div class="col-3">
                        <img src="../assets/img/logos/avada-drivers-logo-1x.png" alt="Avada Driving School"
                            class="mb-3 av-ftrLogo">

                        <p>Avadra Driving School is the right choice for experienced drivers looking for a refresher course,
                            or the brand new driver wanting to pass the first time</p>

                    </div>

                    <div class="col-2 p-0">

                        <h5 class="mb-3">CONTACT DETAILS</h5>

                        <div class="d-flex mb-3 av-contactWrapper">
                            <div class="ms-1 me-3 av-contactIco"><i class="fa-solid fa-house-chimney"></i></div>
                            <div class="av-contact">
                                <p>12345, Noth Main Street, New York, NY 555555</p>
                            </div>
                        </div>

                        <div class="d-flex mb-3 av-contactWrapper">
                            <div class="ms-1 me-3 av-contactIco"><i class="fa-solid fa-house-chimney"></i></div>
                            <div class="av-contact">
                                <p>12345, Noth Main Street</p>
                            </div>
                        </div>

                        <div class="d-flex mb-3 av-contactWrapper">
                            <div class="ms-1 me-3 av-contactIco"><i class="fa-solid fa-house-chimney"></i></div>
                            <div class="av-contact">
                                <p>12345, Noth Main Street</p>
                            </div>
                        </div>

                        <div class="d-flex mb-3 av-contactWrapper">
                            <div class="ms-1 me-3 av-contactIco"><i class="fa-solid fa-house-chimney"></i></div>
                            <div class="av-contact">
                                <p>12345, Noth Main Street</p>
                            </div>
                        </div>

                    </div>

                    <div class="col-2 p-0">
                        <h5 class="mb-3">COURSES</h5>

                        <div class="d-flex mb-3 av-coursesLinktWrapper">
                            <div class="ms-1 me-3 av-courseLinktIco"><i class="fa-regular fa-circle-right"></i></div>
                            <div class="av-courseLink">
                                <p>Pass Plus</p>
                            </div>
                        </div>

                        <div class="d-flex mb-3 av-coursesLinktWrapper">
                            <div class="ms-1 me-3 av-courseLinktIco"><i class="fa-regular fa-circle-right"></i></div>
                            <div class="av-courseLink">
                                <p>Pass Plus</p>
                            </div>
                        </div>

                        <div class="d-flex mb-3 av-coursesLinktWrapper">
                            <div class="ms-1 me-3 av-courseLinktIco"><i class="fa-regular fa-circle-right"></i></div>
                            <div class="av-courseLink">
                                <p>Pass Plus</p>
                            </div>
                        </div>

                        <div class="d-flex mb-3 av-coursesLinktWrapper">
                            <div class="ms-1 me-3 av-courseLinktIco"><i class="fa-regular fa-circle-right"></i></div>
                            <div class="av-courseLink">
                                <p>Pass Plus</p>
                            </div>
                        </div>

                    </div>

                    <div class="col-3 text-center av-offers">
                        <img src="../assets/img/labels/adGrid.png" alt="ad" class="mb-4 av-adLabels">
                        <avBtn><a href="#av-book">book now</a></avBtn>
                    </div>

                </div>

            </div>
        </section>

        <!-- LEGAL -->
        <section id="av-legal" class="av-ftrBottom">

            <div class="container">

                <div class="row align-items-center">
                    <div class="col d-flex flex-row justify-content-between">
                        <p>© Copyright 2012 - 2023 | Avada Theme by <a href="#">ThemeFusion</a> | All Rights Reserved |
                            Powered by
                            <a href="#">WordPress</a> WordPress
                        </p>

                        <div class="av-ftrSocial">
                            <a class="px-2" href=""><i class="fa-brands fa-facebook-f"></i></a>

                            <a class="px-2" href=""><i class="fa-brands fa-twitter"></i></a>

                            <a class="px-2" href=""><i class="fa-brands fa-youtube"></i></a>

                            <a class="px-2" href=""><i class="fa-brands fa-instagram"></i></a>
                        </div>

                    </div>
                </div>

            </div>

        </section>


    </footer>
</template>

<script>

import avBtn from './avBtn.vue';

export default {

    name: 'avFooter',

    components: {
        avBtn
    },

    methods: {
        getImg(url) {
            return new URL(`${url}`, import.meta.url).href
        }
    }

}
</script>

<style lang="scss" scoped>
@use '../assets/scss/partials/avFooter.scss';
</style>