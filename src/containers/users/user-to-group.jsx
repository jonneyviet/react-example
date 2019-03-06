import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Title from '../../components/Title';
import Section from '../../components/Section';
import TableScrollTop from '../../components/TableScrollTop';
import InputText from '../../components/InputText';
import Gird from '../../components/Gird';
import styles from 'styles';
import style_users from './Users.scss';

import UserGroupList from './user-group-list';
import UserGroupAdd from './user-group-add';
class userToGroup extends React.Component{
	constructor(props){
        super(props);
    }
    hanldetName = (e)=>{
		this.setState({
			name: {...this.state.name,value:e.trim()}
		})
	}
	render(){
       let {listUsers}= this.props;
       let i = 0;
		return (
            <div>
                <Title name={"Chọn nhóm người dùng"} to={"/users"}/>
                <Section>
                    <div>
                        <Gird>
                            <UserGroupList />
                        </Gird>
                    </div>
                </Section>
            </div>
        );
    }
}
const stateToProps = (state)=>{
    return {
        listUsers: state.users
    }
}
export default connect(stateToProps,null)(userToGroup)