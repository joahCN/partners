/**
 * Created by Administrator on 2016/3/11.
 */

import {React, ReactBootstrap, classNames} from "../../elements/core"
import {Card, ListFilter} from "../../elements/index"

import "./_style.scss"

export class Projects extends React.Component {

    render() {

        let projects = this.props.projects.map((project, index)=>{
            return (
                <ReactBootstrap.Col xs={12} md={6} className="cards-card">
                    <div className = {classNames({"card-panel-gutter-left": index%2 == 1, "card-panel-gutter-right": index%2 == 0})}>
                        <Card {...project}></Card>
                    </div>
                </ReactBootstrap.Col>
            );
        });

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
                        <ReactBootstrap.Row className="cards-row">
                            {projects}
                        </ReactBootstrap.Row>
                    </ReactBootstrap.Grid>
                </div>
            </div>
        );
    }
}