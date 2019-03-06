import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import styles from 'styles';
import style_users from './Users.scss';

class userGroupAction extends React.Component{
	constructor(props){
        super(props);
    }
	render(){
       let {listUsers}= this.props;
       let i = 0;
		return (
            <div className={style_users.actionUser}>
                <ul className={style_users.listAction}>
                    <li><Link to={'/users/add'}><i className={styles.material_icons}>edit</i><span>Chỉnh sửa</span></Link></li>
                    <li><Link to={'/users/permission'}><i className={styles.material_icons}>enhanced_encryption</i><span>Phân Quyền</span></Link></li>
                    <li><a href="#"><i className={styles.material_icons}>vpn_key</i><span>Thực hiện</span></a></li>
                </ul>
            </div>
        );
    }
}
const stateToProps = (state)=>{
    return {
        listUsers: state.users
    }
}
export default connect(stateToProps,null)(userGroupAction)