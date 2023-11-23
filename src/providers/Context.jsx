import React, {createContext, useState} from 'react';
import {setName, findNodeParent, countNodes} from "../utils";
import {TREE} from "../DefaultTree";

export const Context = createContext(null);

const NODE_COUNT = countNodes(TREE);

function TreeProvider({children}) {
    const [tree, setTree] = useState(JSON.parse(JSON.stringify(TREE)));
    const [nodeCount, setNodeCount] = useState(NODE_COUNT);

    const resetTree = () => {
        let treeCopy = JSON.parse(JSON.stringify(TREE));
        setTree(treeCopy);
        setNodeCount(NODE_COUNT); 
    };

    const addNode = (item) => {
        const name = setName();
        const newChild = {id: nodeCount + 1, name, children: []};
        if(item === null){
            tree.children = [...tree.children, newChild];
        } else {
            item.children = [...item.children, newChild];
        }
        setNodeCount(nodeCount + 1);
        setTree({...tree});
        console.log(tree);
    };

    const deleteNode = (item) => {
        let parentNode = findNodeParent(item, tree);
        parentNode.children = parentNode.children.filter(child => child !== item);
        setTree({...tree});
    }

    const editNode = (item) => {
        const name = setName();
        item.name = name;
        setTree({...tree});
    }

    return (
        <Context.Provider value={{tree, setTree, resetTree, addNode, deleteNode, editNode}}>
            {children}
        </Context.Provider>
    );
}

export default TreeProvider;
