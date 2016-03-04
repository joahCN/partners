/**
 * Created by joah.zhang on 2016/3/3.
 */
import { Router, Route, browserHistory } from 'react-router'
import {App} from "./App.js"

export default {
    path: "/",
    component: App,
    childRoutes: [
        {
            path: "/about",
            getComponent: (location, cb)=>{
                require.ensure([], (require)=>{
                    //cb(null, require("./components/about/index").default);
                    cb(null, require("./redux/container/about").default);
                });
            }
        }
    ]
}
