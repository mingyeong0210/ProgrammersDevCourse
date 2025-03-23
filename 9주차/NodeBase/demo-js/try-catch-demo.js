let string = '{ "num1" :  1';

try {
    // username;
    let json = JSON.parse(string);
    console.log(json);
} catch(err) {
    console.log(err.name);
    console.log(err.message);
}