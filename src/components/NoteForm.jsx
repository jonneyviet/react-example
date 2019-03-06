import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {toggle,addItem} from 'action';
class NoteForm extends React.Component {
	handerAddClick = () =>{
		let e = this.refs.name.value;
		var {dispatch} = this.props;
		dispatch(addItem(e));
		dispatch(toggle());
	}
	handerShowForm =() =>{
		var {dispatch} = this.props;
		dispatch(toggle());
	}
    render() {
    	if(!this.props.isAdding){
    		return (
    			<div>
    				<button onClick={this.handerShowForm}>show form add</button>
    			</div>
    		)
    	}
        return (
            <div>
            	<input type="text" ref="name" />
            	<button onClick={this.handerAddClick}>Add</button>
			</div>
        )
    }
}
const stateToProps =(state) =>{
	return {
		isAdding : state.isAdding
	}
}
const VisibleNoteForm = connect(stateToProps,null)(NoteForm);

export default VisibleNoteForm;