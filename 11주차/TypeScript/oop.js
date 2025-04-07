// 일반적인 직원 정보
// let empName : string;
// let age : number;
// let empJob : string;
// function printEmp(empName : string, age : number, empJob : string) : void {
//     console.log(`${empName}의 나이는 ${age}이고, 직업은 ${empJob}입니다.`);
// }
var Employee = /** @class */ (function () {
    // // 멤버 변수 == 속성 == 프로퍼티 : 클래스 안에서 생성된 변수
    // private _empName : string;
    // private _age : number;
    // private _empJob : string;
    // constructor(empName : string, age? : number, empJob? : string) { // 생성자
    //     this._empName = empName;
    //     this._age = age;
    //     this._empJob = empJob;
    // }; 
    // 위 코드를 간략하게 표현한 코드
    function Employee(// 매개변수들이 암묵적으로 클래스의 멤버로 선언됨과 동시에 전달인자로 사용됨
    _empName, _age, _empJob) {
        var _this = this;
        this._empName = _empName;
        this._age = _age;
        this._empJob = _empJob;
        // 멤버 함수 == 메소드 
        this.printEmp = function () {
            console.log("".concat(_this._empName, "\uC758 \uB098\uC774\uB294 ").concat(_this._age, "\uC774\uACE0, \uC9C1\uC5C5\uC740 ").concat(_this._empJob, "\uC785\uB2C8\uB2E4."));
        };
    }
    Object.defineProperty(Employee.prototype, "empName", {
        // get set 
        get: function () {
            return this._empName;
        },
        set: function (val) {
            this._empName = val;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var employee1 = new Employee('kim', 30, '소프트웨어개발자'); // 객체 생성
employee1.empName = 'lee';
employee1.printEmp();
