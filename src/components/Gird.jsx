import React from 'react';
import PropTypes from 'prop-types';
import styles from 'styles';
export default class Gird extends React.Component{
	constructor(props){
        super(props);
        this.state={
        }
    }
    styleGird = (e) =>{
        if(e==2){
            return styles.gird_col_2;
        }
        if(e==3){
            return styles.gird_col_3;
        }
        return styles.gird_col_1;
    }
	render(){
        let {number} = this.props;
        let style_gird = this.styleGird(number);
		return (
            <div className={`${styles.gird_col} ${style_gird}`}>
                {
                    this.props.children
                }
            </div>
		)
	}
}
Gird.defaultProps={
    number:1,
}
Gird.propTypes={
    number:PropTypes.number,
}