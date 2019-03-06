import React from 'react';
import Title from '../../components/Title';
import styles from 'styles';
import style_setting from './Setting.scss';
import Gird from '../../components/Gird';
import Button from '../../components/Button.jsx';
import Radio from '../../components/Radio';
import Select from '../../components/Select';

export default class settingBasic extends React.Component{
	constructor(props){
		super(props);
		this.state={
			date_format:
			{
				list:[
					{
						id:1,
						name:'January 9, 2019',
						key:'F j, Y'
					},{
						id:2,
						name:'2019-01-09',
						key:'Y-m-d'
					},{
						id:3,
						name:'01/09/2019',
						key:'m/d/Y'
					},{
						id:4,
						name:'09/01/2019',
						key:'d/m/Y'
					}
				],
				choice:1
			},
			time_format:
			{
				list:[
					{
						id:1,
						name:'6:05 am',
						key:'g:i a'
					},{
						id:2,
						name:'6:05 AM',
						key:'g:i A'
					},{
						id:3,
						name:'6:05',
						key:'H:i'
					}
				],
				choice:1
			},
			languages:{
				list:[
					{
						id:1,
						name:'Vietnamese',
						key:'vi'
					},
					{
						id:2,
						name:'English',
						key:'en'
					},
				],
				choice:[1]
			},
			timezone:{
				list:[
					{
						id:1,
						name:'UTC+7'
					},
					{
						id:2,
						name:'UTC+8',
					},
				],
				choice:[1]
			}
		}
	}
	handleDateFormat = (e)=>{
		this.setState({
			date_format: {...this.state.date_format,choice:e}
		})
	}
	handleTimeFormat = (e)=>{
		this.setState({
			time_format: {...this.state.time_format,choice:e}
		})
	}
	handleLanguage = (e)=>{
		this.setState({
			languages: {...this.state.languages,choice:[e]}
		})
	}
	handleTimezone = (e)=>{
		this.setState({
			timezone: {...this.state.timezone,choice:[e]}
		})
	}
	render(){
		let {date_format,time_format,languages,timezone} = this.state;
		return (
			<div>
				<Title name={"Settings"} icon={'settings'}/>
				<h2>General Settings</h2>
				<Gird number={2}>
					<div className={styles.formContent}>
						<Radio name={'Date format'} list={date_format.list} choice={date_format.choice} handleChoice={this.handleDateFormat}/>
						<Radio name={'Time format'} list={time_format.list} choice={time_format.choice} handleChoice={this.handleTimeFormat}/>
						
					</div>
					<div className={styles.formContent}>
						<div>
							<div></div>
							<Select 
								name={'Timezone'}
								choice={timezone.choice}
								list={timezone.list}
								handleChoice={this.handleTimezone}
							/>
						</div>
						<Select 
							name={'Language'}
							choice={languages.choice}
							list={languages.list}
							handleChoice={this.handleLanguage}
						/>
					</div>
				</Gird>
				<h2>Permison Settings</h2>

			</div>
		)
	}
}