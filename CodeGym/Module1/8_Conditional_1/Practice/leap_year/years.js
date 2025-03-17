let years = prompt("Moi nhap mot nam");
if (years % 4 == 0 && !(years % 100 == 0)) {
    console.log("Nam nay la nam nhuan");
} else if (years % 100 == 0 && years % 400 == 0) {
    console.log("Nam nay la nam nhuan");
} else {
    console.log("Nam nay khong phai nam nhuan");
};