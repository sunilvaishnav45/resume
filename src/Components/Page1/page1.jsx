import React from 'react';
import Profile from '../Profile/profile';
import WorkExperince from '../WorkExperince/workexperince';
import { Link } from 'react-router-dom';

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
                    <Link to="/resume/profile-experince"> <div className="dot mr-3 active"></div> </Link>
                    <Link to="/resume/education-skills-git">    <div className="dot "></div> </Link>
                </div>
            </React.Fragment>
        );
    }

}



export default Page1;