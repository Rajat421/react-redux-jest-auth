import React from "react";
import ReactDOM from "react-dom";
import createBrowserHistory from "history/createBrowserHistory";
import "./index.css";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import logger from "redux-logger";
import Reducer from "./reducers/index";
import Home from "./components/Home/home";
import registerServiceWorker from "./registerServiceWorker";
import Login from "./components/Login/login";
import AboutUs from "./components/AboutUs/aboutus";
import Profile from "./components/AboutUs/profile/profile";
import Team from "./components/AboutUs/team/team";
import ContactUs from "./components/AboutUs/contactus/contactus";
import {BrowserRouter as Router, Route} from "react-router-dom";
import "./static/css/responsive.css";

const history = createBrowserHistory();

const store= createStore(Reducer,{},applyMiddleware(logger,thunk))

ReactDOM.render(<Provider store={store} >
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
    </Provider>, document.getElementById('root'));
registerServiceWorker();
