import {React, ReactBootstrap, classNames} from "../../elements/core"
import {Labels, Card, CardsPanel} from "../../elements/index"

import "./_style.scss"

let {Row, Col, Grid} = ReactBootstrap;

export class Profile extends React.Component {

    render() {
        let userInfo = this.props.userInfo;
        return (
            <div className="profile-page">
                <div className="profile-header-panel">
                    <Grid>
                        <Row>
                            <Col xs={12}>
                                <div className="profile-header">
                                    <div className="profile-header-img pull-left">
                                        <img src={userInfo.image}/>
                                    </div>
                                    <div className="profile-header-info pull-left">
                                        <p>{userInfo.name}</p>
                                        <p>{userInfo.desc}</p>
                                        <Labels labels={userInfo.labels}></Labels>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </div>
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <div>
                                <ReactBootstrap.Tabs className="profile-projects-panel" defaultActiveKey={1} animation={false}>
                                    <ReactBootstrap.Tab eventKey={1} title="Attended Project">
                                        <CardsPanel classes="noMargin" items={this.props.attendedProjects} lineSize={2} component={Card}/>
                                    </ReactBootstrap.Tab>
                                    <ReactBootstrap.Tab eventKey={2} title="Launched Project">
                                        <CardsPanel classes="noMargin" items={this.props.launchedProjects} lineSize={2} component={Card}/>
                                    </ReactBootstrap.Tab>
                                </ReactBootstrap.Tabs>
                            </div>
                        </Col>
                    </Row>
                </Grid>

            </div>

        );
    }
}
