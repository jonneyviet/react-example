import React from 'react';
import Title from '../../components/Title';
import styles from 'styles';
import Gird from '../../components/GirdCenter';
import Button from '../../components/Button.jsx';
import Radio from '../../components/Radio';
import InputText from '../../components/InputText';
import InputPassword from '../../components/inputPassword';
import InputEmail from '../../components/InputEmail';
export default class userAdd extends React.Component{
	constructor(props){
		super(props);
		this.state={
			name:{
				value:'',
				errors:''
			},
			email:{
				value:'',
				errors:''
			},
			password:{
				value:'',
				errors:''
			},
			confirm_password:{
				value:'',
				errors:''
			},
		}
	}
	hanldeName = (e)=>{
		this.setState({
			name: {...this.state.name,value:e.trim()}
		})
	}
	hanldeEmail = (e)=>{
		this.setState({
			email: {...this.state.email,value:e.trim()}
		})
	}
	hanldePassword = (e)=>{
		this.setState({
			password: {...this.state.password,value:e.trim()}
		})
	}
	hanldeConfirmPassword = (e)=>{
		this.setState({
			confirm_password: {...this.state.confirm_password,value:e.trim()}
		})
	}
	handleSumit =() =>{
		
	}
	render(){
		let {name,confirm_password,email,password} = this.state;
		return (
			<div>
				<Title name={"Add user"}  to={'/users'} />
				<Gird>
					<div className={styles.formContent}>
						<InputText 
							name={'Name'}
							value={name.value}
							errors={name.errors}
							hanldeChange = {this.hanldeName}
						/>
						<InputEmail 
							name={'Email'}
							value={email.value}
							errors={email.errors}
							hanldeChange = {this.hanldeEmail}
						/>
						<InputPassword 
							name={'Password'}
							value={password.value}
							errors={password.errors}
							hanldeChange = {this.hanldePassword}
						/>
						<InputPassword 
							name={'Confirm password'}
							value={confirm_password.value}
							errors={confirm_password.errors}
							hanldeChange = {this.hanldeConfirmPassword}
						/>
						<div>
							<Button name={"Submit"} color={'primary'} icon={"send"} handleClick={this.handleSumit}/>
						</div>
					</div>
				</Gird>
				
			</div>
		)
	}
}