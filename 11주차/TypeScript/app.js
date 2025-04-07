// function logName(name : string) {
//     console.log(name);
// }
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// logName('kmg');
// let student = {
//     name : 'john',
//     course : 'typescript',
//     score : 100,
//     grade : function(){
//         console.log('A');
//     }
// }
// student.name = 'lee';
// student.score = 200;
// // 변수의 데이터 타입 명시
// let stdId : number = 1111;
// let stdName : string = 'lee';
// let age : number = 20;
// let gender : string = 'male';
// let course : string = 'Typescript';
// let completed : boolean = false;
// // 열거형 : 사용자 정의 타입
// enum GenderType {
//     Male,
//     Female
// }
// interface Student {
//     stdId : number;
//     stdName? : string;
//     age? : number;
//     gender? : 'male' | 'female';
//     course? : string;
//     completed? : boolean;
//     // setName(name : string) : void; 
//     setName : (name : string) => void; // 함수를 하나의 프로퍼티로 사용 
//     // getName : () => string;
// }
// class MyStudent implements Student{
//     stdId = 91011;
//     stdName = 'park';
//     age = 30;
//     gender : 'male' | 'female' = 'male';
//     course = 'node.js';
//     completed = true;
//     setName(name : string) : void { // 오버라이딩 
//         this.stdName = name;
//         console.log('이름 설정 : ' + this.stdName);
//     }
// }
// const myInstance = new MyStudent();
// myInstance.setName('앨리스');
// function getInfo(id : number) : Student
// {
//     return {
//         stdId : id,
//         stdName : 'lee',
//         // age : 20,
//         gender : 'female',
//         course : 'javascript',
//         completed : true,
//     };
// }
// let std = { // new 생략되어있는 것. 힙 메모리에 할당 
//     stdId : 91011,
//     stdName : 'park',
//     age : 30,
//     gender : 'male',
//     course : 'node.js',
//     completed : true,
// }
// function setInfo(student : Student) : void {
//     console.log(student);
// }
// setInfo(std);
// console.log(getInfo(5678));
// // 함수의 데이터 타입 명시 (매개변수, 리턴타입)
// function Plus(a : number, b : number) : number {
//     return a + b;
// }
// // 객체 타입 명시 
// const user : {name : string, age : number} = {
//     name : 'john',
//     age : 25
// };
// any 
// let anyVal : any = 100;
// anyVal = 'kim';
// union
// let numStr : number | string = '100';
// 타입별칭 
// type strOrNum = number | string;
// let numStr : strOrNum = '100';
// let item : number;
// function convertToString(val : strOrNum) : string {
//     if(typeof val == 'string') {
//         item = 0;
//     } else {
//         item = val;
//     }
//     return String(val);
// }
// function convertToNumber(val : strOrNum) : number {
//     return Number(val);
// }
// console.log(convertToString(numStr));
// console.log(convertToNumber(numStr));
// array
var numbers = [1, 2, 3, 4, 5]; // 숫자형 배열 기본 선언 형태
var fruits = ['apple', 'banana', 'orange']; // 문자열 배열 기본 선언 형태
for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// 배열의 유니온 타입
var mixedArray = [1, 'two', 3, 'four'];
for (var i = 0; i < mixedArray.length; i++) {
    console.log(mixedArray[i]);
}
var infer = [1, 2, 3]; // 타입 추론
for (var i = 0; i < infer.length; i++) {
    console.log(infer[i]);
}
var readOnlyArray = [1, 2, 3]; // 읽기 전용 -> 수정 불가 
// 튜플 : 여러 타입의 배열을 가지고 있고 타입의 순서가 정해져 있음. 자바스크립트엔 없음
var greeting = [1, 'heelo', true];
for (var i = 0; i < greeting.length; i++) {
    console.log(greeting[i]);
}
// Spread 연산자 -> 괄호를 풀어주는 역할 
var firstArray = [1, 2, 3];
var secondArray = [4, 5, 6];
var combineArray = __spreadArray(__spreadArray([], firstArray, true), secondArray, true); // spread연산자로 괄호를 풀어준 후 다시 묶어줌 
for (var i = 0; i < combineArray.length; i++) {
    console.log(combineArray[i]);
}
