/**
 * Created by Counter on 7/2/2017.
 */
import React from 'react'
import Home from "./components/Home/home";
import createBrowserHistory from "history/createBrowserHistory";
import Login from "./components/Login/login";
import AboutUs from "./components/AboutUs/aboutus";
import Profile from "./components/AboutUs/profile/profile";
import Team from "./components/AboutUs/team/team";
import ContactUs from "./components/AboutUs/contactus/contactus";
import {BrowserRouter as Router, Route} from "react-router-dom";
const history = createBrowserHistory();
export default props => (
    <Router history={history}>
        <div>

            <Route exact path={'/'} component={Login}/>
            { /**
             exact is used because every route contains the
             root-path('/') so with every route app component
             will be activated but with "exact" keyword we can
             stop this and app component will only be activated
             if path exactly matches this("/")
             **/
            }
            <Route path={'/home'} exact component={Home}/>
            <Route path={'/aboutus'}  component={AboutUs}/>
            <Route path={'/aboutus/profile'} component={Profile}/>
            <Route path={'/aboutus/team'} component={Team}/>
            <Route path={'/aboutus/contactus'} component={ContactUs}/>


        </div>
    </Router>

)