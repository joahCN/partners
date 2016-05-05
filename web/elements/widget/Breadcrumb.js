import {React, ReactBootstrap, Link} from "../core.js"

export class Breadcrumb extends React.Component {

    render() {
        let links = this.props.links;
        let headerLink = this.props.header;
        let linkNodes = links&&links.map((link)=>{
            return <span><Link to={link.route}>{link.text}</Link></span>
        });
        return (
            <div className="core-breadcrumb">
                <h2><Link to={headerLink.route}>{headerLink.text}</Link></h2>
                {linkNodes}
            </div>
        );
    }
}
