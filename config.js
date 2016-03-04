/**
 * Created by joah.zhang on 2016/3/4.
 */
let commonConfig = {
    apiPrefix: "/api/"
};
let envConfig;
if(process.env.NODE_ENV == "development") {
    envConfig = {
        apiHost: "localhost",
        apiPort: 3002
    };
}

export default Object.assign(commonConfig, envConfig);
