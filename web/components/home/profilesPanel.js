/**
 * Created by joah.zhang on 2016/3/10.
 */
import {React, ReactBootstrap, classNames} from "../../elements/core"
import {ProfileCard} from "../../elements/index"

export default class ProfilesPanel extends React.Component {

    render() {
        let profiles = this.props.profiles.map((profile, index)=>{
            return (
            <ReactBootstrap.Col xs={12} md={4} className="profiles-item">
                <div className={classNames({"profile-item-first": index%3==0, "profile-item-second": index%3==1, "profile-item-last": index%3==2})}>
                    <ProfileCard {...profile}></ProfileCard>
                </div>
            </ReactBootstrap.Col>
                );
        });
        return (
            <div className="profiles-bg">
                <ReactBootstrap.Grid>
                    <ReactBootstrap.Row>
                        <ReactBootstrap.Col xs={12} className="profiles-header">
                            <h2>Latest dreamer</h2>
                        </ReactBootstrap.Col>
                    </ReactBootstrap.Row>
                    <ReactBootstrap.Row className="profiles-row">
                        {profiles}
                    </ReactBootstrap.Row>

                </ReactBootstrap.Grid>
            </div>

        );
    }
}
