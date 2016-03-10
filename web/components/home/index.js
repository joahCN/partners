/**
 * Created by Administrator on 2016/3/3.
 */
import {React, ReactBootstrap, classNames} from "../../elements/core"
import {Carousels, Card} from "../../elements/index"
import CardsPanel from "./cardsPanel.js"
import ProfilesPanel from "./profilesPanel.js"

import "./_style.scss"

export class Home extends React.Component {

    render() {
        return (
            <div className={classNames("home")}>
                <ReactBootstrap.Grid fluid={true}>
                    <ReactBootstrap.Row className="show-grid">
                        <ReactBootstrap.Col xs={12}>
                            <Carousels items={this.props.items}></Carousels>
                        </ReactBootstrap.Col>
                    </ReactBootstrap.Row>
                </ReactBootstrap.Grid>
                <CardsPanel project={this.props.project} />
                <ProfilesPanel profiles = {this.props.profiles}/>
            </div>
           );
    }
}

