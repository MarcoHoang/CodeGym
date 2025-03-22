function start() {
    document.getElementById('game-board').innerHTML = "";
    createTable(20,20);
}

function createTable(rows, cols) {
    let table = document.createElement("table");
    table.style.borderCollapse = "collapse";
    let turn = true;
    let board = Array(rows).fill(null).map(() => Array(cols).fill(null)); // Tạo mảng 2 chiều
    
    for (let i = 0; i < rows; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < cols; j++) {
            let td = document.createElement("td");
            td.style.border = "1px solid black";
            td.style.width = "20px";
            td.style.height = "20px";
            td.style.textAlign = "center";
            td.innerText = "";
            td.dataset.row = i;
            td.dataset.col = j;
            
            td.addEventListener("click", function() {    // khi nhấn vào ô thì hàm được thực thi
                if ( !board[i][j] ) {
                    let caro =  turn ? 'x' : 'o';
                    board[i][j] = caro;
                    td.innerText = caro;
                    if ( checkWin(i, j, caro, board) ) {
                        setTimeout(() => {
                            alert(`Người chơi ${caro} thắng 🎉🎉🎉`);
                        }, 100); 
                        setTimeout(() => {
                            alert(`Hãy nhấn vào ô start nếu bạn muốn chơi lại`);
                        }, 1000)
                    }
                    turn = !turn;
                }
            });
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    
    document.getElementById('game-board').appendChild(table);
}

function checkWin(i, j, caro, board) {
    return checkDirection(i, j, caro, board, 0, 1) ||
           checkDirection(i, j, caro, board, 1, 0) ||
           checkDirection(i, j, caro, board, -1, 1) ||
           checkDirection(i, j, caro, board, 1, -1);
}

function checkDirection(i, j, caro, board, rowDir, colDir) {
    let count = 1;
    count += caroCount(i, j, caro, board, rowDir, colDir);
    count += caroCount(i, j, caro, board, -rowDir, -colDir);
    return count >= 5;
}

function caroCount(i, j, caro, board, rowDir, colDir) {
    let count = 0;
    let newRow = i + rowDir;
    let newCol = j + colDir;
    while ( newRow >= 0 && newRow < board.length && newCol >= 0 && newCol < board[0].length && board[newRow][newCol] === caro ) {
        count++;
        newRow += rowDir;
        newCol += colDir;
    }
    return count;
}

start();

