// function logName(name : string) {
//     console.log(name);
// }

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
type strOrNum = number | string;

let numStr : strOrNum = '100';
let item : number;

function convertToString(val : strOrNum) : string {
    if(typeof val == 'string') {
        item = 0;
    } else {
        item = val;
    }

    return String(val);
}

function convertToNumber(val : strOrNum) : number {
    return Number(val);
}

console.log(convertToString(numStr));
console.log(convertToNumber(numStr));