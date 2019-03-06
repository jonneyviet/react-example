import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import styles from 'styles';
export default class InputEmail extends React.Component{
	constructor(props){
        super(props);
        this.state={
            value:'',
            name_action:'',
        }
    }
    componentWillMount(){
        let name = this.props.name.toLowerCase().trim().replace(" ","_");
        this.setState({
            value: this.props.value,
            name_action: name,
        })
    }
    validateEmail = (email) => {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    handerChange = (e) =>{
        this.setState({
            value: e.currentTarget.value
        })
        this.props.hanldeChange(this.state.value);
    }
    handerCheck = (e) =>{
        if(this.props.hanldeBlur){
            this.props.hanldeBlur(this.validateEmail(this.props.value))
        }
    }
	render(){
        let {name,errors} = this.props;
        let {value,name_action} = this.state;
        let style_error = (!errors)?'':styles.error;
		return (
            <div>
                <div className={`${styles.inputText_default}`}>
                    <label className={styles.title}>{name}</label>
                    <input 
                        className={style_error} 
                        type="email" name={name_action}
                        value={value}
                        onChange={this.handerChange}
                        onBlur={this.handerCheck}
                        autoComplete="off" 
                    />
                    {
                        (!errors)?null:<label className={styles.error}>{errors}</label>
                    }
                </div>
            </div>
		)
	}
}
InputEmail.defaultProps={
    value:'',
    name:'',
    errors:''
}
InputEmail.propTypes={
    value:PropTypes.string,
    name:PropTypes.string,
    errors:PropTypes.string,
}