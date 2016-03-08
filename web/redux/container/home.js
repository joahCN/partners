/**
 * Created by joah.zhang on 2016/3/8.
 */
import { connect } from '../index'
import {Home} from "../../components/home/index.js"

let mapStateToProps = (state) => {
    return {
        items: state.home.carouselsItems,
        project: state.home.project
    }
};

export default connect(mapStateToProps, null)(Home);