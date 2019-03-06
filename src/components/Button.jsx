import React from 'react';
import PropTypes from 'prop-types';
import styles from 'styles';
export default class Button extends React.Component{
	constructor(props){
		super(props);
    }
    styleSize = (e) =>{
        if(e==='md'){
            return styles.btn_size_md;
        }
        if(e==='xl'){
            return styles.btn_size_xl;
        }
        return styles.btn_size_sm;
    }
    styleColor =(e) =>{
        if(e==='primary'){
            return styles.btn_primary;
        }
        if(e==='secondary'){
            return styles.btn_secondary;
        }
        return styles.btn_default;
    }
    handleClick = () =>{
        this.props.handleClick();
    }
	render(){
        let {name,size,icon,color,disable} = this.props;
        let style_size = this.styleSize(size);
        let style_color = this.styleColor(color);
		return (
                <button className={`${styles.btn} ${style_color} ${style_size}`} onClick={this.handleClick} disabled={disable}>
                    {
                        (!!icon)? <i className={styles.material_icons}>{icon}</i>:''

                    }
                    <span>{name}</span>
                </button>
		)
	}
}
Button.defaultProps={
    name:'Button',
    icon:'',
    size:styles.btn_size_sm,
    color:styles.btn_default,
    disable:false,
}
Button.propTypes={
    name:PropTypes.string,
    icon:PropTypes.string,
    size:PropTypes.string,
    color:PropTypes.string,
    disable:PropTypes.bool,
}