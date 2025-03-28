function howManyGames(p, d, m, s) {
    let count = 0;
    let total = p;
    for ( let i = 1; i <= Math.floor((p - m) / d); i++ ) {
        if ( total <= s ) {
            total += (p - i * d);
            count++;
        }
    }
    while ( total <= s ) {
        total += m;
        count++;
    }
    return count;
}

console.log(howManyGames(20, 3, 6, 85));