/**
 * Created by Administrator on 2016/3/11.
 */

import {React, ReactBootstrap, classNames} from "../../elements/core"
import {ProfileCard, ListFilter, CardsPanel} from "../../elements/index"

import "./_style.scss"

export class Persons extends React.Component {

    render() {
        return (
            <div className="persons">
                <ReactBootstrap.Grid>
                    <ReactBootstrap.Row>
                        <ReactBootstrap.Col xs={12}>
                            <ListFilter items={this.props.items} category={this.props.category}></ListFilter>
                        </ReactBootstrap.Col>
                    </ReactBootstrap.Row>
                </ReactBootstrap.Grid>
                <div className="">
                    <ReactBootstrap.Grid>
                        <CardsPanel items={this.props.persons} lineSize={3} component={ProfileCard}/>
                    </ReactBootstrap.Grid>
                </div>
            </div>
        );
    }
}
