import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Title from '../../components/Title';
import Section from '../../components/Section';
import TableScrollTop from '../../components/TableScrollTop';
import styles from 'styles';
import style_users from './Users.scss';
const Tracking = ()=>{
    return(
        <div className={style_users.tracking}>
            <ul>
                <li>
                    <a href="#">
                        <div>
                            <span className={style_users.num}>7000</span>
                            <span className={style_users.txt}>Đang hoạt động</span>
                        </div>
                        <i className={styles.material_icons}>public</i>
                        
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div>
                            <span className={style_users.num}>100</span>
                            <span className={style_users.txt}>Cấm</span>
                        </div>
                        <i className={styles.material_icons}>pan_tool</i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div>
                            <span className={style_users.num}>100</span>
                            <span className={style_users.txt}>Đã xoá</span>
                        </div>
                        <i className={styles.material_icons}>delete</i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div>
                            <span className={style_users.num}>10000</span>
                            <span className={style_users.txt}>Tổng</span>
                        </div>
                        <i className={styles.material_icons}>group</i>
                    </a>
                </li>
            </ul>
        </div>
    )
}
const ListAction = ()=>{
    return(
        <div className={style_users.actionUser}>
            <ul className={style_users.listAction}>
               
                <li><Link to={'users/group'}><i className={styles.material_icons}>group</i><span>Nhóm người dùng</span></Link></li>
                <li><a href="#"><i className={styles.material_icons}>timeline</i><span>Timeline</span></a></li>
                <li><a href="#"><i className={styles.material_icons}>share</i><span>Share</span></a></li>
            </ul>
        </div>
    );
}
const ListActionTable = ()=>{
    return(
        <div className={style_users.actionUser}>
            <ul className={style_users.listAction}>
                <li><Link to={'users/add'}><i className={styles.material_icons}>add</i><span>Thêm mới</span></Link></li>
                <li><Link to={'users/user_to_group'}><i className={styles.material_icons}>group_add</i><span>Thêm vào nhóm</span></Link></li>
                <li><a href="#"><i className={styles.material_icons}>lock</i><span>Cấm</span></a></li>
                <li><a href="#"><i className={styles.material_icons}>delete</i><span>Xoá</span></a></li>
            </ul>
        </div>
    );
}
class Filter extends React.Component{
	constructor(props){
        super(props);
        this.state={
            openFilter:false
        }
    }
    handleClick = (e) =>{
       e.preventDefault();
        this.setState({
            openFilter:!this.state.openFilter
        });
    }
    render(){
        let {permisions,select} = this.props;
        let {openFilter} = this.state;
        let styleOpenFilter = (openFilter)?style_users.open:null;
        return(
            <div className={style_users.filter}>
                <a className={style_users.btn_filter} href="#" onClick={this.handleClick}>
                    <i className={styles.material_icons}>filter_list</i><span>Lọc</span>
                </a>
                <div className={`${style_users.contentFilter} ${styleOpenFilter}`}>
                    <div className={style_users.item}>
                        <label><i className={styles.material_icons}>group</i>Group</label>
                        <div className={style_users.inputSelect}>
                            <input value={select.name} className={style_users.inputResult} type="text" readOnly />
                            <ul>
                                {
                                    permisions.map((item,index)=>{
                                        let active = (item.id===select.id)?style_users.active:null;
                                        return (
                                            <li key={index} className={active}>{item.name}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}
class userList extends React.Component{
	constructor(props){
        super(props);
        this.state={
            permisions:[
                {id:'001',name:'Admin'},{id:'002',name:'Guest'},{id:'003',name:'Acount'}
            ],
            permision:{
                id:'001',name:'Admin'
            }
        }
    }
    handerOpenFilder = (e) =>{
        console.log(this.state.openFilter);
        this.setState({
            openFilter:!this.state.openFilter
        })
    }
	render(){
       let {listUsers}= this.props;
       let {permisions,permision,openFilter}= this.state;
       let i = 0;
		return (
            <div>
                <Title name={"Danh sách người dùng"} icon={'group'}/>
                <Section >
                    <div className={style_users.function}>
                        <div></div>
                        <ListAction />
                    </div>
                    <Tracking />
                    <div className={style_users.controlTable}>
                        <div className={style_users.search}>
                            <i className={styles.material_icons}>search</i>
                            <input type="text" placeholder="Tìm kiếm..."/>
                        </div>
                        <div className={style_users.action_table}>
                            <ListActionTable />
                            <Filter permisions={permisions} select={permision} />
                        </div>
                    </div>
                    <TableScrollTop loadding={true}>
                        <table className={styles.tableDefault}>
                            <thead>
                                <tr>
                                    <th><div></div></th>
                                    <th><div>STT</div></th>
                                    <th><div>Họ và tên</div></th>
                                    <th><div>Ngày sinh</div></th>
                                    <th><div>Giới tính</div></th>
                                    <th><div>Email</div></th>
                                    <th><div>Ngày tạo</div></th>
                                    <th><div>Nhóm</div></th>
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
                                                <td>{item.email}</td>
                                                <td>12/01/2017</td>
                                                <td width="200">
                                                    <ul className={styles._label}>
                                                        {
                                                            (item.group)?
                                                                item.group.map((i,index)=>{
                                                                    return (
                                                                        <li key={index}>{i.name}</li>
                                                                    )
                                                                })
                                                            :
                                                            null
                                                            
                                                        }
                                                    </ul>
                                                </td>
                                            </tr>
                                        );
                                        
                                    })
                                }
                            </tbody>
                        </table>
                    </TableScrollTop>
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
export default connect(stateToProps,null)(userList)