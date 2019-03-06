import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {removeItem} from 'action';
class Note extends React.Component {
	constructor(props){
		super(props);
	}
	onHanderleRemove = () =>{
		var {dispatch,index} = this.props;
		dispatch(removeItem(index));
	}
    render() {
        return (
            <div>
            	<p>{this.props.name}</p>
            	<button onClick={this.onHanderleRemove}>Delete</button>
			</div>
        )
    }
}

const VisibleNote = connect()(Note);

export default VisibleNote;