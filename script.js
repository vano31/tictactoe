//Tic Tac Toe

let makeNode = function(xvalue, yvalue) {
    label = [xvalue, yvalue];
    icon = "z";
    connections = [];

    return {xvalue, yvalue, label, icon, connections}

}

const Grid = function(xmax, ymax) {

    let NodeArray = [];

    for (let numbery = 0; numbery < ymax; numbery++) {

        for (let numberx = 0; numberx < xmax; numberx++) {

            newNode = makeNode(numberx, numbery);            
            NodeArray.push(newNode);
        }

    }

    for (let i = 0; i < NodeArray.length; i++) {

        let currentNode = NodeArray[i];
        
        let cxvalue = currentNode.xvalue;

        let cyvalue = currentNode.yvalue;
        
        let connectionNodes = NodeArray.filter(node => (node.label.toString() !== currentNode.label.toString()) &&  (node.label.toString() === [cxvalue, cyvalue + 1].toString() || node.label.toString() === [cxvalue, cyvalue - 1].toString() || node.label.toString() === [cxvalue + 1, cyvalue].toString() || node.label.toString() === [cxvalue - 1, cyvalue].toString() || node.label.toString() === [cxvalue + 1, cyvalue + 1].toString() || node.label.toString() === [cxvalue - 1, cyvalue - 1].toString() || node.label.toString() === [cxvalue - 1, cyvalue + 1].toString() || node.label.toString() === [cxvalue + 1, cyvalue - 1].toString()));
        
        currentNode['connections'] = connectionNodes;

    }

    return NodeArray;

};




//nodearray filter must be done AFTER all nodes are generated
//let connectedNodes = NodeArray.filter(node => node.label[0] === newNode.label[0] || node.label[0] === newNode.label[0] + 1 || node.label[0] === newNode.label[0] - 1 || node.label[1] === newNode.label[1] || node.label[1] === newNode.label[1] + 1 || node.label[1] === newNode.label[1] - 1);
//newNode.connections = connectedNodes;


