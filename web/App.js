/**
 * Created by joah.zhang on 2016/3/2.
 */
import {React} from "./elements/core"
import {PageHeaderContainer} from "./redux/container/pageHeader.js"
import PageBottom from "./components/bottom/index.js"

export class App extends React.Component {

    render() {
        return (
            <div>
                <PageHeaderContainer />
                <div>
                    {this.props.children}
                </div>
                <PageBottom />
            </div>
        )
    }
}