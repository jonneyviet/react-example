import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styles from 'styles';
export default class button extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
        let {name} = this.props;
		return (
			<div id="title" className={styles._title}>
				<h1>{name}</h1>
			</div>
		)
	}
}
button.defaultProps = {
    name: 'The title'
};
button.propTypes = {
    name: PropTypes.string
};