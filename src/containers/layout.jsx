import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import styles from 'styles';
import Nav from './nav.jsx'
import Header from './header.jsx'



export default class layout extends React.Component{
	constructor(props){
		super(props);
		this.state={
			heightHeader:50,
			height:0,
			width:0,
		}
	}
	updateLayout = () =>{
		const h = window.innerHeight;
		const heightheader = document.getElementById('header').offsetHeight;
		this.setState({height:h-heightheader});
	}
	componentWillMount(){
		//const h = window.innerHeight;
		//this.setState({height:h});
	}
	componentDidMount(){
		const h = window.innerHeight;
		const heightheader = document.getElementById('header').offsetHeight;
		this.setState({height: h - heightheader});
		window.addEventListener("resize",this.updateLayout);
	}
	componentWillUnmount(){
		window.removeEventListener("resize", this.updateLayout);
	}
	render(){
		let {height,heightHeader} = this.state;
		var style ={
			height:height
		}
		return (
			<div>
				<Header height={heightHeader}/>
				<div className={styles.container}  style={style}>
					<Nav height={height} />
					<div className={styles.main} >
                        {
                            this.props.children
                        }
					</div>
				</div>
					
			</div>
		)
	}
}