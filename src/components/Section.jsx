import React from 'react';
import PropTypes from 'prop-types';
import styles from 'styles';
export default class Section extends React.Component{
	constructor(props){
		super(props);
    }
	render(){
		return (
            <section className={styles.container_main}>
                {
                    this.props.children
                }
            </section>
		)
	}
}
