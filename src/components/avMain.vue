<script>

import avBtn from './avBtn.vue';

export default {
    name: 'avMain',

    components: {
        avBtn
    }
}

</script>

<template>
    <main>
        <section id="av-book">

            <div class="container mb-5">

                <div class="row">

                    <!-- INFO SECTION -->

                    <div class="col-6 d-flex flex-column justify-content-center my-5 av-introduction">

                        <h1 class="text-capitalize mb-5">Get Behind The Wheel</h1>

                        <p class="mb-4 av-introInfo">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
                            architecto
                            error esse quod illum
                            inventore non impedit reprehenderit corrupti nam?</p>

                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat aperiam in consequuntur
                            voluptatibus adipisci. Quidem deleniti molestias fuga et adipisci libero aliquam, esse ex
                            tenetur eligendi, velit quae sunt nobis. Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Maiores molestiae amet ratione accusantium eligendi perspiciatis necessitatibus deleniti
                            vero architecto nihil quam odit omnis, itaque, provident officiis porro doloribus et. Autem?</p>

                    </div>

                    <!-- FORM -->

                    <div class="col-6 av-bookForm">

                        <div class="card rounded-3 p-5 shadow text-center">

                            <h2 class="text-capitalize"> first lesson free!</h2>

                            <p>When you make a block booking with us your first lesson is included free.</p>

                            <input class="form-control my-3 " type="text" placeholder="Your Name*" name="" id="av-nameForm"
                                required>

                            <input class="form-control my-3" type="email" placeholder="Email*" name="" id="" required>

                            <input class="form-control my-3" type="number" placeholder="Telephone" name="" id="">

                            <input class="form-control my-3" type="text" name="" placeholder="Location" id="">

                            <avBtn>request a callback</avBtn>
                        </div>

                    </div>

                </div>

            </div>
            <div class="av-ctaCall">
                <div class="container">
                    <div class="row">

                        <div class="col-7 d-flex flex-column  justify-content-center">
                            <h1 class="text-capitalize">start learning to drive today</h1>
                            <h4>Give us a call to schedule your first driving lesson</h4>
                        </div>
                        <div class="col d-flex flex-column  justify-content-center">
                            <h2 class="text-end me-5"><i class="fa-solid fa-phone-flip me-4"></i>1-800-555-555</h2>
                        </div>

                    </div>
                </div>
            </div>
        </section>

    </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/avMain.scss';
</style>