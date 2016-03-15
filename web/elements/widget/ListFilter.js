/**
 * Created by Administrator on 2016/3/11.
 */

import {React, ReactBootstrap} from "../core.js"

export class ListFilter extends React.Component {

    render() {
        let items = this.props.items.map((item)=> {
            return (
                <li>{item.name}</li>
            );
        });
        return (
            <div className="core-list-filter clearfix">
                <span className="list-filter-category">{this.props.category}</span>
                <ul className="list-filter">
                    {items}
                </ul>
            </div>

        );
    }
}
