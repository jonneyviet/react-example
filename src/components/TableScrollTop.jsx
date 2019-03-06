import React from 'react';
import PropTypes from 'prop-types';
import styles from 'styles';
export default class TableScrollTop extends React.Component{
	constructor(props){
        super(props);
        this.state={
            height:300,
        }
    }
	render(){
        let {height} = this.state;
        let {loadding} = this.props;
		var style ={
			height:height
		}
		return (
            <div className={styles.tableScroll} style={style}>
                {
                    (loadding)?
                        <div className={styles.tableLoadding}><div></div><div></div><div></div><div></div></div>
                    :null
                }
                
                <div className={`${styles.tableContain}`}>
                    {
                        this.props.children
                    }
                </div>
            </div>
		)
	}
}
TableScrollTop.defaultProps={
    height:null,
}
TableScrollTop.propTypes={
    height:Number,
}