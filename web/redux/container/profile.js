import { connect } from '../index';
import {Profile} from "../../components/profile/index.js"
let mapStateToProps = (state) => {
    return {
        userInfo: state.profile.userInfo,
        attendedProjects: state.profile.attendedProjects,
        launchedProjects: state.profile.launchedProjects
    }
};
let mapDispatchToProps = (dispatch) => {
    return {

    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);