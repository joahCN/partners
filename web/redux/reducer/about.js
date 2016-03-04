/**
 * Created by joah.zhang on 2016/3/4.
 */

export default (state = {}, action = {}) => {
    switch(action.type) {
        case "startLoadingItems":
            return Object.assign({}, {...state}, {loadingStatus: "isLoading...."});
        case "loadingItemsSuccess":
            return Object.assign({}, {...state}, {loadingStatus: "loading success"});
        case "loadingItemsFailure":
            return Object.assign({}, {...state}, {loadingStatus: "loading failure"});
        default:
            return state;
    }
}
