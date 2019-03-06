import React from 'react';
import PropTypes from 'prop-types';
import styles from 'styles';
export default class InputText extends React.Component{
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
        if(this.props.hanldeBlur)
        {
            this.props.hanldeBlur(e.currentTarget.value);
        }
    }
	render(){
        let {name,placeholder,errors,maxlength,name_send} = this.props;
        let {value,name_action,errors_s} = this.state;
        let style_error = (!errors)?'':styles.error;
        let v_name = (name_send)?name_send:name_action;
		return (
            <div>
                <div className={`${styles.inputText_default}`}>
                    <label className={styles.title}>{name}</label>
                    <input
                        className={style_error} 
                        type="text" name={v_name}
                        value={value}
                        autoComplete="off" 
                        placeholder={placeholder}
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
InputText.defaultProps={
    value:'',
    name:'',
    placeholder:'',
    errors:'',
    maxlength:255,
}
InputText.propTypes={
    value:PropTypes.string,
    name:PropTypes.string,
    placeholder:PropTypes.string,
    errors:PropTypes.string,
    maxlength:PropTypes.number,
}