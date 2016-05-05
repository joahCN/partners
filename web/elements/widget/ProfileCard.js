/**
 * Created by joah.zhang on 2016/3/10.
 */

import {React, ReactBootstrap, Link} from "../core.js"
import {Labels} from "./Labels.js"

export class ProfileCard extends React.Component {

    render() {
        let detailInfo;
        if(this.props.isSimple) {
            detailInfo = null;
        } else {
            detailInfo = (<div>
                <p className="profile-card-desc">
                    <span>{this.props.desc}</span>
                </p>
                <div className="profile-card-labels">
                    <Labels labels={this.props.labels}/>
                </div>
            </div>);
        }
        return (
            <div className="profile-card">
                <div className="profile-card-image">
                    <Link to={`/profile/${this.props.id}`}><img className="img-circle" src={this.props.image}/></Link>
                </div>
                <p>
                    <span>{this.props.name}</span>
                </p>
                {detailInfo}
            </div>

        );
    }
}
