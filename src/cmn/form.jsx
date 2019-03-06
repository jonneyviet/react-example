import React from 'react';
import Layout from '../containers/layout';
import styles from 'styles';
import Title from './title.jsx';
export default class form extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		const style = {
			
		}
		return (
			<Layout>
				<div className={styles.contentComponent}>
					<Title name={"Form"} />
					<h2>Input text</h2>
					<div className={styles.formContent}>
						<div className={`${styles.inputText_default}`}>
							<label className={styles.title}>Input name</label>
							<input type="text" name="name" autoComplete = "off" placeholder="placeholder"/>
						</div>
						<div className={`${styles.inputText_default}`}>
							<label className={styles.title}>Input name error</label>
							<input className={styles.error} type="text" name="name" autoComplete = "off" placeholder="placeholder"/>
							<label className={styles.error}>message error system</label>
						</div>
						<div className={`${styles.inputText_default}`}>
							<label className={styles.title}>Input readonly</label>
							<input readOnly type="text" name="name" autoComplete="off" />
						</div>
						<div className={`${styles.inputText_default} ${styles.inputText_icon}`}>
							<i className={styles.material_icons}>face</i>
							<input type="text" name="name" autoComplete="off"/>
						</div>
					</div>
					<h2>Only select</h2>
					<div className={styles.formContent}>
						<div className={styles.inputSelect}>
							
						</div>
					</div>
				</div>
			</Layout>
		)
	}
}