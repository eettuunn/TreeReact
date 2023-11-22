import React from 'react'
import Branch from '../Branch'
import styles from './Tree.module.css'

const Tree = ({data}) => {
    return(
        <div className={styles.tree}>
            {data.map((item) => <Branch key={item.id} item={item} level={0} />)}
        </div>
    );
}

export default Tree;