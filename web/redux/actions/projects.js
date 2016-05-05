export let loadLatestProjects = ()=> {
    return {
        types: ["startLoadingLatestItems", "loadingLatestItemsSuccess", "loadingLatestItemsFailure"],
        promise: (apiClient) => {
            return apiClient.get("projects/latestProjects");
        }
    }
};
