import React, { Component } from 'react';
import styles from './styles.css'
import loaderSvg from './loader.svg';

export default class Loader extends Component {
  render() {
    return (
    	<div className={styles.loader}>
    		<img src={loaderSvg} />
    	</div>
    )
  }
}
