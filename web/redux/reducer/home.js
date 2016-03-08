/**
 * Created by joah.zhang on 2016/3/8.
 */

let initialState = {
    carouselsItems: [
        {
            src: "http://placehold.it/900x500",
            title: "image1",
            desc: "desc1"
        },
        {
            src: "http://placehold.it/900x500",
            title: "image2",
            desc: "desc2"
        }
    ]
};

export default (state = initialState, action = {})=>{
    switch (action.type) {
        default:
            return state;
    }
}