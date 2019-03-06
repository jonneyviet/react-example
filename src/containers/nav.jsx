import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from 'styles';
export default class nav extends React.Component{
	constructor(props){
		super(props);

	}
	render(){
		const style = {
			height: this.props.height
		}
		return (
			<div className={styles.nav} style={style}>
				<ul className={styles.listNav}>
					<li><NavLink activeClassName={styles.active} exact to="/">Home</NavLink></li>
					<li><NavLink activeClassName={styles.active} to="/setting">Setting</NavLink></li>
					<li><NavLink activeClassName={styles.active} to="/users">User</NavLink></li>
					<li><NavLink activeClassName={styles.active} to="/component/button">Button</NavLink></li>
					<li><NavLink activeClassName={styles.active} to="/component/form">Form</NavLink></li>
					<li><NavLink activeClassName={styles.active} to="/component/gird">Gird</NavLink></li>
				</ul>
			</div>
		)
	}
}