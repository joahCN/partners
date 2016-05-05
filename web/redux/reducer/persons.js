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
    persons: [
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
            ],
            id: 1
        },
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
            ],
            id: 1
        },
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
            ],
            id: 1
        },
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
            ],
            id: 1
        }
    ]
};

export default (state = initialState, action = {})=>{
    switch (action.type) {
        default:
            return state;
    }
}