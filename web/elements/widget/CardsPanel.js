/**
 * Created by joah.zhang on 2016/3/16.
 */

import {React, ReactBootstrap, classNames} from "../../elements/core"
import {Card} from "./Card"

export class CardsPanel extends React.Component {
    render() {
        let component = this.props.component;
        let lineSize = this.props.lineSize;
        let classes = this.props.classes;
        let items = this.props.items.map((item, index)=>{
            return (
                <ReactBootstrap.Col xs={12} md={12/lineSize} className="cards-card">
                    <div className = {classNames("core-card",{"card-panel-gutter-left": index%lineSize == (lineSize-1), "card-panel-gutter-right": index%lineSize == 0, "card-panel-gutter-middle": index%lineSize != 0 && index%lineSize != (lineSize-1)})}>
                        {React.createElement(component, item)}
                    </div>
                </ReactBootstrap.Col>
            );
        });
        return (
            <ReactBootstrap.Row className={classNames("core-cards-panel", classes)}>
                {items}
            </ReactBootstrap.Row>
        );
    }
}
