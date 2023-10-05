<template>
    <footer>

        <!-- CONTACTS -->
        <section id="av-contacts">

            <div class="container d-flex align-items-lg-center">

                <div class="row align-items-start justify-content-between">

                    <!-- AVADA PROMISE -->
                    <div class="col-3">
                        <img src="../assets/img/logos/avada-drivers-logo-1x.png" alt="Avada Driving School"
                            class="mb-3 av-ftrLogo">

                        <p>Avadra Driving School is the right choice for experienced drivers looking for a refresher course,
                            or the brand new driver wanting to pass the first time</p>

                    </div>

                    <!-- CONTACTS -->
                    <div class="col-2 p-0">

                        <h5 class="mb-3">CONTACT DETAILS</h5>

                        <div class="d-flex mb-3 av-contactWrapper" v-for="contact in contacts">

                            <div class="ms-1 me-3 av-contactIco">
                                <i :class="contact.icon"></i>
                            </div>

                            <div class="av-contact">

                                <p v-if="contact.text">{{ contact.text }}</p>

                                <a v-if="contact.email" :href="'mailto:{{contact.email}}'">{{ contact.email }}</a>

                                <a v-if="contact.link" :href="contact.link.url">{{ contact.link.name }}</a>

                            </div>
                        </div>

                    </div>

                    <!-- COURSES -->
                    <div class="col-2 p-0">
                        <h5 class="mb-3">COURSES</h5>

                        <div class="d-flex mb-3 av-coursesLinktWrapper" v-for="course in courses">

                            <div class="ms-1 me-3 av-courseLinktIco">
                                <i class="fa-regular fa-circle-right"></i>
                            </div>

                            <div class="av-courseLink">
                                <a :href="course.link">{{ course.name }}</a>
                            </div>
                        </div>

                    </div>

                    <!-- OFFERS -->
                    <div class="col-3 text-center av-offers">

                        <a href="#av-rates">
                            <img src="../assets/img/labels/adGrid.png" alt="ad" class="mb-4 av-adLabels">
                        </a>

                        <avBtn><a href="#av-book">book now</a></avBtn>
                    </div>

                </div>

            </div>
        </section>

        <!-- LEGAL -->
        <section id="av-legal" class="av-ftrBottom">

            <div class="container">

                <!-- COPYRIGHT -->
                <div class="row align-items-center">
                    <div class="col d-flex flex-row justify-content-between">
                        <p>© Copyright 2012 - 2023 | Avada Theme by <a href="#">ThemeFusion</a> | All Rights Reserved |
                            Powered by
                            <a href="#">WordPress</a> WordPress
                        </p>

                        <!-- SOCIAL ICONS -->
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

// IMPORT COMPONENTS
import avBtn from './avBtn.vue';

export default {

    name: 'avFooter',

    // COMPONENTS DECLARATION
    components: {
        avBtn
    },

    // PROPS DECLARATION
    props: {

        contacts: "Object",
        courses: 'Objects'

    },

}


</script>

<style lang="scss" scoped>
@use '../assets/scss/partials/avFooter.scss';
</style>