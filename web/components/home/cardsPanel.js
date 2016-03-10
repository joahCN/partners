/**
 * Created by joah.zhang on 2016/3/10.
 */
import {React, ReactBootstrap, classNames} from "../../elements/core"
import {Card} from "../../elements/index"

export default class CardsPanel extends React.Component {

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
            <div>
                <div className="cards-bg">
                    <ReactBootstrap.Grid>
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Col xs={12} className="cards-header">
                                <h2>Latest update</h2><span>internet</span><span>trading</span>
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                        <ReactBootstrap.Row className="cards-row">
                            {projects}
                        </ReactBootstrap.Row>

                    </ReactBootstrap.Grid>
                </div>
            </div>
        );
    }
}
