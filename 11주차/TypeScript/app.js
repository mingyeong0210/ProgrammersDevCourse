// function logName(name : string) {
//     console.log(name);
// }
var numStr = '100';
var item;
function convertToString(val) {
    if (typeof val == 'string') {
        item = 0;
    }
    else {
        item = val;
    }
    return String(val);
}
function convertToNumber(val) {
    return Number(val);
}
console.log(convertToString(numStr));
console.log(convertToNumber(numStr));
