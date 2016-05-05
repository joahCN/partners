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
        return <ReactBootstrap.Navbar className="core-navBar">
            <ReactBootstrap.Navbar.Header>
                <ReactBootstrap.Navbar.Brand>
                    <Link to="/" className="brand-link">{this.props.brand}</Link>
                </ReactBootstrap.Navbar.Brand>
            </ReactBootstrap.Navbar.Header>
            <ReactBootstrap.Nav>
                {navItems}
            </ReactBootstrap.Nav>
            <ReactBootstrap.Nav pullRight className="right-align">
                <li className="nav-item right-align-button"><ReactBootstrap.Button bsStyle="warning" bsSize="small"><i className="fa fa-user-plus"></i>Launch a project</ReactBootstrap.Button></li>
                <li className="nav-item right-align-button"><ReactBootstrap.Button bsStyle="primary" bsSize="small"><i className="fa fa-sign-in"></i>Login</ReactBootstrap.Button></li>
            </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar>
    }
}
