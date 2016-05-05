/**
 * Created by joah.zhang on 2016/3/3.
 */
import { combineReducers, routerReducer } from '../index.js'
import {pageHeader} from "./pageHeader.js"
import about from "./about.js"
import home from "./home.js"
import projects from "./projects.js"
import projectDetail from "./projectDetail.js"
import profile from "./profile.js"
import persons from "./persons.js"

export default combineReducers({
    navBar: pageHeader,
    about,
    home,
    projects,
    projectDetail,
    profile,
    persons,
    routing: routerReducer
})