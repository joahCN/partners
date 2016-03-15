/**
 * Created by joah.zhang on 2016/3/8.
 */

let initialState = {
    carouselsItems: [
        {
            src: "http://placehold.it/1880x300",
            title: "image1",
            desc: "desc1"
        },
        {
            src: "http://placehold.it/1880x300",
            title: "image2",
            desc: "desc2"
        }
    ],
    projects: [
        {
            host: {
                image: "http://placehold.it/80x80",
                desc: "I'm a export of software"
            },
            title: "Change the world",
            desc: "This project will change the world",
            id: 1
        },
        {
            host: {
                image: "http://placehold.it/80x80",
                desc: "I'm a export of software"
            },
            title: "Change the world",
            desc: "This project will change the world",
            id: 2
        },
        {
            host: {
                image: "http://placehold.it/80x80",
                desc: "I'm a export of software"
            },
            title: "Change the world",
            desc: "This project will change the world",
            id: 3
        },
        {
            host: {
                image: "http://placehold.it/80x80",
                desc: "I'm a export of software"
            },
            title: "Change the world",
            desc: "This project will change the world",
            id: 4
        }
    ],
    profiles: [
        {
            image: "http://placehold.it/80x80",
            name: "John",
            desc: "I'm a export of software",
            labels: [
                {
                    text: "CEO"
                },
                {
                    text: "Engineer"
                }
            ]
        },
        {
            image: "http://placehold.it/80x80",
            name: "John",
            desc: "I'm a export of trading",
            labels: [
                {
                    text: "CEO"
                },
                {
                    text: "Engineer"
                }
            ]
        },
        {
            image: "http://placehold.it/80x80",
            name: "John",
            desc: "I'm a export of sales",
            labels: [
                {
                    text: "CEO"
                },
                {
                    text: "Engineer"
                }
            ]
        },
        {
            image: "http://placehold.it/80x80",
            name: "John",
            desc: "I'm a export of driver",
            labels: [
                {
                    text: "CEO"
                },
                {
                    text: "Engineer"
                }
            ]
        },
        {
            image: "http://placehold.it/80x80",
            name: "John",
            desc: "I'm a export of driver",
            labels: [
                {
                    text: "CEO"
                },
                {
                    text: "Engineer"
                }
            ]
        },
        {
            image: "http://placehold.it/80x80",
            name: "John",
            desc: "I'm a export of driver",
            labels: [
                {
                    text: "CEO"
                },
                {
                    text: "Engineer"
                }
            ]
        }
    ]
};

export default (state = initialState, action = {})=>{
    switch (action.type) {
        default:
            return state;
    }
}