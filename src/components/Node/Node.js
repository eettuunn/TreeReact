import React, {useContext} from 'react'
import styles from './Node.module.css'
import {Context} from "../../providers/Context";

const Node = ({ item, level }) => {
    const {addNode, editNode, deleteNode} = useContext(Context);

    return (
        <div className={styles.nodeWrapper}>
            <div className={styles.node} style={{ marginLeft: `${level * 64}px` }}>
                {item.name}
            </div>
            <button className='button add__button' 
                onClick={() => addNode(item)}>+</button>
            <button className='button edit__button' 
                onClick={() => editNode(item)}>✎</button>
            <button className='button del__button' 
                onClick={() => deleteNode(item)}>x</button>
        </div>

    );
};

export default Node;
