/**
 * Created by Administrator on 2016/3/14.
 */

import {React, ReactBootstrap, classNames} from "../../elements/core"
import {ProfileCard, Labels, CardsPanel} from "../../elements/index.js"

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
                            <div className="project-desc">
                                <Labels labels={project.labels}/>
                                <p>
                                    {project.desc}
                                    <img src="http://zcr5.ncfstatic.com/attachment/201602/26/11/56cfc1bd252e81a_t4_660x475_thumb_670x0.jpg" alt="һƬҶ�ӵ����� (�����Ʒ,����Ƽ�,����,��԰��,�ֹ����Ʋ�)" title="һƬҶ�ӵ����� (�����Ʒ,����Ƽ�,����,��԰��,�ֹ����Ʋ�)" data-src="http://zcr5.ncfstatic.com/attachment/201602/26/11/56cfc1bd252e81a_t4_660x475_thumb_670x0.jpg" />
                                </p>
                            </div>
                            <div className="project-members">
                                <h2 className="section-header">Members</h2>
                                <CardsPanel items={this.props.members} lineSize={4} component={ProfileCard}/>
                            </div>
                        </ReactBootstrap.Col>
                        <ReactBootstrap.Col xs={12} md={4} className="project-sideCard">
                            <h2 className="section-header">Sponsor</h2>
                            <ProfileCard {...this.props.sponsor}/>
                        </ReactBootstrap.Col>
                    </ReactBootstrap.Row>
                </ReactBootstrap.Grid>
            </div>
        );
    }
}