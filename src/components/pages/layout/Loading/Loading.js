import React from 'react';
import styles from './Loading.module.css'
import loading from '../../../../img/loading.3a3d32d.gif'
export default function Loading() {
 return (
   <div className={styles.loader_container}>
       <img className={styles.loader} src={loading} alt='Loading' />
   </div>
 );
}