function utopianTree() {
    let n = parseInt(prompt('Nhập vào chu kỳ sinh trưởng của cây: '));
    let h = parseInt(prompt('Nhập vào chiều cao của cây: '));
    for ( let i = 1; i <= n; i++ ) {
        if ( i % 2 !== 0 ) {
            h = h * 2;
        } else {
            h = h + 1;
        }
    }
    return h;
}
console.log(utopianTree());