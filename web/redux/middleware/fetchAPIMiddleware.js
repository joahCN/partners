/**
 * Created by joah.zhang on 2016/3/4.
 */

export default (apiClient) => {
    return ({dispatch, getState}) => {
        return (next) => (action) => {
            if(typeof action == "function") {
                return action(dispatch, getState);
            }
            const {promise, types, ...rest} = action;
            if(!promise) {
                return next(action)
            }
            const [REQUEST, SUCCESS, FAILURE] = types;
            next({...rest, type: REQUEST});
            let actionPromise = promise(apiClient);
            actionPromise.then(
                (result) => {
                    return next({...rest, result, type: SUCCESS});
                },
                (error) => {
                    return next({...rest, error, type: FAILURE});
                }
            ).catch((error)=> {
                    return next({...rest, error, type:FAILURE});
                })
        }
    };
};
