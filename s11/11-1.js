let name = "tomato"
let str = `ようこそ ${name} さん`
console.log(str)

var str2 = '{"width":160, "height":120}';
var obj = JSON.parse(str2);
console.log(obj);  // {width: 160, height: 120}
var str3 = JSON.stringify(obj);  // {"width":160,"height":120}
console.log(str3)