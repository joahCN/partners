/**
 * Created by Administrator on 2016/3/8.
 */

import {React, ReactBootstrap} from "../core.js"

export class Card extends React.Component {

    render() {
        return (
        <ReactBootstrap.Row className="show-grid">
            <ReactBootstrap.Col md={4}>
                <div><img src={this.props.project.host.image}/></div>
                <p>{this.props.project.host.desc}</p>
            </ReactBootstrap.Col>
            <ReactBootstrap.Col md={8}>
                <div>
                    <h3>{this.props.project.title}</h3>
                    <div>{this.props.project.desc}</div>
                    <div></div>
                </div>
            </ReactBootstrap.Col>
        </ReactBootstrap.Row>
        );
    }
}