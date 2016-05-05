import { connect } from '../index';
import {Persons} from "../../components/persons/index.js"
let mapStateToProps = (state) => {
    return {
        items: state.persons.items,
        category: state.persons.category,
        persons: state.persons.persons
    }
};
let mapDispatchToProps = (dispatch) => {
    return {

    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Persons);