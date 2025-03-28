function encryption(s) {
    s = s.replace(/\s+/g, "");
    let arr = s.split("");
    let rows = Math.floor(Math.sqrt(arr.length));
    let cols = Math.ceil(Math.sqrt(arr.length))

    if (rows * cols < arr.length) rows++;

    let newArr = Array.from({ length: rows }, () => []);
    
    for ( let i = 0; i < arr.length; i++ ) {
        let row = Math.floor(i / cols);
        newArr[row].push(arr[i]);
    }
    let result = [];
    for ( let i = 0; i < newArr[0].length; i++ ) {
        let row = [];
        for ( let j = 0; j < newArr.length; j++ ) {
            if ( newArr[j][i] !== undefined ) {
                row.push(newArr[j][i]);
            }
        }
        result.push(row.join(""));
    }
    return result.join(" ");
}

console.log(encryption("if man was meant to stay on the ground god would have given us roots"));
