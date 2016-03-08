/**
 * Created by Administrator on 2016/3/3.
 */
import {React} from "../../elements/core"
import {Carousels} from "../../elements/index"

export class Home extends React.Component {

    render() {
        return (<div>
            <Carousels items={this.props.items}></Carousels>
        </div>);
    }
}

