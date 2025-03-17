
function inputvalue(value) {
    document.getElementById('caculator').value += value;
};
function outputvalue() {
    let bt = document.getElementById('caculator').value;
    let result = eval(bt);
    document.getElementById('caculator').value = result;
};