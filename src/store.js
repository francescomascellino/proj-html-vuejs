import { reactive } from "vue";

export const store = reactive({

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
    ],

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

})