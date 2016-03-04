/**
 * Created by joah.zhang on 2016/3/4.
 */
import { connect } from 'react-redux'
import About from "../../components/about/index.js"
import {loadAboutItems} from "../actions/about.js"

let mapStateToProps = (state) => {
    return {
        loadingStatus: state.about.loadingStatus
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        loadAboutItems: () => {
            dispatch(loadAboutItems())
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(About);
