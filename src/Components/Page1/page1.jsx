import React from 'react';
import Profile from '../Profile/profile';
import WorkExperince from '../WorkExperince/workexperince';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';

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
                <WorkExperince />
                <div className="text-center mt-2">
                    <Link to="/profile-experince"> <div className="footer-dot mr-3 active"><span className="text-white"><FontAwesomeIcon icon={faCaretLeft} /></span></div> </Link>
                    <Link to="/education-skills-git"> <div className="footer-dot "><span className="text-white"><FontAwesomeIcon icon={faCaretRight} /></span></div> </Link>
                </div>
            </React.Fragment>
        );
    }

}



export default Page1;