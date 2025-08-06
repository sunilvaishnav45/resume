import React from 'react';
import './education.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap, faSchool, faHome } from '@fortawesome/free-solid-svg-icons';

class Education extends React.Component {

    constructor() {
        super();
        this.state = {
            education: [
                {
                    institute: "National Institute Of Technology, Delhi",
                    branch: "Branch - Electronics and Communication",
                    startDate: "August-2013",
                    endDate: "April-2017",
                    instituteURL: "https://nitdelhi.ac.in/",
                    standered: "B.Tech",
                    result: "CGPA - 7.13",
                    isSchool: false,
                },
                {
                    institute: "Yadav Public School, Jodhpur",
                    branch: "Science maths",
                    startDate: "2011",
                    endDate: "2012",
                    instituteURL: "https://nitdelhi.ac.in/",
                    standered: "12th",
                    result: "Percentage - 83.60%",
                    isSchool: true,
                },
                {
                    institute: "Adarsh Vidya Mandir, Jaitaran",
                    branch: " ",
                    startDate: "2009",
                    endDate: "2010",
                    instituteURL: "https://nitdelhi.ac.in/",
                    standered: "10th",
                    result: "Percentage - 79%",
                    isSchool: true,
                },
            ]
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="row mt-3 mb-2">
                    <div className="col-12">
                        <h5 className="font-weight-bold">Education</h5>
                    </div>
                </div>
                {this.state.education.map((value, index) => {
                    return (<div className="row position-relative">
                        <div className="col-3 text-left border-right-primary-lt pb-3">
                            <span className="small pl-2">{value.startDate}- {value.endDate}</span>
                        </div>
                        <div className="col-9 pb-3">
                            <div className="education-dot"></div>
                            <div className="font-weight-bold small">
                                {!value.isSchool && <React.Fragment><FontAwesomeIcon icon={faGraduationCap} /> {value.standered} - {value.institute}</React.Fragment>}
                                {value.isSchool && <React.Fragment><FontAwesomeIcon icon={faSchool} /> {value.standered} - {value.institute}</React.Fragment>}
                            </div>
                            <div className="small pl-4">{value.branch}</div>
                            <div className="small pl-4">{value.result}</div>
                        </div>
                    </div>)

                })}

                <div className="border-bottom-primary-lt"></div>
            </React.Fragment>
        )
    }
}

export default Education;
