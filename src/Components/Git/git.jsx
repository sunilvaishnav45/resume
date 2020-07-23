import React from 'react';
import './git.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons';

class Git extends React.Component {
    constructor() {
        super();
        this.state = {
            experince: [
                {
                    profileName: "Sunil Vaishnav",
                    profileProject: "GIT projects",
                    startDate: "09/17",
                    endDate: "Persent",
                    gitURL: "https://github.com/sunilvaishnav45",
                    projects: [
                        {
                            name: "Delivery Management System",
                            description: "Delivery task tool is completely real time action tool, where Admin can add new task, see added task history and cancel a task. User can accept a high priority task, can take action on accepted task and can see the accepted task list.",
                            projectURL: "https://github.com/sunilvaishnav45/dms",
                            technologies: "Java, Web socket, Spring, Hibernate, JavaScript, jQuery, MySql",
                        },
                        {
                            name: "Inventory Management System",
                            description: "Inventory menagment system helps shopkeeper to manage his/her shop.Tool includes analysis of stock, notify about upcoming deliveries, customer data and billing system.",
                            projectURL: "https://sunilvaishnav45.github.io/ims-web/",
                            technologies: "Java, Spring Boot, Hibernate, Reactjs, MySql, Micro services",
                        },
                        {
                            name: "Quiz",
                            description: "Multiple choice questions Show correct and wrong answer after completing of quiz Show user score card after result User can’t skip any question without answering If user skip any question, result won’t be seen to user.",
                            projectURL: "https://sunilvaishnav45.github.io/quizass/instruction",
                            technologies: "Angular 6,SCSS,browser local storage ",
                        },
                        {
                            name: "Editor",
                            description: "Three level child parent relationship, add text editor in 3rd child.",
                            projectURL: "https://github.com/sunilvaishnav45/sunilvaishnav45.github.io",
                            technologies: "Angular 6,SCSS,browser local storage",
                        },

                    ],
                },
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
                        <h5 className="font-weight-bold">GIT projects</h5>
                    </div>
                </div>
                {this.state.experince.map((value, index) => {
                    return (<div className="row position-relative">
                        <div className="col-3 text-left border-right-primary-lt pb-3">
                            <span className="small pl-2">{value.startDate}- {value.endDate}</span>
                        </div>
                        <div className="col-9 pb-3">
                            <div className="git-dot"></div>
                            <div className="font-weight-bold small"> <a target="_blank" href={value.gitURL}> <FontAwesomeIcon icon={faProjectDiagram} /> {value.profileName} </a></div>
                            <div className="small pl-3">{value.profileProject}</div>
                            {value.projects.map((project, index) => {
                                return (
                                    <div className="pl-2 small mt-2">
                                        <div className="font-weight-bold">
                                            <a target="_blank" href={project.projectURL}> {index + 1}. {project.name} </a>
                                        </div>
                                        <div className="pl-3 mb-2">
                                            {project.description}
                                        </div>
                                        <div className="pl-3">
                                            <span className="font-weight-bold mt-1"> Technologies - </span> {project.technologies}
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

export default Git;
