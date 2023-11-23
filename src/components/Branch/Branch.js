import React from 'react';
import Node from '../Node/Node';

const Branch = ({ item, level}) => {
    const hasChildren = item.children && item.children.length !== 0;

    const renderChildren = () =>
        item.children.map(child => <Branch key={child.id} item={child} level={level + 1}/>);


    return(
        <>
            <Node
                item={item}
                level={level}
            />
            {hasChildren && renderChildren()}
        </>
    );
};

export default Branch;
