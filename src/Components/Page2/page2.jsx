import React from 'react';
import Profile from '../Profile/profile';
import WorkExperince from '../WorkExperince/workexperince';
import Education from '../Education/education';
import Skills from '../Skills/skills';
import Git from '../Git/git';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';

class Page2 extends React.Component {

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
                <Education />
                <Skills />
                <Git />
                <div className="text-center mt-2">
                    <Link to="/resume/profile-experince"> <div className="footer-dot mr-3 "><span className="text-white"><FontAwesomeIcon icon={faCaretLeft} /></span></div> </Link>
                    <Link to="/resume/education-skills-git"> <div className="footer-dot active"><span className="text-white"><FontAwesomeIcon icon={faCaretRight} /></span></div> </Link>
                </div>
            </React.Fragment>
        );
    }

}



export default Page2;