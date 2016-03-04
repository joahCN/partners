/**
 * Created by joah.zhang on 2016/3/4.
 */
import superAgent from "superagent";
import config from "../../config.js"

const methods = ['get', 'post', 'put', 'patch', 'del'];

let formatUrl = (url) => {
    return config.apiPrefix + url;
};

class APIClient {
    constructor() {
        let self = this;
        methods.forEach(function(method) {
            self[method] = (path, {params, data}={}) => {
                return new Promise((resolve, reject) => {
                    const request = superAgent[method](formatUrl(path));
                    params && request.query(params);
                    data && request.send(data);
                    request.end((err, {body} = {}) => {
                        if(err) {
                            reject(err || body);
                        } else {
                            resolve(body);
                        }
                    })
                });
            };
        });
    }
}

export default new APIClient();