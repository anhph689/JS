$(document).ready(function(){
    const $boardElement = $(".board")
    const $messageElement = $("#message")
    const $resetElement = $("#reset")

    const boardSize = 10
    const winCondition = 5
    let currentPlayer = "X"
    let gameOver = false
    let board = []
    
    function initBoard(){
        board = []
        for(let i = 0; i < boardSize; i++){
            board[i] = []
            for(let j = 0; j < boardSize; j++){
                board[i][j] = null
            }
        }
        console.log(board);
    }

    function createBoard(){
        $boardElement.empty();
        for(let i = 0; i < boardSize; i++){
            for(let j = 0; j < boardSize; j++){
                const $cell = $("<div>")
                    .attr('data-row', i)
                    .attr('data-col', j)
                    .click(function(){
                        handleMove(i, j)
                    })
                
                $boardElement.append($cell)
            }
        }
    }

    function handleMove(row, col){
        if(board[row][col] !== null || gameOver) return

        board[row][col] = currentPlayer
        const $cell = $boardElement.find(`[data-row=${row}][data-col=${col}]`)
        currentPlayer = currentPlayer == "X" ? "O" : "x"
        console.log(board);
    }

    initBoard() //Tạo mảng board 2 chiều với các giá trị null
    createBoard() //render bàn cờ sang html
})