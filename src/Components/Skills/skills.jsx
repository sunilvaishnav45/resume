import React from 'react';
import './skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode,faDatabase, faBuilding, faFileCode} from '@fortawesome/free-solid-svg-icons';

class Skills extends React.Component {

    constructor() {
        super();
        this.state = {
            skills: [
                {
                    skillsType: "Technical",
                    details: [
                        {
                            name: "Backend",
                            skills: "Java, Spring, Spring Boot, Hibernate, JPA, Nodejs",
                            icon : faCode
                        },
                        {
                            name: "Frontend",
                            skills: "JavaScrips, Angualr 6, Reactjs, jQuery, HTML, CSS, SCSS",
                            icon : faCode
                        },
                        {
                            name: "Data base",
                            skills: "MySql, Postgrey, Solr",
                            icon : faDatabase
                        },
                        {
                            name: "Architecture",
                            skills: "Micro Services, Monolathic, Rest APIs",
                            icon : faBuilding
                        },
                        {
                            name: "IDE",
                            skills: "Eclipse, Visual studio, intellij",
                            icon : faFileCode
                        },
                    ]
                },
            ]
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="row mt-3 mb-2">
                    <div className="col-12">
                        <h5 className="font-weight-bold">Skills</h5>
                    </div>
                </div>
                {this.state.skills.map((value, index) => {
                    return (<div className="row position-relative">
                        <div className="col-3 text-left border-right-primary-lt pb-3">
                            <span className="small pl-2">{value.skillsType}</span>
                        </div>
                        <div className="col-9 pb-3">
                            <div className="skills-dot"></div>
                            {value.details.map((detail, index) => {
                                return (
                                    <div className="pl-2 small mt-2">
                                        <div className="font-weight-bold">
                                            <span className="mr-1"><FontAwesomeIcon icon={detail.icon} /></span>  {detail.name}
                                        </div>
                                        <div className="pl-4 mb-2">
                                            {detail.skills}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>)

                })}
                <div className="border-bottom-primary-lt"></div>
            </React.Fragment>
        )
    }

}

export default Skills;