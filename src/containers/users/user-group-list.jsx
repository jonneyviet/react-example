import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import TableScrollTop from '../../components/TableScrollTop';
import styles from 'styles';
import style_users from './Users.scss';
import UserGroupAction from './user-group-action';
class userGroupList extends React.Component{
	constructor(props){
        super(props);
    }
	render(){
       let {listUsers}= this.props;
       let i = 0;
		return (
            <div>
                <div className={style_users.controlTable}>
                    <div className={style_users.search}>
                        <i className={styles.material_icons}>search</i>
                        <input type="text" placeholder="Tìm kiếm..."/>
                    </div>
                    <div className={style_users.action_table}>
                        <UserGroupAction />
                    </div>
                </div>
                <TableScrollTop>
                    <table className={styles.tableDefault}>
                        <thead>
                            <tr>
                                <th><div></div></th>
                                <th><div>STT</div></th>
                                <th><div>Tên nhóm</div></th>
                                <th><div>Mô tả</div></th>
                                <th><div>Ngày cập nhật</div></th>
                                <th><div>Người tạo</div></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                listUsers.map((item,index)=>{
                                    i++;
                                    return (
                                        <tr key={index}>
                                            <td width="10">
                                                <div className={styles._checkbox}>
                                                    <input type="checkbox" defaultChecked ={true}/>
                                                    <span className={styles.checkmark}></span>
                                                </div>
                                            </td>
                                            <td>{i}</td>
                                            <td className={styles._nowarp}>{item.name}</td>
                                            <td>{item.bridth}</td>
                                            <td>{item.gender}</td>
                                            <td>Quoc Viet</td>
                                        </tr>
                                    );
                                    
                                })
                            }
                        </tbody>
                    </table>
                </TableScrollTop>
            </div>
        );
    }
}
const stateToProps = (state)=>{
    return {
        listUsers: state.users
    }
}
export default connect(stateToProps,null)(userGroupList)