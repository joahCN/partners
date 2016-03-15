import {Immutable} from "../../elements/core.js"

let initialState = {
    items: [
        {
            name: "internet"
        },
        {
            name: "education"
        },
        {
            name: "sales"
        }
    ],
    category: "Projects category",
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
        },
        {
            host: {
                image: "http://placehold.it/80x80",
                desc: "I'm a export of software"
            },
            title: "Change the world",
            desc: "This project will change the world"
        }
    ]
};

export default (state = initialState, action ={})=>{
    switch (action.type) {
        default:
            return state;
    }
}