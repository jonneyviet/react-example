import React from 'react';
import Title from '../../components/Title';
import styles from 'styles';
import style_users from './Users.scss';
import Gird from '../../components/GirdCenter';
import Button from '../../components/Button.jsx';
import Radio from '../../components/Radio';
import InputText from '../../components/InputText';
import InputTextArea from '../../components/inputTextArea';
export default class userGroupAdd extends React.Component{
	constructor(props){
		super(props);
		this.state={
			name:{
				value:'',
				errors:''
			},
			des:{
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
	hanldeDes = (e)=>{
		this.setState({
			des: {...this.state.des,value:e.trim()}
		})
	}
	handleSumit =() =>{
		
	}
	render(){
		let {name,des} = this.state;
		return (
			<div className={style_users.formAddGroup}>
                <div className={styles.formContent}>
                    <InputText
						name={"Tên nhóm"}
                        name_send={'name'}
                        value={name.value}
                        errors={name.errors}
						hanldeChange = {this.hanldeName}
                    />
					<InputTextArea 
						name={"Mô tả"}
                        name_send={'des'}
                        value={des.value}
                        errors={des.errors}
						hanldeChange = {this.hanldeDes}
					/>
                    <div>
                        <Button name={"Submit"} color={'primary'} icon={"send"} handleClick={this.handleSumit}/>
                    </div>
                </div>
			</div>
		)
	}
}