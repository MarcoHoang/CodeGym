let num;
do {
    num = Number(prompt('Nhập vào 1 só từ 1->10'));
} while (num < 1 || num > 10);
console.log('Số bạn nhập là:'+ num);
