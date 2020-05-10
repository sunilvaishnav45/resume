import React from 'react';
import './App.css';
import Profile from './Components/Profile/profile';
import WorkExperince from './Components/WorkExperince/workexperince';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Education from './Components/Education/education';
import Skills from './Components/Skills/skills';
import Git from './Components/Git/git';
import Social from './Components/Social/social';
import Page1 from './Components/Page1/page1';
import Page2 from './Components/Page2/page2';

function App() {
  return (
    <React.Fragment>
      <HashRouter>
        <React.Fragment>
          <div className="container ">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-8 resume-card mb-lg-3 mt-lg-3">
                <Switch>
                  <Route exact path='/resume' component={Page1} />
                  <Route exact path='/resume/profile-experince' component={Page1} />
                  <Route exact path='/resume/education-skills-git' component={Page2} />
                  <Route exact path='/resume/profile' component={Profile} />
                  <Route exact path='/resume/workexperince' component={WorkExperince} />
                  <Route exact path='/resume/education' component={Education} />
                  <Route exact path='/resume/skills' component={Skills} />
                  <Route exact path='/resume/git' component={Git} />
                  <Route exact path='/resume/social' component={Social} />
                </Switch>
              </div>
            </div>
          </div>
        </React.Fragment>
      </HashRouter>
    </React.Fragment>
  );
}

export default App;
