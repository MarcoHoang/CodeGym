
    function pickingNumbers(arr) {
        // let n = parseInt(prompt("Enter a positive number: "));
        // if ( n > 100 || n < 2 || isNaN(n) ) {
        //     alert('Please enter n as a positive between 2 and 100!');
        //     return;
        // }
        // let arr = prompt(`Enter ${n} array elements separated by spaces (0 < arr[i] < 100)`).split(" ").map(Number);
        // if ( arr.length !== n ) {
        //     alert('The number of elements does not match n!');
        //     return;
        // } else {
        // for ( let i = 0; i < n; i++ ) {
        //     if ( arr[i] <= 0 || arr[i] >= 100 || isNaN(arr[i])) {
        //         alert('Please enter elements that are positive between 2 and 100!');
        //         return;
        //     } 
        // }
        let frequency = {}; // Lưu số lần xuất hiện của từng phần tử
        let maxLength = 0;
    
        // Đếm số lần xuất hiện của mỗi số trong mảng
        for (let n of arr) {
            frequency[n] = (frequency[n] || 0) + 1;
        }
    
        // Duyệt qua từng số trong object frequency
        for (let n in frequency) {
            n = parseInt(n);
            let count = frequency[n] + (frequency[n + 1] || 0);
            maxLength = Math.max(maxLength, count);
        }
    
        return maxLength;
    }
    
    // Đọc input từ console (phù hợp với HackerRank)
    if (typeof process !== "undefined") {
        process.stdin.resume();
        process.stdin.setEncoding('utf-8');
        let inputString = '';
    
        process.stdin.on('data', function(inputStdin) {
            inputString += inputStdin;
        });
    
        process.stdin.on('end', function() {
            let input = inputString.trim().split("\n");
            let n = parseInt(input[0]);
            let arr = input[1].split(" ").map(Number);
    
            console.log(pickingNumbers(arr));
        });
    }