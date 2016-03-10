/**
 * Created by joah.zhang on 2016/3/10.
 */
import {React, ReactBootstrap, classNames} from "../../elements/core"
import {Card} from "../../elements/index"

export default class CardsPanel extends React.Component {

    render() {
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
                            <ReactBootstrap.Col xs={12} md={6}>
                                <Card project={this.props.project}></Card>
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} md={6}>
                                <Card project={this.props.project}></Card>
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                        <ReactBootstrap.Row className="cards-row">
                            <ReactBootstrap.Col xs={12} md={6}>
                                <Card project={this.props.project}></Card>
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col xs={12} md={6}>
                                <Card project={this.props.project}></Card>
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                    </ReactBootstrap.Grid>
                </div>
            </div>
        );
    }
}
