import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Loader from './Loader';
import styles from './styles.css'

export default class ButtonLoader extends Component {
  render() {
    const {
      children,
      isLoading,
      ...props,
    } = this.props;

    return (
      <button className={styles.button} {...props}>
        {isLoading && <Loader />}
        {!isLoading && children}
      </button>
    )
  }
}
