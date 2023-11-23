import React, {useContext} from 'react'
import Branch from '../Branch/Branch'
import styles from './Tree.module.css'
import {Context} from "../../providers/Context";

const Tree = ({data}) => {
    const {resetTree, addNode} = useContext(Context);

    return(
        <div className={styles.tree}>
            <button className='button add__button main__button' onClick={() => addNode(null)}>+</button>
            {
                data.map((item) =>
                        <Branch
                            key={item.id}
                            item={item}
                            level={0}
                        />

                )
            }
            <hr className={styles.line}></hr>
            <button className='button reset__button' onClick={resetTree}>Reset</button>
        </div>
    );
}

export default Tree;
