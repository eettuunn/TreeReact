const setName = (nodeName) => {
    let name = prompt('Введите текст', nodeName ?? 'Node');
    if(name === null || name === ""){
        return setName(nodeName);
    } else {
        return name;
    }
};

const findNodeParent = (node, parentNode) => {
    let nodeIndex = parentNode.children.indexOf(node);
    if(nodeIndex !== -1){
        return parentNode;
    }

    for(let child of parentNode.children){
        if(child.children.length > 0){
            let parent = findNodeParent(node, child);
            if(parent){
                return parent;
            }
        }
    }

    return null;
};

let nodeCounter = 0;
const countNodes = (tree) => {
    for(let child of tree.children){
        nodeCounter++;
        countNodes(child);
    }

    return nodeCounter;

}

export {
    setName,
    findNodeParent,
    countNodes
}

