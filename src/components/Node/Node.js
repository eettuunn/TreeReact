import React from 'react'
import styles from './Node.module.css'

const Node = ({ item, hasChildren, level, onToggle }) => {
    return (
        <div className={styles.node} style={{ marginLeft: `${level * 64}px` }}>
            {item.name}

            {/* {hasChildren && <button onClick={onToggle}>toggle</button>} */}
        </div>
    );
};

export default Node;