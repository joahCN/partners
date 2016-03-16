/**
 * Created by joah.zhang on 2016/3/16.
 */

import {React, ReactBootstrap, classNames} from "../../elements/core"
import {Card} from "./Card.js"

export class CardsPanel extends React.Component {

    render() {
        let lineSize = this.props.lineSize;
        let projects = this.props.projects.map((project, index)=>{
            return (
                <ReactBootstrap.Col xs={12} md={12/lineSize} className="cards-card">
                    <div className = {classNames({"card-panel-gutter-left": index%lineSize == (lineSize-1), "card-panel-gutter-right": index%lineSize == 0, "card-panel-gutter-middle": index%lineSize != 0 && index%lineSize != (lineSize-1)})}>
                        <Card {...project}></Card>
                    </div>
                </ReactBootstrap.Col>
            );
        });
        return (
            <ReactBootstrap.Grid className="core-cards-panel">
                <ReactBootstrap.Row className="cards-row">
                    {projects}
                </ReactBootstrap.Row>
            </ReactBootstrap.Grid>
        );
    }
}
