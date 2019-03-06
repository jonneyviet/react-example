import React from 'react';
import PropTypes from 'prop-types';
import styles from 'styles';
export default class InputPassword extends React.Component{
	constructor(props){
        super(props);
        this.state={
            value:'',
            name_action:''
        }
    }
    componentWillMount(){
        let name = this.props.name.toLowerCase().trim().replace(" ","_");
        this.setState({
            value: this.props.value,
            name_action: name,
        })
    }
    handerChange = (e) =>{
        this.setState({
            value: e.currentTarget.value 
        })
        this.props.hanldeChange(this.state.value);
    }
    handleInputValidation = (e) =>{
        if(this.props.hanldeBlur){
            this.props.hanldeBlur(e.currentTarget.value);    
        }
    }
	render(){
        let {name,errors,maxlength} = this.props;
        let {value,name_action} = this.state;
        let style_error = (!errors)?'':styles.error;
		return (
            <div>
                <div className={`${styles.inputText_default}`}>
                    <label className={styles.title}>{name}</label>
                    <input 
                        className={style_error} 
                        type="password" name={name_action}
                        value={value}
                        autoComplete="off" 
                        maxLength={maxlength}
                        onChange={this.handerChange}
                        onBlur={this.handleInputValidation}
                    />
                    {
                        (!errors)?null:<label className={styles.error}>{errors}</label>
                    }
                </div>
            </div>
		)
	}
}
InputPassword.defaultProps={
    value:'',
    name:'',
    errors:'',
    maxlength:255,
}
InputPassword.propTypes={
    value:PropTypes.string,
    name:PropTypes.string,
    errors:PropTypes.string,
    maxlength:PropTypes.number,
}