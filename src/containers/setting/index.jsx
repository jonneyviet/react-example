import React from 'react';
import {Switch,Route} from 'react-router-dom';
import styles from 'styles';
import Layout from '../layout';
import SettingBasic from './setting-basic';
export default class setting extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<Layout>
				<Switch>
					<Route exact path="/setting" component={ SettingBasic } />
				</Switch>
			</Layout>
		)
	}
}