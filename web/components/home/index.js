/**
 * Created by Administrator on 2016/3/3.
 */
import {React, ReactBootstrap, classNames} from "../../elements/core"
import {Carousels, Card} from "../../elements/index"
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
                <div className="cards-bg">
                    <ReactBootstrap.Grid>
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Col xs={12} className="cards-header">
                                <h2>Latest update</h2><span>internet</span><span>trading</span>
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                        <ReactBootstrap.Row className="show-grid">
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

