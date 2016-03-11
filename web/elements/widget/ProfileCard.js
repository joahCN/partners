/**
 * Created by joah.zhang on 2016/3/10.
 */

import {React, ReactBootstrap} from "../core.js"

export class ProfileCard extends React.Component {

    render() {
        return (
            <div className="profile-card">
                <div className="profile-card-image">
                    <img className="img-circle" src={this.props.image}/>
                </div>
                <p>
                    <span>{this.props.name}</span>
                </p>
                <p className="profile-card-desc">
                    <span>{this.props.desc}</span>
                </p>
                <div className="profile-card-labels">
                    <span className="label label-info">{this.props.label}</span>
                </div>
            </div>

        );
    }
}
