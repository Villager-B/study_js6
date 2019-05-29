for (let i = 0; i <= 10; i++) {
    console.log(i);
}

let xx = ["red", 'blue', 'yellow']

for (let i in xx) {
    console.log(xx[i]);
}
console.log('\n');
var set = new Set();
set.add('Takana');
set.add('Suzuko');
for (let value of set) {
    console.log(value);
}
for (let i of xx) {
    console.log(i)
}