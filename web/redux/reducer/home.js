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
            desc: "This project will change the world"
        },
        {
            host: {
                image: "http://placehold.it/80x80",
                desc: "I'm a export of software"
            },
            title: "Change the world",
            desc: "This project will change the world"
        },
        {
            host: {
                image: "http://placehold.it/80x80",
                desc: "I'm a export of software"
            },
            title: "Change the world",
            desc: "This project will change the world"
        },
        {
            host: {
                image: "http://placehold.it/80x80",
                desc: "I'm a export of software"
            },
            title: "Change the world",
            desc: "This project will change the world"
        }
    ],
    profiles: [
        {
            image: "http://placehold.it/80x80",
            name: "John",
            desc: "I'm a export of software",
            label: "software engineer"
        },
        {
            image: "http://placehold.it/80x80",
            name: "John",
            desc: "I'm a export of trading",
            label: "trader"
        },
        {
            image: "http://placehold.it/80x80",
            name: "John",
            desc: "I'm a export of sales",
            label: "sales"
        },
        {
            image: "http://placehold.it/80x80",
            name: "John",
            desc: "I'm a export of driver",
            label: "driver"
        },
        {
            image: "http://placehold.it/80x80",
            name: "John",
            desc: "I'm a export of driver",
            label: "driver"
        },
        {
            image: "http://placehold.it/80x80",
            name: "John",
            desc: "I'm a export of driver",
            label: "driver"
        }
    ]
};

export default (state = initialState, action = {})=>{
    switch (action.type) {
        default:
            return state;
    }
}