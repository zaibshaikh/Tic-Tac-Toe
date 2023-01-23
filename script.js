const grid = Array.from(document.querySelectorAll("td"));
let turn = "X";
let isGameOver = false;
const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

grid.forEach(cell => {
    cell.addEventListener("click", handleClick);
});

document.getElementById("resetButton").addEventListener("click", reset);

function handleClick(e) {
    if (!isGameOver && !e.target.textContent) {
        e.target.textContent = turn;
        checkForWin();
        turn = turn === "X" ? "O" : "X";
    }
}

function checkForWin() {
    let isWin = false;
    winCombinations.forEach(combo => {
        if (grid[combo[0]].textContent === turn &&
            grid[combo[1]].textContent === turn &&
            grid[combo[2]].textContent === turn) {
            isWin = true;
        }
    });
    if (isWin) {
        displayWinPopup(turn);
        isGameOver = true;
    }
}

function displayWinPopup(winner) {
    const winPopup = document.getElementById("winPopup");
    winPopup.style.display = "block";
    winPopup.textContent = `Player ${winner} wins!`;
    document.getElementById("okButton").addEventListener("click", reset);
}

function reset() {
    grid.forEach(cell => {
        cell.textContent = "";
    });
    isGameOver = false;
    document.getElementById("winPopup").style.display = "none";
    turn = "X";
}
