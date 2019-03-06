import React from 'react';
import {Link} from 'react-router-dom';
import styles from 'styles';
export default class header extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		const style = {
			height: this.props.height
		}
		return (
			<div>
				<div id="header" className={styles.header} style={style}>
					LOGO
				</div>
			</div>
		)
	}
}