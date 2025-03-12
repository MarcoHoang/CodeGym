let username = prompt ("Nhap vao tai khoan");

if (username == 'Admin') {
    let password = prompt ("Nhap mat khau");
    if (password == 'TheMaster') {
        console.log('Welcome');
    } else if (password == null) {
        console.log('Canceled');
    } else {
        console.log('Wrong password');
    }
} else if ( username == null) {
    console.log('Canceled');
} else {
    console.log("I don't know");
};