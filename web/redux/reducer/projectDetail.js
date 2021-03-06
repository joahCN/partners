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
    },
    members: [
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
            isSimple: true
        },
        {
            image: "http://placehold.it/80x80",
            name: "Smith",
            desc: "I'm a export of software",
            labels: [
                {
                    text: "CEO"
                },
                {
                    text: "Engineer"
                }
            ],
            isSimple: true
        },
        {
            image: "http://placehold.it/80x80",
            name: "cherry",
            desc: "I'm a export of software",
            labels: [
                {
                    text: "CEO"
                },
                {
                    text: "Engineer"
                }
            ],
            isSimple: true
        }
    ]
};

export default (state = initialState, action = {})=>{
    switch (action.type) {
        default:
            return state;
    }
}