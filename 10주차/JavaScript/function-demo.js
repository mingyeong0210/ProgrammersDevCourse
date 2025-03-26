function introduce(name, ...rest) {
    console.log(`My name is ${name}`);
    study(rest[0]);
    favorite(rest[1]);
}

function study(subject) {
    console.log(`I'm studing ${subject}`);
}

function favorite(color) {
    console.log(`My favorite color is ${color}`);
}

introduce('민경', 'JS', '연보라색');

// 👇🏻 실행 결과 👇🏻
// My name is 민경
// I'm studing JS
// My favorite color is 연보라색