/**
 * Created by joah.zhang on 2016/3/3.
 */
import { combineReducers } from 'redux'
import {pageHeader} from "./pageHeader.js"
import about from "./about.js"
import {routerReducer } from 'react-router-redux'

export default combineReducers({
    navBar: pageHeader,
    about,
    routing: routerReducer
})