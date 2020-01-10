import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import {Home} from './components/home';
import Login from "./components/login";
import SignUp from "./components/signup";
import LostPassword from "./components/lostpassword";
import CreateNewPassword from "./components/createnewpassword";

import {NewProfile} from "./components/user/newprofile";

function App() {
    return (
        <Router>
            <Switch>
	    		<Route exact path='/' component={Home} />
	    		<Route path='/login' component={Login} />
	    		<Route path='/signup' component={SignUp} />
	    		<Route path='/lostpassword' component={LostPassword} />
	    		<Route path='/createnewpassword/:token' component={CreateNewPassword} />
	    		<Route path='/newprofile' component={NewProfile} />
	    		{/*<Route component={NoMatch} />*/}
			</Switch>
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

