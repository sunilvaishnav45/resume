import React from 'react';
import './profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBirthdayCake, faPhone, faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons';

class Profile extends React.Component {
    /**
     * 
     */
    constructor() {
        super();
        this.state = {
            //to maintain employee personal details
            employee: {
                firstName: "Sunil",
                lastName: "Vaishnav",
                homeAddres: "Satanami Bhawan Gaytri Nagar, Jaitaran,Rajasthan",
                dob: "17/08/1994",
                nationality: "Indian",
                mobile: "9716209524",
                email: "sunilvaishnav45@gmail.com"
            }
        };
    }

    /**
     * To render Profile page
     */
    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-6 text-left">
                        <img src={require('../../resources/sunil.jpeg')} className="rounded-circle" height="135" width="135" />
                    </div>
                    <div className="col-6 align-self-center text-above-lg-right text-below-lg-left mb-2 mb-lg-0">
                        <h6 className="font-weight-bold text-uppercase">{this.state.employee.firstName} <span className="">{this.state.employee.lastName}</span></h6>
                        <div className="border-primary last-name d-none d-lg-block ">
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-6 col-12 text-left mb-2">
                        <h6 className="font-weight-bold">Personal Information</h6>
                        <div className="mt-2 small pl-2 mb-1">
                            <FontAwesomeIcon icon={faHome} /> {this.state.employee.homeAddres}
                        </div>
                        <div className="small pl-2 mb-1">
                            <FontAwesomeIcon icon={faBirthdayCake} />  {this.state.employee.dob}
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 align-self-center text-above-lg-right text-below-lg-left">
                        <div className="small pl-2 mb-1">
                            <FontAwesomeIcon icon={faPhone} /> {this.state.employee.mobile}
                        </div>
                        <div className="small pl-2 mb-1">
                            <FontAwesomeIcon icon={faEnvelope} /> {this.state.employee.email}
                        </div>
                    </div>
                </div>
                <div className="border-bottom-primary-lt mt-3"></div>
            </React.Fragment>
        );
    }
}

export default Profile;