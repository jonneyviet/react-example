import React from "react";
import PropTypes from 'prop-types';

import Note from './Note';
import NoteForm from './NoteForm';

import {connect} from 'react-redux';

class List extends React.Component {
    render() {
        return (
            <div>
            	<NoteForm />
            	{
            		this.props.mang.map((e,i)=> {
	            		return <Note key={i} name ={e} index={i} onHanderleRemove={this.handerleRemove} />
	            	})
            	}
			</div>
        )
    }
}
const stateToProps = (state) =>{
	return {
		mang: state.mang
	}
}
const VisibleList = connect(stateToProps,null)(List);

export default VisibleList;