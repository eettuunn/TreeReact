import React, {createContext, useState} from 'react';
import {TREE} from "../DefaultTree";

export const Context = createContext(null);

function TreeProvider({children}) {
    const [tree, setTree] = useState(TREE);

    return (
        <Context.Provider value={{tree, setTree}}>
            {children}
        </Context.Provider>
    );
}

export default TreeProvider;
