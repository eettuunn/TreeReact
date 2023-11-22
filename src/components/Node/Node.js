import React, {useContext, useState} from 'react'
import styles from './Node.module.css'
import {setName} from "../../utils";
import {Context} from "../../providers/Context";

const Node = ({ item, level }) => {
    const {tree, setTree} = useContext(Context);

    const addNewNode = () => {
        const name = setName();
        const newChild = {id: '6', name, children: []};
        item.children = [...item.children, newChild]
        setTree({...tree});
    };

    return (
        <div className={styles.nodeWrapper}>
            <div className={styles.node} style={{ marginLeft: `${level * 64}px` }}>
                {item.name}
            </div>
            <button className='button add__button' onClick={addNewNode}>+</button>
            <button className='button edit__button'>✎</button>
            <button className='button del__button'>x</button>
        </div>

    );
};

export default Node;
