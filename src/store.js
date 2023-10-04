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

    ]

})