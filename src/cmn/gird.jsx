import React from 'react';
import Layout from '../containers/layout';
import styles from 'styles';
import Title from './title.jsx';
import Gird from '../components/Gird';
import GirdCenter from '../components/GirdCenter';

export default class gird extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		const style = {
			
		}
		return (
            <Layout>
            <div className={styles.contentComponent}>
                <Title name={"Gird"} />
                <div>
                    <h2>Default</h2>
                    <Gird>
                        <div>
                            <h4>Title</h4>
                            <p>Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks</p>
                        </div>
                        <div>
                            <h4>Title</h4>
                            <p>Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks</p>
                        </div>
                    </Gird>
                    <h2>2 column</h2>
                    <Gird number={2}>
                        <div>
                            <h4>Title</h4>
                            <p>Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks</p>
                        </div>
                        <div>
                            <h4>Title</h4>
                            <p>Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks</p>
                        </div>
                        <div>
                            <h4>Title</h4>
                            <p>Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks</p>
                        </div>
                        <div>
                            <h4>Title</h4>
                            <p>Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks</p>
                        </div>
                        <div>
                            <h4>Title</h4>
                            <p>Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks</p>
                        </div>
                        <div>
                            <h4>Title</h4>
                            <p>Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks</p>
                        </div>
                        <div>
                            <h4>Title</h4>
                            <p>Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks</p>
                        </div>
                        <div>
                            <h4>Title</h4>
                            <p>Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks</p>
                        </div>
                        <div>
                            <h4>Title</h4>
                            <p>Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks</p>
                        </div>
                    </Gird>
                    <h2>3 column</h2>
                    <Gird number={3}>
                        <div>
                            <h4>Title</h4>
                            <p>Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks</p>
                        </div>
                        <div>
                            <h4>Title</h4>
                            <p>Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks</p>
                        </div>
                        <div>
                            <h4>Title</h4>
                            <p>Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks</p>
                        </div>
                        <div>
                            <h4>Title</h4>
                            <p>Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks</p>
                        </div>
                        <div>
                            <h4>Title</h4>
                            <p>Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks</p>
                        </div>
                        <div>
                            <h4>Title</h4>
                            <p>Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks</p>
                        </div>
                        <div>
                            <h4>Title</h4>
                            <p>Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks</p>
                        </div>
                        <div>
                            <h4>Title</h4>
                            <p>Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks</p>
                        </div>
                        <div>
                            <h4>Title</h4>
                            <p>Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks</p>
                        </div>
                    </Gird>
                    <h2>1 column and center sm</h2>
                    <GirdCenter>
                        <div>
                            <h4>Title</h4>
                            <p>Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks</p>
                            <p>Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks</p>
                            <p>Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks</p>
                        </div>
                    </GirdCenter>
                    <h2>1 column and center md</h2>
                    <GirdCenter width={'md'}>
                        <div>
                            <h4>Title</h4>
                            <p>Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks</p>
                            <p>Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks</p>
                            <p>Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks</p>
                        </div>
                    </GirdCenter>
                    <h2>1 column and center xl</h2>
                    <GirdCenter width={'xl'}>
                        <div>
                            <h4>Title</h4>
                            <p>Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks</p>
                            <p>Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks</p>
                            <p>Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks</p>
                        </div>
                    </GirdCenter>
                </div>
            </div>
            </Layout>
		)
	}
}