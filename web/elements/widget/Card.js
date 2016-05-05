/**
 * Created by Administrator on 2016/3/8.
 */

import {React, ReactBootstrap, Link} from "../core.js"

export class Card extends React.Component {

    render() {
        return (
        <div className="show-grid card">
            <div className="card-left">
                <img src={this.props.host.image}/>
            </div>
            <div className="card-right">
                <div className="card-title"><Link to={`/project/${this.props.id}`}>{this.props.title}</Link></div>
                <p className="card-desc">
                    <i className="fa fa-quote-left fa-pull-left"></i>
                    {this.props.desc}
                    <i className="fa fa-quote-right fa-pull-right"></i>
                </p>
                <div className="card-label"><span className="label label-info">internet</span></div>
                <div><i className="fa fa-user fa-lg font-icon active"></i><i className="fa fa-user font-icon fa-lg active"></i><i className="fa fa-user font-icon fa-lg"></i></div>
            </div>
        </div>
        );
    }
}