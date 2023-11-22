import React from 'react'
import { useState } from 'react';
import Node from './Node/Node'

const Branch = ({ item, level}) => {

    const hasChildren = item.children && item.children.length !== 0;

    const renderBranches = () => {
        if(hasChildren){
            const nextLevel = level + 1;
            return item.children.map((child) => {
                return <Branch key={child.id} item={child} level={nextLevel} />
            });
        }

        return null;
    }

    return(
        <>
            <Node
            item={item}
            hasChildren={hasChildren}
            level={level}
            />
            <button>+</button>
            {renderBranches()}
        </>
    );
};

export default Branch;