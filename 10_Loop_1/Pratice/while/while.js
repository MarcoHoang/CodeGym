
// Exercise 1

let num;
let sum = 0;

while ( num !== -1 ) {
    num = Number(prompt('Nhập vào 1 số bất kỳ (Nhập -1 để dừng)'));
    console.log(num);
    sum += num;
    console.log('Tổng là', sum);
};

console.log('Tổng cuối là', sum);

