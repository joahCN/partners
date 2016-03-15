/**
 * Created by Administrator on 2016/3/14.
 */

import {React, ReactBootstrap, classNames} from "../../elements/core"
import {ProfileCard, Labels} from "../../elements/index.js"

import "./_style.scss"

export class ProjectDetail extends React.Component {

    render() {
        let project = this.props.project;
        return (
            <div className="project-detail">
                <ReactBootstrap.Grid>
                    <ReactBootstrap.Row>
                        <ReactBootstrap.Col xs={12} md={8}>
                            <div className="project-header clearfix">
                                <h2 className="pull-left">{project.title}</h2>
                                <button type="button" className="btn btn-success pull-right">Join In</button>
                            </div>
                            <p className="project-desc">
                                {project.desc}
                            </p>
                            <Labels labels={project.labels}/>
                            <div className="project-members">
                                <h2>Members</h2>
                                <ProfileCard {...this.props.sponsor}/>
                                <ProfileCard {...this.props.sponsor}/>
                                <ProfileCard {...this.props.sponsor}/>
                            </div>
                        </ReactBootstrap.Col>
                        <ReactBootstrap.Col xs={12} md={4}>
                            <ProfileCard {...this.props.sponsor}/>
                        </ReactBootstrap.Col>
                    </ReactBootstrap.Row>
                </ReactBootstrap.Grid>
            </div>
        );
    }
}