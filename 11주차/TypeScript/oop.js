// 일반적인 직원 정보
// let empName : string;
// let age : number;
// let empJob : string;
// function printEmp(empName : string, age : number, empJob : string) : void {
//     console.log(`${empName}의 나이는 ${age}이고, 직업은 ${empJob}입니다.`);
// }
var Employee = /** @class */ (function () {
    function Employee() {
        var _this = this;
        // 멤버 함수 == 메소드 
        this.printEmp = function () {
            console.log("".concat(_this.empName, "\uC758 \uB098\uC774\uB294 ").concat(_this.age, "\uC774\uACE0, \uC9C1\uC5C5\uC740 ").concat(_this.empJob, "\uC785\uB2C8\uB2E4."));
        };
    }
    return Employee;
}());
var employee1 = new Employee(); // 객체 생성
employee1.empName = 'kim';
employee1.age = 20;
employee1.empJob = '개발자';
employee1.printEmp();
