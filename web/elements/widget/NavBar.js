/**
 * Created by joah.zhang on 2016/3/2.
 */
import {React, ReactBootstrap, classNames, Link} from "../core"

export class NavBar extends React.Component {

    render () {
        let itemClick = this.props.navItemClick;
        let navItems = this.props.items.map(function(navItem, index) {
            return <li className={classNames({"nav-item": true, "active" : navItem.isActive})} onClick={()=>{
                itemClick(navItem)
            }}>
                <Link to={navItem.route}>{navItem.title}</Link>
            </li>
        });
        return <ReactBootstrap.Navbar>
            <ReactBootstrap.Navbar.Header>
                <ReactBootstrap.Navbar.Brand>
                    <a href="#">{this.props.brand}</a>
                </ReactBootstrap.Navbar.Brand>
            </ReactBootstrap.Navbar.Header>
            <ReactBootstrap.Nav>
                {navItems}
            </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar>
    }
}
