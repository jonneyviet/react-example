import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import styles from 'styles';
import Nav from './nav.jsx'
import Header from './header.jsx'

//cmn
import Button from '../cmn/button';
import Form from '../cmn/form';
import Gird from '../cmn/gird';
//page
import Login from './login';
import Home from './home';
import Users from './users';
import Setting from './setting';

function PrivateRoute({ component: Component, ...rest }) {
	return (
	  <Route
		{...rest}
		render={props =>
		  true ? (
			<Component {...props} />
		  ) : (
			<Redirect
			  to={{
				pathname: "/login"
			  }}
			/>
		  )
		}
	  />
	);
  }
  

export default class main extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<Switch>
					<PrivateRoute exact path="/" component={Home} />
					<PrivateRoute path="/component/button" component={ Button } />
					<PrivateRoute path="/component/form" component={ Form } />
					<PrivateRoute path="/component/gird" component={ Gird } />
					<PrivateRoute path="/users" component={ Users } />
					<PrivateRoute path="/setting" component={ Setting } />
					<Route path="/login" component={ Login }/>
				</Switch>
		)
	}
}