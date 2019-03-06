import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styles from 'styles';
export default class Title extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
        let {name,icon,to} = this.props;
		return (
			<div id="title" className={styles._title}>
				<div className={styles._title_left}>
					{
						(icon==='arrow_back')?
						<Link to={to} className={styles._title_icon}><i className={styles.material_icons}>{icon}</i></Link>
						:
						<p className={styles._title_icon}><i className={styles.material_icons}>{icon}</i></p>
					}
					
					<span>{name}</span>
				</div>
				<div className={styles._title_right}>

				</div>
			</div>
		)
	}
}
Title.defaultProps = {
	name:'The title',
	icon:'arrow_back',
	to:'/',
};
Title.propTypes = {
	name: PropTypes.string,
	icon: PropTypes.string,
	to: PropTypes.string
};