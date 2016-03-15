import {Immutable} from "../../elements/core.js"

let initialState = {
    project: {
        host: {
            image: "http://placehold.it/80x80",
            desc: "I'm a export of software"
        },
        title: "Change the world",
        desc: "This project will change the world",
        id: 1,
        labels: [
            {
                text: "internet"
            },
            {
                text: "sales"
            }
        ]
    },
    sponsor: {
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
    }
};

export default (state = initialState, action = {})=>{
    switch (action.type) {
        default:
            return state;
    }
}