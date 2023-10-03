<script>

// import bootstrap from 'bootstrap';
import { Dropdown } from 'bootstrap';

export default {
    name: 'avHeader',
    data() {
        return {
            Dropdown,
        }
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
                        <span>[ICO] Give us a call to book your tuition! 1-800-555-555</span>
                    </div>

                </div>

            </div>

        </div>

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

                    <div class="navbar-nav d-flex">

                        <a class="nav-link text-uppercase fw-bold" aria-current="page" href="#">home</a>

                        <a class="nav-link text-uppercase fw-bold" href="#">about</a>

                        <a class="nav-link text-uppercase fw-bold" href="#">prices</a>

                        <a class="nav-link text-uppercase fw-bold" href="#">courses</a>

                        <a class="nav-link text-uppercase fw-bold" href="#">locations</a>

                        <a class="nav-link text-uppercase fw-bold" href="#">blog</a>

                        <button class="btn rounded-5 border border-1 text-uppercase fw-bold av-btn">book now</button>

                    </div>

                </div>

            </div>

        </nav>

    </div>

    <div class="av-ctaBook">

        <div class="container">

            <div class="row justify-content-center">

                <div class="col d-flex justify-content-between">
                    <span>We have a 95% Successful Pass Rate!</span>
                    <span>[ICO] Give us a call to book your tuition! 1-800-555-555</span>
                </div>

            </div>

        </div>

    </div>

    <nav class="navbar navbar-expand-lg av-nav">

        <div class="container">

            <a class="navbar-brand" href="#"><img src="../assets/img/logos/avada-drivers-logo-1x.png"
                    alt="avada drivers logo"></a>

            <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                aria-label="Toggle navigation">

                <span class="navbar-toggler-icon"></span>

            </button>

            <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">

                <div class="navbar-nav">

                    <a class="nav-link active" aria-current="page" href="#">Home</a>

                    <a class="nav-link" href="#">Features</a>

                    <a class="nav-link" href="#">Pricing</a>

                    <a class="nav-link disabled" aria-disabled="true">Disabled</a>

                </div>

            </div>

        </div>

    </nav>
</template>

<style lang="scss" scoped>
@use '..//assets/scss/partials/avHeader.scss';
</style>
