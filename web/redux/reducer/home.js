/**
 * Created by joah.zhang on 2016/3/8.
 */
import {Immutable} from "../../elements/core.js"

let initialState = {
    carouselsItems: [
        {
            src: "http://www.itd.az/wp-content/uploads/2015/11/8interbusiness.jpg",
            title: "image1",
            desc: "desc1"
        },
        {
            src: "http://www.itd.az/wp-content/uploads/2015/11/8interbusiness.jpg",
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
            ],
            id: 1
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
    ],
    projectsHeader: {
        headerLink: {
            text: "Latest update",
            route: ""
        },
        links: [
            {
                text: "internet",
                route: ""
            },
            {
                text: "trading",
                route: ""
            }
        ]
    },
    profilesHeader: {
        headerLink: {
            text: "Latest dreamer",
            route: ""
        },
        links: [
            {
                text: "internet",
                route: ""
            },
            {
                text: "trading",
                route: ""
            }
        ]
    }
};

export default (state = initialState, action = {})=>{
    switch (action.type) {
        case "loadingLatestItemsSuccess":
            let result = action.result;
            let newState = Immutable.fromJS(state);
            let updated = newState.setIn(["projects"], result.projects);
            return updated.toJS();
        default:
            return state;
    }
}