
function permutationEquation(arr, n) {
    let y = 0;
    let newArr = [];
    for ( let i =1; i <= n; i++ ) {
        y = arr.indexOf(arr.indexOf(i) + 1) + 1;
        newArr.push(y);
    }
    return newArr;
}

let arr = [5, 2, 1, 3 ,4];
console.log(permutationEquation(arr, 5));