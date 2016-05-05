import {Immutable} from "../../elements/core.js"

let initialState = {
    userInfo: {
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
    attendedProjects: [
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
        }
    ],
    launchedProjects: [
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
    ]
};

export default (state=initialState, action={})=>{
    switch (action.type) {
        default:
            return state;
    }
}