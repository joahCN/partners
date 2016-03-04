/**
 * Created by joah.zhang on 2016/3/4.
 */

export let loadAboutItems = ()=> {
    return {
        types: ["startLoadingItems", "loadingItemsSuccess", "loadingItemsFailure"],
        promise: (apiClient) => {
            return apiClient.get("aboutItems");
        }
    }
};
