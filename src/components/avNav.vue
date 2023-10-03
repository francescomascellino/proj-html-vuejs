<template>
    <nav class="navbar navbar-expand-lg av-nav">

        <div class="container">

            <a class="navbar-brand flex" href="#"><img src="../assets/img/logos/avada-drivers-logo-1x.png"
                    alt="avada drivers logo"></a>

            <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                aria-label="Toggle navigation">

                <span class="navbar-toggler-icon"></span>

            </button>

            <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">

                <div class="navbar-nav">

                    <a class="nav-link text-uppercase fw-bold av-active" aria-current="page" href="#">home</a>

                    <a class="nav-link text-uppercase fw-bold" :href="link.path" v-for="link in navLinks">
                        {{ link.text }}</a>

                    <avBtn>book now</avBtn>

                </div>

            </div>

        </div>

    </nav>
</template>

<script>

import avBtn from './avBtn.vue';

import { Dropdown } from 'bootstrap';

export default {
    name: 'avNav',
    components: {
        avBtn
    },

    data() {
        return {
            Dropdown,

            navLinks: [
                {
                    text: 'home',
                    path: '#'
                },

                {
                    text: 'about',
                    path: '#'
                },

                {
                    text: 'prices',
                    path: '#'
                },

                {
                    text: 'courses',
                    path: '#'
                },

                {
                    text: 'locations',
                    path: '#'
                },

                {
                    text: 'blog',
                    path: '#'
                },
            ]

        }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/scss/partials/avNav.scss';
</style>