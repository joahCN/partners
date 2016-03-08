/**
 * Created by joah.zhang on 2016/3/8.
 */

let initialState = {
    carouselsItems: [
        {
            src: "http://placehold.it/1280x300",
            title: "image1",
            desc: "desc1"
        },
        {
            src: "http://placehold.it/1280x300",
            title: "image2",
            desc: "desc2"
        }
    ],
    project: {
        host: {
            image: "http://placehold.it/80x80",
            desc: "I'm a export of software"
        },
        title: "Change the world",
        desc: "This project will change the world"
    }
};

export default (state = initialState, action = {})=>{
    switch (action.type) {
        default:
            return state;
    }
}