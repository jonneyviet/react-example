import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styles from 'styles';
export default class Select extends React.Component{
	constructor(props){
        super(props);
        this.state={
            open:false,
        }
    }
    componentWillMount(){
    }
    onChanged =(e) =>{
    }
    handleToggle = ()=>{
        this.setState({
            open: !this.state.open
        })
    }
    handleCheckToggle = (e)=>{
        this.props.handleChoice(e.currentTarget.value);
        this.setState({
            open: !this.state.open
        })
    }
    handleClickOutside = event => {
        const domNode = ReactDOM.findDOMNode(this); 
        if (!domNode || !domNode.contains(event.target)) {
            this.setState({
                open : false
            });
        }
    }
    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside, true);
    }
    
    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside, true);
    }
	render(){
        let {list,choice,name} = this.props;
        let {open} = this.state;
        let active_style = (open)?styles._select_list_active:null;
        let t_style = (choice.length>1)?styles._select_input_muti:styles._input_list_only;
		return (
            <div className={styles._select}>
                <div className={styles._select_title}>{name}</div>
                <div className={styles._select_content}>
                    <div className={`${styles._select_input} ${t_style}`} onClick={this.handleToggle}>
                        <ul>
                            {
                                list.map((item,index)=>{
                                    if(choice.indexOf(item.id)>-1){
                                        return (
                                            <li key={index}>{item.name}</li>
                                        )
                                    }
                                })
                            }
                        </ul>
                        <i className={styles.material_icons}>arrow_drop_down</i>
                    </div>
                    <div className={`${styles._select_list} ${active_style}`}>
                        <ul>
                            {
                                list.map((item,index)=>{
                                    let active = (choice.indexOf(item.id)>-1)?styles.active:null;
                                    return (
                                        <li 
                                            key={index} 
                                            className={`${active}`} 
                                            value={item.id}  
                                            onClick={this.handleCheckToggle}>{item.name}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                
            </div>
		)
	}
}
Select.defaultProps={
    name:'Select',
}
Select.propTypes={
    name:PropTypes.string,
    list:PropTypes.array,
    choice:PropTypes.array,
}