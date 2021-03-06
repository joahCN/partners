/**
 * Created by Administrator on 2016/3/11.
 */

import {React, ReactBootstrap, classNames} from "../../elements/core"
import {Card, ListFilter, CardsPanel} from "../../elements/index"

import "./_style.scss"

export class Projects extends React.Component {

    render() {
        return (
            <div className="projects">
                <ReactBootstrap.Grid>
                    <ReactBootstrap.Row>
                        <ReactBootstrap.Col xs={12}>
                            <ListFilter items={this.props.items} category={this.props.category}></ListFilter>
                        </ReactBootstrap.Col>
                    </ReactBootstrap.Row>
                </ReactBootstrap.Grid>
                <div className="cards-bg">
                    <ReactBootstrap.Grid>
                        <CardsPanel items={this.props.projects} lineSize={2} component={Card}/>
                    </ReactBootstrap.Grid>
                </div>
            </div>
        );
    }
}