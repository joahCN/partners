/**
 * Created by joah.zhang on 2016/3/3.
 */
import { Router, Route, browserHistory } from "./elements/core"
import {App} from "./App.js"
import Home from "./redux/container/home.js"

export default {
    path: "/",
    component: App,
    indexRoute: {
        component: Home
    },
    childRoutes: [
        {
            path: "/about",
            getComponent: (location, cb)=>{
                require.ensure([], (require)=>{
                    //cb(null, require("./components/about/index").default);
                    cb(null, require("./redux/container/about").default);
                });
            }
        },
        {
            path: "/projects",
            getComponent: (location, cb)=>{
                require.ensure([], (require)=>{
                    //cb(null, require("./components/about/index").default);
                    cb(null, require("./redux/container/projects").default);
                });
            }
        },
        {
            path: "/persons",
            getComponent: (location, cb)=>{
                require.ensure([], (require)=>{
                    //cb(null, require("./components/about/index").default);
                    cb(null, require("./redux/container/persons").default);
                });
            }
        },
        {
            path: "/project/:id",
            getComponent: (location, cb)=>{
                require.ensure([], (require)=>{
                    //cb(null, require("./components/about/index").default);
                    cb(null, require("./redux/container/projectDetail").default);
                });
            }
        },
        {
            path: "/profile/:id",
            getComponent: (location, cb)=>{
                require.ensure([], (require)=>{
                    //cb(null, require("./components/about/index").default);
                    cb(null, require("./redux/container/profile").default);
                });
            }
        }
    ]
}
