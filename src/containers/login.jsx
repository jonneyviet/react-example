import React from 'react';
import styles from 'styles';

export default class login extends React.Component{
    render(){
        return (
            <div>
                <div className={styles._login_container}>
                    <div className={styles._login_form}>
                        <h1>Login</h1>
                        <div className={styles._login_input}>
                            <i className={styles.material_icons}>email</i>
                            <input type="text" placeholder="Email"/>
                        </div>
                        <div className={styles._login_input}>
                            <i className={styles.material_icons}>vpn_key</i>
                            <input type="password"/>
                        </div>
                        <div>
                            <button className={styles._login_btn}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}