/**
 * Created by Administrator on 2016/3/15.
 */

import {React, ReactBootstrap, Link} from "../core.js"

export class Labels extends React.Component {

    render() {
        let labelsData = [].concat(this.props.labels);
        let labels = labelsData.map((label)=> {
            return <span className="label label-info">{label.text}</span>
        });
        return (
            <div className="core-labels">
                <i className="fa fa-tags"></i>
                {labels}
            </div>
        )
    }
}