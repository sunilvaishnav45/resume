import React from 'react';
import Profile from '../Profile/profile';
import WorkExperince from '../WorkExperince/workexperince';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import Skills from '../Skills/skills';
import Education from '../Education/education';

class Page1 extends React.Component {

    /**
    * 
    */
    constructor() {
        super();
    }

    /**
     * 
     */
    render() {
        return (
            <React.Fragment>
                <Profile />
                <Skills />
                <Education />
                <div className="text-center mt-2">
                    <Link to="/resume/profile-experince"> <div className="footer-dot mr-3 active"><span className="text-white"><FontAwesomeIcon icon={faCaretLeft} /></span></div> </Link>
                    <Link to="/resume/education-skills-git"> <div className="footer-dot "><span className="text-white"><FontAwesomeIcon icon={faCaretRight} /></span></div> </Link>
                </div>
            </React.Fragment>
        );
    }

}



export default Page1;