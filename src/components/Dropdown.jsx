import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styles from 'styles';
export default class Dropdown extends React.Component{
	constructor(props){
        super(props);
        this.state={
            icon:'arrow_drop_down',
            open:false,
        }
    }
    handerClick = (e) =>{
        e.preventDefault();
        this.setState({
            open: !this.state.open,
            icon: (this.state.open!=true)?'arrow_drop_up':'arrow_drop_down'
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
        let {name} = this.props;
        let {icon,open} = this.state;
        let openStyle = (open)?styles.btn_dropdown_content_open:null;
		return (
                <div className={styles.btn_dropdown}>
                    <div onClick={this.handerClick} className={styles.btn_dropdown_title}>{name}<i className={styles.material_icons}>{icon}</i></div>
                    <div className={`${styles.btn_dropdown_content} ${openStyle}`}>
                        {
                            this.props.children
                        }
                    </div>
                </div>
		)
	}
}
Dropdown.defaultProps={
    name:'Dropdown',
}
Dropdown.propTypes={
    name:PropTypes.string,
}