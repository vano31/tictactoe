//Tic Tac Toe

let makeNode = function(xvalue, yvalue) {
    label = [xvalue, yvalue];
    boardId = `${xvalue},${yvalue}`
    icon = "z";
    connections = [];

    return {xvalue, yvalue, label, icon, connections, boardId}

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

let bbtiles = document.querySelectorAll(`.tile`);

//Create a function called symbolChooser that allows you to decide which symnbol you want to use upon refresh


const symbolChooser = function() {
    let comp1;
    let user1 = prompt(`Type x or o to be either X or O in Tic Tac Toe!`);
    if (user1 !== `x` && user1 !== `o` && user1 !== `X` && user1 !== `o`) {
        alert(`Sorry, that was an incorrect choice. Please refresh the page and try again.`);
    }   else {
        if (user1 === `x` || user1 === `X`) {
            comp1 = `o`
        }   else if (user1 === `o` || user1 === `O`) {
            comp1 = `x`
        }
        return {user1, comp1};
    }
}



const tictactoe = function() {
    //Use the symbolChooser function here
    let {user1, comp1} = symbolChooser();

    let board = Grid(3,3);
    let boardtiles = document.querySelectorAll('.tile');

    
    ///////////////////////////////////////////////////////////////

    let unusedNodes = [];
    for (let x = 0; x < board.length; x++) {
        unusedNodes[x] = board[x];
    }

    
    
    let computerTurn = function() {

        //let randomNumber = Math.random(between 0 and unusedNodes.length-1)
        let randomNumber = Math.floor(Math.random() * unusedNodes.length);
        console.log(randomNumber);

        let chosenNodeboardId = unusedNodes[randomNumber].boardId
        console.log(chosenNodeboardId);

        for (let x = 0; x < board.length; x++) {

            if (board[x].boardId === chosenNodeboardId) {
                board[x].icon = `${comp1}`;
                
                for (let y = 0; y < boardtiles.length; y++) {

                    if (boardtiles[y].id === chosenNodeboardId) {
                        //board[x].icon = `${comp1}`;
                        boardtiles[y].className = `tile filled-${comp1}`;
                        unusedNodes.splice( (unusedNodes).indexOf(board[x]), 1 );
                        break;
                    }
                    

                }
                break;
            }
        
        }

    }

    ////////////////////////////////////////////////////////////////


    //////////////////////////////////////////////////////////////////////////////////////////////////

    //DFS Implementation of Finding the Winner of Tic Tac Toe



    let winChecker = function(node) {
        
    }





    ///////////////////////////////////////////////////////////////////////////////////////////////////

    boardtiles.forEach(tile => {
        tile.addEventListener(`click`, function(e) {
            let t = e.target;
            if (t.classList.contains('unfilled')) {
                console.log(t);
                if (user1 === `x` || user1 === 'X') {
                    t.className = `tile filled-x`;
                    //Find the unique id for t, find the index of the board node that has the same boardId as the id, and change the icon to x
                    for (let x = 0; x < board.length; x++) {
                        if (board[x].boardId === t.id) {
                            board[x].icon = `x`;
                            //everytime a symbol as added via user, remove the node from unusedNodes;
                            unusedNodes.splice( (unusedNodes).indexOf(board[x]), 1 );
                            computerTurn();
                            break;
                        }
                    }
                }   else if (user1 === `o` || user1 === 'O') {
                    t.className = `tile filled-o`;
                     //Find the unique id for t, find the index of the board node that has the same boardId as the id, and change the icon to o
                    for (let x = 0; x < board.length; x++) {
                        if (board[x].boardId === t.id) {
                            board[x].icon = `o`;
                            //everytime a symbol as added via user, remove the node from unusedNodes;
                            unusedNodes.splice( (unusedNodes).indexOf(board[x]), 1 );
                            computerTurn();
                            break;
                        }
                    }
                }
                
            }
        })
    })

   

  
    console.log(board, boardtiles);
    return { board, boardtiles, user1, comp1, unusedNodes}


}

let {board, boardtiles, user1, comp1, unusedNodes} = tictactoe();






//nodearray filter must be done AFTER all nodes are generated
//let connectedNodes = NodeArray.filter(node => node.label[0] === newNode.label[0] || node.label[0] === newNode.label[0] + 1 || node.label[0] === newNode.label[0] - 1 || node.label[1] === newNode.label[1] || node.label[1] === newNode.label[1] + 1 || node.label[1] === newNode.label[1] - 1);
//newNode.connections = connectedNodes;


