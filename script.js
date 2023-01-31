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

    //YOU FORGOT- YOU ALSO HAVE TO CHANGE THE NODE ICONS, NOT JUST THE DOM CLASS
    //Create a function called turnSwitcher that assigns the cpu to a symbol that you are not using and switches between you and the cpu
    /*
    const turnSwitcher = function(boardSquares, classToCheck) {
        if (boardSquares )

    }
    */

    boardtiles.forEach(tile => {
        tile.addEventListener(`click`, function(e) {
            let t = e.target;
            if (t.classList.contains('unfilled')) {
                console.log(t);
                if (user1 === `x` || user1 === 'X') {
                    t.className = `tile filled-x`;
                    //Find the unique id for t, convert it into an array, find the index of the board node that has the same label as the id, and change the icon to either x or o
                    for (let x = 0; x < board.length; x++) {
                        if (board[x].boardId === t.id) {
                            board[x].icon = `x`;
                            break;
                        }
                    }
                }   else if (user1 === `o` || user1 === 'O') {
                    t.className = `tile filled-o`;
                     //Find the unique id for t, convert it into an array, find the index of the board node that has the same label as the id, and change the icon to either x or o
                    for (let x = 0; x < board.length; x++) {
                        if (board[x].boardId === t.id) {
                            board[x].icon = `o`;
                            break;
                        }
                    }
                }
                //t.className = `tile filled-x`;
            }
        })
    })

    /*

    let iconchanger = function() {
        for(tile in tiles) {
            if (tile.className === `tile unfilled`) {
                tile.className === `tile filled-x`

            }
        }
    }

    */

  
    console.log(board, boardtiles);
    return { board, boardtiles, user1, comp1}

    
    //Create a function named tileSwitcher
    //tileSwitcher is a timer that switches between 

}

let {board, boardtiles, user1, comp1} = tictactoe();






//nodearray filter must be done AFTER all nodes are generated
//let connectedNodes = NodeArray.filter(node => node.label[0] === newNode.label[0] || node.label[0] === newNode.label[0] + 1 || node.label[0] === newNode.label[0] - 1 || node.label[1] === newNode.label[1] || node.label[1] === newNode.label[1] + 1 || node.label[1] === newNode.label[1] - 1);
//newNode.connections = connectedNodes;


