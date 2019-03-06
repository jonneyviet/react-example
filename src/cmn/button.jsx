import React from 'react';
import {Link} from 'react-router-dom';

import Layout from '../containers/layout';
import styles from 'styles';
import Title from './title.jsx';
import Button from '../components/Button.jsx';
import Dropdown from '../components/Dropdown.jsx';
export default class button extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		const style = {
			
		}
		return (
			<Layout>
				<div className={styles.contentComponent}>
					<Title name={"Button"} />
					<div style={style}>
						<h2>Color</h2>
						<ul className={styles.layoutComponent}>
							<li><Button /><span>default</span></li>
							<li><Button color={'primary'} size={'md'} /><span>color={'primary'}</span></li>
							<li><Button color={'secondary'} size={'xl'} /><span>color={'secondary'} </span></li>
						</ul>
						<h2>Size</h2>
						<ul className={styles.layoutComponent}>
							<li><Button/><span>default (size={'sm'})</span></li>
							<li><Button size={'md'} /><span>size={'md'}</span></li>
							<li><Button size={'xl'} /><span>size={'xl'}</span></li>
						</ul>
						<h2>Icon </h2>
						<p><a target="_blank" href="https://material.io/tools/icons/?style=baseline">Icons - Material Design</a></p>
						<ul className={styles.layoutComponent}>
							<li><Button icon={"face"} /><span>icon={"face"}</span></li>
							<li><Button icon={"android"} size={'md'} /><span> icon={"android"} </span></li>
							<li><Button color={'secondary'} icon={"backup"} size={'xl'} /><span>color={'secondary'} </span></li>
						</ul>
					</div>
					<Title name={"Dropdown"} />
					<h2>default</h2>
					<ul className={styles.layoutComponent}>
						<li>
							<Dropdown >
								<ul>
									<li>Action 1</li>
									<li>Action 2</li>
									<li>Action 1</li>
									<li>Action 1</li>
								</ul>
							</Dropdown>
						</li>
					</ul>
				</div>
			</Layout>
		)
	}
}