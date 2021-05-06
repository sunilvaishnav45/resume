import React from 'react';
import './workexperince.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faPeopleCarry, faUsers, faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

class WorkExperince extends React.Component {

    constructor() {
        super();
        this.state = {
            experince: [
                {
                    company: "EzCred",
                    designation: "Software Engineer",
                    startDate: "10/20",
                    endDate: "Present",
                    companyURL: "https://ezcred.in/",
                    projects: [
                        {
                            name: "EzCred",
                            teamSize: "8",
                            description: "Enable EMI Financing for Offline and Online Customer Experiences",
                            projectURL: "https://web.ezcred.in/",
                            technologies: "Java, Hibernate, Dropwizard, MySql, Vue-js",
                            architecture: "Micro services",
                        }
                    ],
                },
                {
                    company: "Talentica Software",
                    designation: "Software Engineer",
                    startDate: "04/20",
                    endDate: "Persent",
                    companyURL: "https://www.talentica.com/",
                    projects: [
                        {
                            name: "Tala Security",
                            teamSize: "12",
                            description: "Based on CSP Policy, CSP makes it possible for server administrators to reduce or eliminate the vectors by which XSS can occur by specifying the domains that the browser should consider to be valid sources of executable scripts.",
                            projectURL: "https://www.talasecurity.io/",
                            technologies: "Java, Spark, Postgrey, Reactjs, Nodejs",
                            architecture: "Micro services",
                        }
                    ],
                },
                {
                    company: "Magicbricks, Bangalore",
                    designation: "Software Engineer",
                    startDate: "11/19",
                    endDate: "04/20",
                    companyURL: "https://www.magicbricks.com/",
                    projects: [
                        {
                            name: "PG",
                            teamSize: "3",
                            description: "Helps user to find PGs in a city based on applied filter. It also helps to see all the details for PG which includes aminities, similar PGs near by and more PGs by same owner.",
                            projectURL: "https://www.magicbricks.com/property-for-rent/residential-paying-guest?cityName=Bangalore",
                            technologies: "Java, Spring Boot, MySql, Hibernate, Solr, JSP, JavaScript, jQuery",
                            architecture: "Micro services",
                        },
                        {
                            name: "Plot",
                            teamSize: "6",
                            description: "Shows all the details of a corridor which includes MVP of corridor, top localities, top agent, exclusive coverage, trending plots and more investment corridors.",
                            projectURL: "https://www.magicbricks.com/investment-corridors/Bangalore-Airport-Corridor-in-Bangalore",
                            technologies: "Java, Spring Boot, MySql, Hibernate, Solr, JSP, JavaScript, jQuery",
                            architecture: "Micro services",
                        }
                    ],
                },
                {
                    company: "GIZBEL Technology, Bangalore",
                    designation: "Software Engineer",
                    startDate: "12/17",
                    endDate: "10/19",
                    companyURL: "https://www.gizbel.com/",
                    projects: [
                        {
                            name: "Docket Review",
                            teamSize: "3",
                            description: "Tool where analytics is done based on docket status and feedback given by a reviewer team in form of file upload, comments which helps attorney to make further decision on docket.",
                            projectURL: "https://www.gizbel.com/",
                            technologies: "Java, Spring , MySql, Hibernate, JSP, JavaScript, jQuery, BootStrap",
                            architecture: "Monolothic",
                        },
                        {
                            name: "Annuity Review",
                            teamSize: "3",
                            description: "Tool which helps attorney to analyse business status of a docket where reviewer team helps attorney to take next decision.",
                            projectURL: "https://www.gizbel.com/",
                            technologies: "Java, Spring , MySql, Hibernate, JSP, JavaScript, jQuery, BootStrap",
                            architecture: "Monolothic",
                        },
                        {
                            name: "Portfolio",
                            teamSize: "2",
                            description: "Based on keyword tool genrates protfolio of docket / docket family / patents.",
                            projectURL: "https://www.gizbel.com/",
                            technologies: "Java, Spring , MySql, Hibernate, JSP, JavaScript, jQuery, BootStrap",
                            architecture: "Monolothic",
                        },
                        {
                            name: "Trademark",
                            teamSize: "3",
                            description: "To track 3rd party patents.",
                            projectURL: "https://www.gizbel.com/",
                            technologies: "Nodejs, Express , MySql, Sequlize, Angular 6, BootStrap",
                            architecture: "Monolothic",
                        }
                    ],
                }
            ]
        }
    }

    /**
     * 
     */
    render() {
        return (
            <React.Fragment>
                <div className="row mt-3 mb-2">
                    <div className="col-12">
                        <h5 className="font-weight-bold">Work Experince</h5>
                    </div>
                </div>
                {this.state.experince.map((value, index) => {
                    return (<div className="row position-relative">
                        <div className="col-3 text-left border-right-primary-lt pb-3">
                            <span className="small pl-2">{value.startDate}- {value.endDate}</span>
                        </div>
                        <div className="col-9 pb-3">
                            <div className="workexp-dot"></div>
                            <div className="font-weight-bold small"> <a target="_blank" href={value.companyURL}> <FontAwesomeIcon icon={faBriefcase} /> {value.company} </a></div>
                            <div className="small pl-3">{value.designation}</div>
                            {value.projects.map((project, index) => {
                                return (
                                    <div className="pl-2 small mt-2">
                                        <div className="font-weight-bold">
                                            <a target="_blank" href={project.projectURL}> {index + 1}. {project.name} </a>
                                            <span className="pl-3">
                                                <FontAwesomeIcon icon={faUsers} /> {project.teamSize}
                                            </span>
                                        </div>
                                        <div className="pl-3 mb-2">
                                            {project.description}
                                        </div>
                                        <div className="pl-3">
                                            <span className="font-weight-bold mt-1"> Technologies - </span> {project.technologies}
                                        </div>
                                        <div className="pl-3">
                                            <span className="font-weight-bold mt-1"> Architecture - </span> {project.architecture}
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

export default WorkExperince;
