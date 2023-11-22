import './index.css';
import Tree from './components/Tree/Tree'
import {useContext} from "react";
import {Context} from "./providers/Context";

const App = () => {
    const {tree} = useContext(Context);

    return <Tree data={tree.children} />
}

export default App;
