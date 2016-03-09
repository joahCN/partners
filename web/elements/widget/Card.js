/**
 * Created by Administrator on 2016/3/8.
 */

import {React, ReactBootstrap} from "../core.js"

export class Card extends React.Component {

    render() {
        return (
        <ReactBootstrap.Row className="show-grid card">
            <ReactBootstrap.Col>
                <div className="card-left">
                    <img src={this.props.project.host.image}/>
                </div>
                <div className="card-right">
                    <div className="card-title">{this.props.project.title}</div>
                    <p className="card-desc">{this.props.project.desc}</p>
                    <div></div>
                </div>
            </ReactBootstrap.Col>
        </ReactBootstrap.Row>
        );
    }
}