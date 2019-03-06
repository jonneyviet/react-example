import React from 'react';
import Title from '../../components/Title';
import styles from 'styles';
import Gird from '../../components/Gird';
import Button from '../../components/Button.jsx';
import Radio from '../../components/Radio';
import InputText from '../../components/InputText';
import InputEmail from '../../components/InputEmail';
export default class userInfo extends React.Component{
	constructor(props){
		super(props);
		this.state={
			gender:{
				list:[
					{
						id:1,
						name:'Male',
					},
					{
						id:0,
						name:'Female',
					},
				],
				choice:0
			},
			first_name:'Huynh',
			last_name:'Viet',
			email:'quocviet.php@gmail.com',
			address:'Da Nang',
			phone:'01647555127',
		}
	}
	handleGender = (e)=>{
		this.setState({
			gender: {...this.state.gender,choice:e}
		})
	}
	hanldeFirstName = (e)=>{
		this.setState({
			first_name: e.trim()
		})
	}
	hanldeLastName = (e)=>{
		this.setState({
			last_name: e.trim()
		})
	}
	hanldeEmail = (e)=>{
		this.setState({
			email: e.trim()
		})
	}
	hanldeAddress = (e)=>{
		this.setState({
			address: e.trim()
		})
	}
	hanldePhone = (e)=>{
		this.setState({
			phone: e.trim()
		})
	}
	render(){
		let {gender,first_name,last_name,email,address,phone} = this.state;
		return (
			<div>
				<Title name={"Huynh Quoc Viet"}  to={'/users'} />
				<Gird number={3}>
					<div className={styles.formContent}>
						<InputText 
							name={'First name'}
							value={first_name}
							hanldeChange = {this.hanldeFirstName}
						/>
						<InputText 
							name={'Address'}
							value={address}
							hanldeChange = {this.hanldeAddress}
						/>
						<Radio name={'Gender'} list={gender.list} choice={gender.choice} handleChoice={this.handleGender}/>
					</div>
					<div className={styles.formContent}>
						<InputText 
							name={'Last name'}
							value={last_name}
							hanldeChange = {this.hanldeLastName}
						/>
						<InputText 
							name={'Number phone'}
							value={phone}
							hanldeChange = {this.hanldePhone}
						/>
						<InputEmail 
							name={'Email'}
							value={email}
							hanldeChange = {this.hanldeEmail}
						/>
					</div>
					<div className={styles.formContent}>
						Avatar
					</div>
				</Gird>
				<Gird>
					<div className={styles.formContent}>
						<Button name={"Submit"} color={'primary'} icon={"send"}/>
					</div>
				</Gird>
				
			</div>
		)
	}
}