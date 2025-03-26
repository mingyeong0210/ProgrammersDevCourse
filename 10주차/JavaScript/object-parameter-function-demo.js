// 일급 객체 실습 //
// 1. JS 함수는 함수의 실제 매개변수가 될 수 있다.
function foo(arg) {
    arg();
}

function bar() {
    console.log('bar');
}

foo(bar);

// 2. JS 함수는 함수의 반환값이 될 수 있다.
function foo(arg) {
    return arg;
}

function bar() {
    console.log('bar');
}

foo(bar)();

// 3. JS 함수는 할당명령문의 대상이 될 수 있다.
// 4. JS 함수는 동일 비교의 대상이 될 수 있다.
const foo = function (arg) {
    console.log(arg);
    return arg;
}

foo(1);


// 매개변수 실습 //
// 1. 기본값 매개변수 defualt function parameter
function foo(arg) {
    console.log(arg);
}

foo(); // console : undefined

function foo(arg = 1) {
    console.log(arg);
}

foo(); // console : 1

// 2. 나머지 매개변수 Rest parameter
function foo(arg, ...rest) {
    console.log(rest);
}

foo(1, 2, 3, 4);

// 3. arguments 객체
function foo(arg, ...rest) {
    console.log(arguments);
}

foo(1, 2, 3, 4);


// 함수 생성 방법 //
// 1. 함수 선언문
function foo() {
    console.log('foo');
};

foo();

// 2. 함수 표현식
const foo = function () {
    console.log('foo2');
};

foo();

// 3. Function 생성자 함수
const foo = new Function("console.log('foo3')");
foo();

// 4. 화살표 함수 표현식
const foo = () => {
    console.log('foo4');
}


// 함수의 여러가지 형태 //
// 1. IIFE (즉시 실행 함수)
(function foo() {
    console.log('foo');
})();

// 2. 재귀함수
function foo(arg) {
    if (arg === 3) return; // 탈출 조건
    
    console.log(arg);
    foo(arg + 1);
}

foo(1);


// 3. 중첩함수(내부함수)
function foo(arg) {
    function bar() {
        console.log(arg);
    }
    bar();
}

foo(1);

// 4. 콜백함수
function foo(arg) {
    arg();
}

foo(() => {
    console.log(1);
});