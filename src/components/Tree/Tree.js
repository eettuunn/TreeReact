import React, {useContext} from 'react'
import Branch from '../Branch'
import styles from './Tree.module.css'
import {Context} from "../../providers/Context";

const Tree = ({data}) => {
    const {tree, setTree} = useContext(Context);

    const addNewNode = () => {
        const name = prompt('Введите текст','Node');
        const newChild = {id: '6', name, children: []};
        tree.children = [...tree.children, newChild];
        setTree({...tree});
    };

    return(
        <div className={styles.tree}>
            <button className='button add__button main__button' onClick={addNewNode}>+</button>
            {
                data.map((item) =>
                        <Branch
                            key={item.id}
                            item={item}
                            level={0}
                        />

                )
            }
        </div>
    );
}

export default Tree;
