var sudoku = [
    [0, 0, 0, 2, 6, 0, 7, 0, 1],
    [6, 8, 0, 0, 7, 0, 0, 9, 0],
    [1, 9, 0, 0, 0, 4, 5, 0, 0],
    [8, 2, 0, 1, 0, 0, 0, 4, 0],
    [0, 0, 4, 6, 0, 2, 9, 0, 0],
    [0, 5, 0, 0, 0, 3, 0, 2, 8],
    [0, 0, 9, 3, 0, 0, 0, 7, 4],
    [0, 4, 0, 0, 5, 0, 0, 3, 6],
    [7, 0, 3, 0, 1, 8, 0, 0 ,0]];
function sudokuSolver(sudoku){
var nonPossibilities = {},
impossibleNumbers,


    for(var v= 0;v< sudoku.length; v++){
        for(var h = 0; h < sudoku.length; h++){
            nonPossibilities= {};
            if(sudoku[v][h] === 0){
                for(var i = 0; i < 9; i++){
                    if(sudoku[v][i] > 0){
                        nonPossibilities[sudoku[v][i]] = true;
                    }
                    if(sudoku[i][h] > 0){
                        nonPossibilities[sudoku[i][h]] = true;
                    }
                }