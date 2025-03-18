function min_array(arr) {
    if ( arr.length == 0) {
        alert('Đây là mảng rỗng!')
    } else {
    let min = arr[0];
    for ( let i = 0; i < arr.length; i++ ) {
        if ( min > arr[i] ) {
            min = arr[i];
        }
    }
    return min;
}
}

arr1 = [3, 5, 1, 8, -3, 7, 8];
arr2 = [7, 12, 6, 9, 20, 56, 89]
arr3 = []
arr4 = [0, 0, 0, 0, 0, 0]

let min_arr3 = min_array(arr3);
alert(min_arr3);