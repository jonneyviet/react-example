import React from 'react';
import {Switch,Route} from 'react-router-dom';
import styles from 'styles';
import Layout from '../layout';
import UserList from './user-list';
import UserAdd from './user-add';
import UserInfo from './user-info';
import UserGroup from './user-group';
import UserToGroup from './user-to-group';
import Permission from './permission';
export default class main extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<Layout>
				<Switch>
					<Route exact path="/users" component={ UserList } />
					<Route path="/users/add" component={ UserAdd } />
					<Route path="/users/info" component={ UserInfo } />
					<Route path="/users/group" component={ UserGroup } />
					<Route path="/users/user_to_group" component={ UserToGroup } />
					<Route path="/users/permission" component={ Permission } />
				</Switch>
			</Layout>
		)
	}
}