/**
 * Created by joah.zhang on 2016/3/3.
 */

import { connect } from 'react-redux'
import { navItemClick } from '../actions/pageHeader'
import {PageHeader} from "../../components/pageHeader/index.js"

let mapStateToProps = (state) => {
    return {
        navBar: state.navBar
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        navItemClick: (item) => {
            dispatch(navItemClick(item))
        }
    }
};

export let PageHeaderContainer = connect(mapStateToProps, mapDispatchToProps)(PageHeader);