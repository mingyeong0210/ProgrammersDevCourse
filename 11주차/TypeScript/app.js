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
// 변수의 데이터 타입 명시
var stdId = 1111;
var stdName = 'lee';
var age = 20;
var gender = 'male';
var course = 'Typescript';
var completed = false;
// 열거형 : 사용자 정의 타입
var GenderType;
(function (GenderType) {
    GenderType[GenderType["Male"] = 0] = "Male";
    GenderType[GenderType["Female"] = 1] = "Female";
})(GenderType || (GenderType = {}));
var MyStudent = /** @class */ (function () {
    function MyStudent() {
        this.stdId = 91011;
        this.stdName = 'park';
        this.age = 30;
        this.gender = GenderType.Male;
        this.course = 'node.js';
        this.completed = true;
    }
    MyStudent.prototype.setName = function (name) {
        this.stdName = name;
        console.log('이름 설정 : ' + this.stdName);
    };
    return MyStudent;
}());
var myInstance = new MyStudent();
myInstance.setName('앨리스');
// function getInfo(id : number) : Student
// {
//     return {
//         stdId : id,
//         stdName : 'lee',
//         // age : 20,
//         gender : GenderType.Female,
//         course : 'javascript',
//         completed : true,
//     };
// }
// let std = { // new 생략되어있는 것. 힙 메모리에 할당 
//     stdId : 91011,
//     stdName : 'park',
//     age : 30,
//     gender : GenderType.Male,
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
