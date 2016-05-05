/**
 * Created by Administrator on 2016/3/3.
 */
import {React, ReactBootstrap, classNames} from "../../elements/core"
import {Carousels, Card, CardsPanel, ProfileCard, Breadcrumb} from "../../elements/index"

import "./_style.scss"

export class Home extends React.Component {

    componentWillMount() {
        this.props.loadLatestProjects();
    }

    render() {
        //let component = Card;
        return (
            <div className={classNames("home")}>
                <ReactBootstrap.Grid fluid={true}>
                    <ReactBootstrap.Row className="show-grid">
                        <ReactBootstrap.Col xs={12} className="noPadding">
                            <Carousels items={this.props.items}></Carousels>
                        </ReactBootstrap.Col>
                    </ReactBootstrap.Row>
                </ReactBootstrap.Grid>
                <div className="cards-bg">
                    <ReactBootstrap.Grid>
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Col xs={12} className="noPadding">
                                <Breadcrumb header={this.props.projectsHeader.headerLink} links={this.props.projectsHeader.links}/>
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                        <CardsPanel items={this.props.projects} lineSize={2} component={Card}/>
                    </ReactBootstrap.Grid>

                </div>
                <div className="profiles-bg">
                    <ReactBootstrap.Grid>
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Col xs={12} className="noPadding">
                                <Breadcrumb header={this.props.profilesHeader.headerLink} links={this.props.profilesHeader.links}/>
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                        <CardsPanel items = {this.props.profiles} lineSize={3} component={ProfileCard}/>
                    </ReactBootstrap.Grid>
                </div>


            </div>
           );
    }
}

