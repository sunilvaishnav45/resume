import React from 'react';
import Profile from '../Profile/profile';
import WorkExperince from '../WorkExperince/workexperince';
import Education from '../Education/education';
import Skills from '../Skills/skills';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import Git from '../Git/git';

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
                <Skills />
                <Profile />
                <WorkExperince />
                <Education />
                <Skills />
                <Git />
            </React.Fragment>
        );
    }

}



export default Page1;