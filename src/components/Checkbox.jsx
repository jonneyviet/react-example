import React from 'react';
import PropTypes from 'prop-types';
import styles from 'styles';
export default class Checkbox extends React.Component{
	constructor(props){
        super(props);
        this.state={
            name_action:''
        }
    }
    componentWillMount(){
        let name = this.props.name.toLowerCase().trim().replace(" ","_");
        this.setState({
            name_action: name,
        })
    }
    onChanged =(e) =>{
        let value = parseInt(e.currentTarget.value);
        this.props.handleChoice(value);
    }
	render(){
        let {list,choice,name} = this.props;
        let {name_action} = this.state;
		return (
            <div className={`${styles.inputText_default}`}>
                <label className={styles.title}>{name}</label>
                <div className={styles.content_radio}>
                    <ul>
                        {
                            list.map((item,index)=>{
                                return (
                                    <li key={index}>
                                        <label className={styles.input_radio}>{item.name}
                                            <input type="radio" name={name_action} value={item.id} checked={item.id === choice} onChange={this.onChanged}/>
                                            <span className={styles.checkmark}></span>
                                        </label>
                                    </li>
                                );
                            })
                        }
                        
                    </ul>
                </div>
            </div>
		)
	}
}
Checkbox.defaultProps={
}
Checkbox.propTypes={
    name:PropTypes.string,
    list:PropTypes.array,
    choice:Number,
}