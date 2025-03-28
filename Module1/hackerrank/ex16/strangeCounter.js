function strangeCounter(t) {
    let cycleStart = 1; 
    let value = 3; 

    while ( t >= cycleStart + value ) {
        cycleStart += value;  
        value *= 2;  
    }

    return value - (t - cycleStart);
}