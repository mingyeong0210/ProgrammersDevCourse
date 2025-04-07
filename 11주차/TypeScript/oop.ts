// 일반적인 직원 정보
// let empName : string;
// let age : number;
// let empJob : string;

// function printEmp(empName : string, age : number, empJob : string) : void {
//     console.log(`${empName}의 나이는 ${age}이고, 직업은 ${empJob}입니다.`);
// }

class Employee {
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
    constructor( // 매개변수들이 암묵적으로 클래스의 멤버로 선언됨과 동시에 전달인자로 사용됨
        private _empName : string,
        private _age : number,
        private _empJob : string
    ) {
        
    }

    // get set 
    get empName() {
        return this._empName;
    }

    set empName(val : string) {
        this._empName = val;
    }

    // 멤버 함수 == 메소드 
    printEmp = () : void => {
        console.log(`${this._empName}의 나이는 ${this._age}이고, 직업은 ${this._empJob}입니다.`);
    }
}

let employee1 = new Employee('kim', 30, '소프트웨어개발자'); // 객체 생성
employee1.empName = 'lee';
employee1.printEmp();