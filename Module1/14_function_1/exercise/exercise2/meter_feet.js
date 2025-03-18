function meterToFeet(meter) {
    return meter *  3.279;
};
let meter1 = parseFloat(prompt('Nhập vào 1 số thực: '));
let result1 = meterToFeet(meter1);
document.getElementById("feet").innerHTML = `${meter1} meter = ${result1} feet`;
function feetToMeter(feet) {
    return feet * 0.305;
};
let feet1 = parseFloat(prompt('Nhập vào 1 số thực: '));
let result2 = feetToMeter(feet1);
document.getElementById("meter").innerHTML = `${feet1} feet = ${result2} meter`;

