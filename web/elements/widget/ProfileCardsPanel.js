import {React, ReactBootstrap, classNames} from "../../elements/core"

export default class CardsPanel extends React.Component {
    render() {
        let component = this.props.component;
        let lineSize = this.props.lineSize;
        let items = this.props.items.map((profile, index)=>{
            return (
                <ReactBootstrap.Col xs={12} md={12/lineSize} className="cards-card">
                    <div className = {classNames({"card-panel-gutter-left": index%lineSize == (lineSize-1), "card-panel-gutter-right": index%lineSize == 0, "card-panel-gutter-middle": index%lineSize != 0 && index%lineSize != (lineSize-1)})}>
                        {React.createElement(component, profile)}
                    </div>
                </ReactBootstrap.Col>
            );
        });
        return (
            <ReactBootstrap.Grid className="core-cards-panel">
                <ReactBootstrap.Row className="cards-row">
                    {items}
                </ReactBootstrap.Row>
            </ReactBootstrap.Grid>
        );
    }
}