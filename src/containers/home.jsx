import React from 'react';
import {Switch,Route} from 'react-router-dom';

import Layout from './layout';
import styles from 'styles';

export default class home extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<Layout>
				<h1>Trang home</h1>
			</Layout>
		)
	}
}