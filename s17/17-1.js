date_0 = new Date(2019, 11, 3)
date_now = new Date()
console.log(date_0)
console.log(date_now)

var date = new Date();
var str = date.getFullYear()
    + '/' + ('0' + (date.getMonth() + 1)).slice(-2)
    + '/' + ('0' + date.getDate()).slice(-2)
    + ' ' + ('0' + date.getHours()).slice(-2)
    + ':' + ('0' + date.getMinutes()).slice(-2)
    + ':' + ('0' + date.getSeconds()).slice(-2)
    + '(JST)';
console.log(str);

slice_s = "123456789".slice(-2)
console.log(slice_s)