import { connect } from '../index';
import {Projects} from "../../components/projects/index.js"
let mapStateToProps = (state) => {
    return {
        items: state.projects.items,
        category: state.projects.category,
        projects: state.projects.projects
    }
};
let mapDispatchToProps = (dispatch) => {
    return {

    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Projects);