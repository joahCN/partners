import { connect } from '../index';
import {ProjectDetail} from "../../components/projectDetail/index.js"
let mapStateToProps = (state) => {
    return {
        project: state.projectDetail.project,
        sponsor: state.projectDetail.sponsor
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetail);