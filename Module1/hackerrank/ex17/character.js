function alternate(char) {
    let maxLength = 0;
    let uniqueChar = [...new Set(char)]; // lấy các ký tự xuất hiện ít nhất 1 lần trong chuỗi vào 1 mảng 

    for ( let i = 0; i < uniqueChar.length; i++ ) {
        for ( let j = i + 1; j < uniqueChar.length; j++ ) {
            let char1 = uniqueChar[i];
            let char2 = uniqueChar[j];

            let twoChar = char.split("").filter(c => c === char1 || c === char2).join("");  // chuỗi mới chỉ có 2 ký tự

            if(isAlternating(twoChar)) {
                maxLength = Math.max(maxLength, twoChar.length);
            }
        }
    }
    return maxLength;
}

function isAlternating(arr) {
    for ( let i = 0; i < arr.length - 1; i++ ) {
        if ( arr[i] === arr[i + 1] ) {
            return false;
        }
    }
    return true;
}

console.log(alternate("asvkugfiugsalddlasguifgukvsa"));