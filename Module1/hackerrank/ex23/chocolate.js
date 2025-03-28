function chocolateFeast(n, c, m) {
    let x = Math.floor(n / c);
    let count = x;
    while ( x >= m ) {
        count += Math.floor(x / m);
        x = Math.floor(x / m) + (x % m);
    }
    return count;
}

console.log(chocolateFeast(12, 4, 4));