const blocks = document.querySelectorAll(".block");
const output = document.querySelector(".output");
console.log(blocks);

let r = 0;

let blocksMatrix = [["*", "*", "*"],
["*", "*", "*"],
["*", "*", "*"]];

output.onclick = () => {
    output.innerText = "The game is in progress";
    startGame();
}
function startGame() {
    blocks.forEach((ell) => {
        ell.onclick = addDatasetIndex;
    });

}


let counter = 0;
function addDatasetIndex(event) {
    if (event.target.innerText) {
        return;
    }
    event.target.dataset.index = r;
    r++;
    if (+(event.target.dataset.index) % 2 === 0) {
        event.target.innerText = "X";
        blocksMatrix[+event.target.dataset.matrixj][+event.target.dataset.matrixi] = "X";
    }
    else {
        event.target.innerText = "O";
        blocksMatrix[+event.target.dataset.matrixj][+event.target.dataset.matrixi] = "O";
    }
    counter++;
    if (counter === 9) {
        output.innerText = "Game ended in a draw";
        start();
    }
    if ((blocksMatrix[0][0] == 'X' && blocksMatrix[1][1] == 'X' && blocksMatrix[2][2] == 'X')
        || (blocksMatrix[0][0] == 'X' && blocksMatrix[1][0] == 'X' && blocksMatrix[2][0] == 'X')
        || (blocksMatrix[2][0] == 'X' && blocksMatrix[1][1] == 'X' && blocksMatrix[0][2] == 'X')
        || (blocksMatrix[0][2] == 'X' && blocksMatrix[1][2] == 'X' && blocksMatrix[2][2] == 'X')
        || (blocksMatrix[0][0] == 'X' && blocksMatrix[0][1] == 'X' && blocksMatrix[0][2] == 'X')
        || (blocksMatrix[1][0] == 'X' && blocksMatrix[1][1] == 'X' && blocksMatrix[1][2] == 'X')
        || (blocksMatrix[2][0] == 'X' && blocksMatrix[2][1] == 'X' && blocksMatrix[2][2] == 'X')
        || (blocksMatrix[2][0] == 'X' && blocksMatrix[1][1] == 'X' && blocksMatrix[0][2] == 'X')
        || (blocksMatrix[0][1] == 'X' && blocksMatrix[1][1] == 'X' && blocksMatrix[2][1] == 'X')) {
        output.innerText = "Winner is X";
        start();

    }
    if ((blocksMatrix[0][0] == 'O' && blocksMatrix[1][1] == 'O' && blocksMatrix[2][2] == 'O')
        || (blocksMatrix[0][0] == 'O' && blocksMatrix[1][0] == 'O' && blocksMatrix[2][0] == 'O')
        || (blocksMatrix[2][0] == 'O' && blocksMatrix[1][1] == 'O' && blocksMatrix[0][2] == 'O')
        || (blocksMatrix[0][2] == 'O' && blocksMatrix[1][2] == 'O' && blocksMatrix[2][2] == 'O')
        || (blocksMatrix[0][0] == 'O' && blocksMatrix[0][1] == 'O' && blocksMatrix[0][2] == 'O')
        || (blocksMatrix[1][0] == 'O' && blocksMatrix[1][1] == 'O' && blocksMatrix[1][2] == 'O')
        || (blocksMatrix[2][0] == 'O' && blocksMatrix[2][1] == 'O' && blocksMatrix[2][2] == 'O')
        || (blocksMatrix[2][0] == 'O' && blocksMatrix[1][1] == 'O' && blocksMatrix[0][2] == 'O')
        || (blocksMatrix[0][1] == 'O' && blocksMatrix[1][1] == 'O' && blocksMatrix[2][1] == 'O')) {
        output.innerText = "Winner is O";
        start();
    }

}
    function start() {
        output.classList.add("act");
        setInterval(() => {
            output.classList.remove("act");
            output.innerText = "The game will start again soon";
        }, 5000);
        refresh();
    }

    

function refresh() {
   setInterval(() => {
         window.location.reload("Refresh")
    }, 10000);
}