/**
 * Created by joah.zhang on 2016/3/2.
 */
import {React} from "../../elements/core"
import {NavBar} from "../../elements/index"

export class PageHeader extends React.Component {

    render() {
        return (<NavBar {...this.props.navBar} navItemClick = {this.props.navItemClick}/>);
    }
}
