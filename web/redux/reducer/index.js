/**
 * Created by joah.zhang on 2016/3/3.
 */
import { combineReducers, routerReducer } from '../index.js'
import {pageHeader} from "./pageHeader.js"
import about from "./about.js"
import home from "./home.js"

export default combineReducers({
    navBar: pageHeader,
    about,
    home,
    routing: routerReducer
})