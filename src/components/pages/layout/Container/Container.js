import React from 'react';
import styles from './Container.module.css'

export default function layout(props) {
 return (
   <div className={`${styles.container} ${styles[props.customClass]}`}>
    {props.children}
   </div>
 );
}