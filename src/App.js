import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Tree from './components/Tree/Tree'
import { TREE } from './DefaultTree'

const Person = (props) => {
  return <>
  <h1>{props.name ?? "Danil"}</h1>
  <h2>Grasmik</h2>
  </>
}

const App = () => {
return (
  <div className='App'>
    <Tree data={TREE} />
  </div>
)
}

export default App;
