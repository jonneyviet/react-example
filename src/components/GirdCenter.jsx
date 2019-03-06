import React from 'react';
import PropTypes from 'prop-types';
import styles from 'styles';
export default class GirdCenter extends React.Component{
	constructor(props){
        super(props);
        this.state={
        }
    }
    styleGird = (e) =>{
        if(e==='md'){
            return styles.gird_col_md;
        }
        if(e=='xl'){
            return styles.gird_col_xl;
        }
        return styles.gird_col_sm;
    }
	render(){
        let {width} = this.props;
        let style_gird = this.styleGird(width);
		return (
            <div className={`${styles.gird_col} ${style_gird}`}>
                {
                    this.props.children
                }
            </div>
		)
	}
}
GirdCenter.defaultProps={
    width:'sm',
}
GirdCenter.propTypes={
    number:PropTypes.string,
}