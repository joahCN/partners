/**
 * Created by joah.zhang on 2016/3/2.
 */
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import {React, ReactDom} from "./elements/core"
import reducer from "./redux/reducer/index.js"
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import routeConfigs from "./router.js"

const middlewareForRouting = routerMiddleware(browserHistory);

let store = createStore(reducer, applyMiddleware(middlewareForRouting));

const history = syncHistoryWithStore(browserHistory, store);

ReactDom.render(
    <Provider store={store}>
        <Router history={history} routes={routeConfigs}>
        </Router>
    </Provider>,
    document.querySelector("#content")
);
