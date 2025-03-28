function timeInWords(h, m) {
    const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "quarter", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty one", "twenty two", "twenty three", "twenty four", "twenty five", "twenty six", "twenty seven", "twenty eight", "twenty nine", "half"];

    if ( m === 0 ) {
        return `${numbers[h]} o' clock`;
    } else if ( m === 1 ) {
        return `${numbers[m]} minute past ${numbers[h]}`;
    } else if ( m === 59 ) {
        return `${numbers[60 - m]} minute to ${numbers[h + 1]}`;
    } else if ( m === 15 || m === 30 ) {
        return `${numbers[m]} past ${numbers[h]}`;
    } else if ( m ===45 ) {
        return `${numbers[60 - m]} to ${numbers[h + 1]}`;
    }else if ( 0 < m && m < 30 ) {
        return `${numbers[m]} minutes past ${numbers[h]}`;
    } else if ( 30 < m && m < 60 ) {
        return `${numbers[60 - m]} minutes to ${numbers[h + 1]}`;
    } 
}

console.log(timeInWords(5, 30));