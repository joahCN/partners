/**
 * Created by joah.zhang on 2016/3/8.
 */
import { connect } from '../index'
import {Home} from "../../components/home/index.js"
import {loadLatestProjects} from "../actions/projects.js"

let mapStateToProps = (state) => {
    return {
        items: state.home.carouselsItems,
        projects: state.home.projects,
        profiles: state.home.profiles,
        projectsHeader: state.home.projectsHeader,
        profilesHeader: state.home.profilesHeader
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        loadLatestProjects: () => {
            dispatch(loadLatestProjects())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);