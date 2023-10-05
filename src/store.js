import { reactive } from "vue";

export const store = reactive({

    // NAVBAR LINKS
    navLinks: [
        {
            text: 'home',
            path: '#',
            new: false
        },

        {
            text: 'about',
            path: '#av-rates',
            new: false
        },

        {
            text: 'prices',
            path: '#',
            new: false
        },

        {
            text: 'courses',
            path: '#av-courses',
            new: true
        },

        {
            text: 'locations',
            path: '#',
            new: false
        },

        {
            text: 'blog',
            path: '#av-blog ',
            new: false
        },
    ],

    // BOOKING FORM
    nameForm: '',

    emailForm: '',

    numberForm: '',

    locationForm: '',

    formError: false,

    bookRequest: [],

    // OBJECTS FOR LIST RENDERING
    courses: [
        {
            name: 'Pass Plus',
            image: '../assets/img/courses/sm/courses-passplus-200x200.jpg',
        },

        {
            name: 'Intensive Course',
            image: '../assets/img/courses/sm/course-intensive-200x200.jpg',
        },

        {
            name: 'Instructors',
            image: '../assets/img/courses/sm/courses-instructor-200x200.jpg',
        }

    ],

    percentages: [
        {
            text: 'pass rate',
            rate: 95
        },

        {
            text: 'referral rate',
            rate: 10
        },

        {
            text: 'accident rate',
            rate: 0
        }

    ],

    instructors: [
        {
            name: 'Mike Hart',
            image: '../assets/img/instructors/instructor-mikehart.jpg',
            presentation: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
        },

        {
            name: 'John Smith',
            image: '../assets/img/instructors/instructor-johnsmith.jpg',
            presentation: 'Lorem ipsum dolor sit amet, consectetur adipisicing  adipisicing  adipisicing elit. Lorem ipsum dolor sit amet'
        },

        {
            name: 'Angela Hart',
            image: '../assets/img/instructors/instructor-angelahart.jpg',
            presentation: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
        },

    ],

    activeTestimonial: 0,

    testimonials: [
        {
            name: 'Sophia Jones',
            image: '../assets/img/testimonials/testimonial-sophia.png',
            quote: 'Avada Driving School really helped build my confidence behind the wheel and with driving in general, and they got me a first time pass! Highly recommended.'
        },

        {
            name: 'Grant Jones',
            image: '../assets/img/testimonials/testimonial-grant.png',
            quote: 'Avada Driving School really helped build my confidence behind the wheel and with driving in general, and they got me a first time pass! Highly recommended.'
        },

        {
            name: 'Harold Jones',
            image: '../assets/img/testimonials/testimonial-harold.png',
            quote: 'Avada Driving School is highly recommended!'
        },

        {
            name: 'Kate Jones',
            image: '../assets/img/testimonials/testimonial-kate.png',
            quote: 'Avada Driving School really helped build my confidence behind the wheel and with driving in general, and they got me a first time pass! Highly recommended.'
        },

        {
            name: 'Kelly Jones',
            image: '../assets/img/testimonials/testimonial-kelly.png',
            quote: 'They got me a first time pass!'
        }

    ],

    blogNews: [
        {
            image: '../assets/img/blog/blog-choosecar-700x441.jpg',
            title: 'what car to start with?',
            date: 'February 7th, 2019',
            comments: '0',
            preview: 'Lorem ipsum, dolor sit amet consectetur adipisicing'
        },

        {
            image: '../assets/img/blog/blogpost-10and2-700x441.jpg',
            title: 'avada driving school expanding',
            date: 'January 10th, 2019',
            comments: '3',
            preview: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
        }
    ],

    // FOOTER
    footerContacts: [
        {
            icon: 'fa-solid fa-house-chimney',
            text: '12345, Noth Main Street, New York, NY 555555'
        },

        {
            icon: 'fa-solid fa-phone-flip',
            text: '1.800.555.67789'
        },

        {
            icon: 'fa-regular fa-envelope',
            email: 'info@your-domain.com'
        },

        {
            icon: 'fa-solid fa-link',

            link: {
                name: 'Theme-Fusion.com',
                url: '#'
            }

        },

    ],

    footerCourses: [
        {
            name: 'Pass Plus',
            link: '#av-courses'
        },

        {
            name: 'Intensive Course',
            link: '#av-courses'
        },

        {
            name: 'Automatic',
            link: '#av-courses'
        },

        {
            name: 'Instructor Training',
            link: '#av-courses'
        }
    ]

})