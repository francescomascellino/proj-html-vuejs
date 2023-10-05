<template>
    <main>

        <!-- BOOK LESSON -->
        <section id="av-book">

            <div class="container mb-5">

                <div class="row">

                    <!-- INFO SECTION -->
                    <div class="col d-flex flex-column justify-content-center my-5 av-introduction">
                        <h2 class="text-capitalize mb-5">Get Behind The Wheel</h2>

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

                    <!-- BOOKING FORM -->
                    <div class="col av-bookForm">

                        <div class="card rounded-3 p-5 shadow text-center">

                            <h3 class="text-capitalize"> first lesson free!</h3>

                            <p>When you make a block booking with us your first lesson is included free.</p>

                            <input class="form-control my-3 " type="text" placeholder="Your Name*" name="av-nameForm"
                                id="av-nameForm" required v-model="store.nameForm">

                            <input class="form-control my-3" type="email" placeholder="Email*" name="av-emailForm"
                                id="av-emailForm" required v-model="store.emailForm">

                            <input class="form-control my-3" type="number" placeholder="Telephone" name="av-phoneForm"
                                id="av-phoneForm" v-model="store.numberForm">

                            <input class="form-control my-3" type="text" name="av-locationForm" placeholder="Location"
                                id="av-locationForm" v-model="store.locationForm">

                            <div class="av-formError">
                                <p class="av-formError" v-if="store.formError">Some fields are compiled incorrectly</p>
                            </div>


                            <avBtn @click="avCreateRequest()">request a callback</avBtn>

                        </div>

                    </div>

                </div>

            </div>

            <!-- CALL TO ACTION -->
            <div class="av-ctaCall">

                <div class="container">
                    <div class="row">

                        <div class="col-7 d-flex flex-column  justify-content-center">

                            <h2 class="text-capitalize">start learning to drive today</h2>
                            <p>Give us a call to schedule your first driving lesson</p>

                        </div>

                        <div class="col d-flex flex-column  justify-content-center">

                            <h3 class="text-end me-5"><i class="fa-solid fa-phone-flip me-4"></i>1-800-555-555</h3>

                        </div>

                    </div>
                </div>

            </div>
        </section>

        <!-- SECTION COURSES -->
        <section id="av-courses">

            <div class="container">
                <div class="row">

                    <!-- NEW COURSE -->
                    <div class="col-4">
                        <div class="rounded-3 shadow text-center av-newCourse">
                            <h2>Courses</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
                                architecto fugiat dicta aperiam doloribus, voluptatibus quae id impedit earum a!</p>

                            <avBtn>course information</avBtn>
                        </div>
                    </div>

                    <!-- COURSES -->
                    <div class="col d-flex flex-column justify-content-center align-items-center"
                        v-for="course in this.store.courses">

                        <div class="text-center av-course">

                            <img :src="getImg(course.image)" :alt="course.name">

                            <h4 class="pt-3 pb-2">{{ course.name }}</h4>

                            <button class="btn rounded-5 av-courseBtn">Learn More</button>

                        </div>

                    </div>

                </div>
            </div>
        </section>

        <!-- SECTION RATES -->
        <section id="av-rates" class="mb-5">

            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-4" v-for="percentage in this.store.percentages">

                        <!-- GREEN 'BACK' CARD -->
                        <div class="rounded-3 av-cardContainer shadow">

                            <!-- CARD -->
                            <div class="d-flex flex-column align-items-center rounded-3 py-4 av-rateCard">

                                <!-- PERCENTAGE CIRCLE -->
                                <div class="av-rateCircle">

                                    <svg viewBox="0 0 36 36" class="av-perCircle">
                                        <path class="av-circleBg"
                                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />

                                        <!-- stroke-dasharray = PERCENTAGE - strke = COLOR -->
                                        <path class="av-circleBorder" :stroke-dasharray="`${percentage.rate}, 100`"
                                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                            stroke="#7abc64" />
                                        <text x="18" y="22" class="av-percentage">{{ percentage.rate }}%</text>
                                    </svg>

                                </div>

                                <p class="text-uppercase mt-3">{{ percentage.text }}</p>

                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </section>

        <!-- SECTION ISTRUCTORS -->
        <section id="av-instructors">

            <div class="container">

                <!-- PROMISE -->
                <div class="row mb-5">
                    <div class="col flex-grow-1">
                        <h2>Your Instructors</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, temporibus aliquam.</p>
                    </div>
                    <div class="col-4 d-flex align-items-center justify-content-center">
                        <avBtn>more about us</avBtn>
                    </div>
                </div>

                <div class="row">

                    <!-- INSTRUCTORS CARDS -->
                    <div class="col-4" v-for="Instructor in store.instructors">

                        <!-- GREEN 'BACK' CARD -->
                        <div class="rounded-3 av-cardContainer shadow">

                            <!-- CARD -->
                            <div class="d-flex flex-column align-items-center rounded-3 text-center py-4 av-instructorCard">

                                <img :src="getImg(Instructor.image)" alt="">

                                <h3>{{ Instructor.name }}</h3>

                                <div class="av-instSocialWrapper">

                                    <a class="px-3" href=""><i class="fa-brands fa-facebook-f"></i></a>

                                    <a class="px-3" href=""><i class="fa-brands fa-twitter"></i></a>

                                    <a class="px-3" href=""><i class="fa-brands fa-instagram"></i></a>

                                </div>

                                <p>{{ Instructor.presentation }}</p>

                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </section>

        <!-- SECTION TESTIMONIALS -->
        <section id="av-testimonials">
            <div class="container">
                <div class="row align-items-center">

                    <div class="col text-center av-testSlider">

                        <h2>Testimonials</h2>
                        <p>Here's what our happy drivers had to say about our services:</p>

                        <div class="av-testPagination">

                            <!-- IMAGE -->
                            <div class="py-4 av-testimonial">
                                <img :src="getImg(store.testimonials[store.activeTestimonial].image)"
                                    :alt="store.testimonials[store.activeTestimonial].name" class="av-appearing"
                                    @mouseover="avStopAutoplay()" @mouseleave="avLoop()">
                            </div>

                            <!-- QUOTE -->
                            <div class="d-flex align-items-center justify-content-center av-testQuote"
                                @mouseover="avStopAutoplay()" @mouseleave="avLoop()">
                                <p>{{ store.testimonials[store.activeTestimonial].quote }}</p>
                            </div>

                            <!-- NAME -->
                            <p class="fw-bold">{{ store.testimonials[store.activeTestimonial].name }}</p>

                            <!-- BULLETS WITH TESTIMONIAL CHANGE ON CLICK -->
                            <i v-for="( testimonial, index ) in  store.testimonials " :id="index" class="px-2"
                                :class="index == this.store.activeTestimonial ? 'fa-solid fa-circle' : 'fa-regular fa-circle'"
                                @click="changeActiveTestimonial(index)"></i>

                        </div>

                    </div>

                </div>
            </div>
        </section>

        <!-- SECTION BLOG -->
        <section id="av-blog">
            <div class="container">
                <div class="row">
                    <div class="col">

                        <div class="rounded-2 shadow av-cardContainer">

                            <div class="rounded-2 text-center av-news">
                                <h2>Latest News</h2>

                                <!-- BLOG POSTS -->
                                <div class="av-postContainer d-flex flex-row mt-5">
                                    <div class="av-post" v-for="post in store.blogNews">

                                        <img :src="getImg(post.image)" :alt="post.title" class="av-blogImg">

                                        <h4 class="text-capitalize mt-4">{{ post.title }}</h4>

                                        <p class="av-blogInfo">{{ post.date }} | <span
                                                class="av-blogComments">{{ post.comments }}
                                                Comments</span></p>

                                        <p>{{ post.preview }}</p>
                                    </div>

                                </div>

                                <avBtn>more from the blog</avBtn>
                            </div>

                        </div>

                        <div class="av-bottom">

                            <img src="../assets/img/pagination/latestnews-bottom.png" alt="bottom">

                        </div>

                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION NEWSLETTER -->
        <section id="av-newsletter">

            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-6 d-flex flex-column justify-content-center align-items-lg-center">
                        <h3>Sign up to our Newsletter</h3>

                        <input class="form-control my-4" type="email" placeholder="Enter your email to subscribe*"
                            name="av-subcribe" id="av-subcribe" required>

                        <avBtn>subscribe</avBtn>

                        <p class="mt-4">(We do not share your data with anybody, and only use it for its intended purpose)
                        </p>

                    </div>
                </div>
            </div>


        </section>
    </main>
</template>

<script>

import { store } from '../store';

// IMPORT COMPONENTS
import avBtn from './avBtn.vue';

export default {
    name: 'avMain',

    data() {
        return {
            store,
        }
    },

    // COMPONENTS DECLARATION
    components: {
        avBtn
    },

    methods: {

        // CREATES OBJECT WITH CONTACT DETAILS THAT CAN BE HANDLED TO RECEIVE A BOOK REQUEST
        avCreateRequest() {

            if (this.store.numberForm.length == 0 || this.store.emailForm.length == 0 || this.store.numberForm.length == 0 || this.store.locationForm.length == 0) {
                this.store.formError = true;
                console.log("EMPTY FIELDS");
            } else {

                this.store.formError = false;

                this.store.bookRequest = [];

                const newRequest = {
                    name: this.store.nameForm,
                    email: this.store.emailForm,
                    nummer: this.store.numberForm,
                    location: this.store.locationForm
                }

                this.store.bookRequest.push(newRequest);

                console.log('FORM SENT', this.store.bookRequest);

                this.store.nameForm = '';
                this.store.emailForm = '';
                this.store.numberForm = '';
                this.store.locationForm = '';

            }

        },

        // TRANSFORMS IMAGE PATH TO URL
        getImg(url) {
            return new URL(`${url}`, import.meta.url).href
        },

        // CHANGE DISPLAYED TESTIMONIAL ON BULLET DOT CLICK
        changeActiveTestimonial(index) {
            this.store.activeTestimonial = index;
        },

        // TESTIMONIALS SLIDER LOOP
        avLoop() {

            this.autoplay = setInterval(() => {

                store.activeTestimonial++;
                if (store.activeTestimonial > store.testimonials.length - 1) {
                    store.activeTestimonial = 0;
                }

            }, 5000);

        },

        avStopAutoplay() {
            console.log(this.autoplay);
            clearInterval(this.autoplay)
        }


    },

    mounted() {

        // STARTS TESTIMONIAL SLIDER AFTER 5s AFTER THE MOUNTING OF THE COMPONENT
        setTimeout(this.avLoop(), 5000);

    }

}

</script>

<style lang="scss" scoped>
@use '../assets/scss/partials/avMain.scss';
</style>