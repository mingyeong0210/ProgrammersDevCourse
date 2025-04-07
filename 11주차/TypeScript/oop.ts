// 일반적인 직원 정보
// let empName : string;
// let age : number;
// let empJob : string;

// function printEmp(empName : string, age : number, empJob : string) : void {
//     console.log(`${empName}의 나이는 ${age}이고, 직업은 ${empJob}입니다.`);
// }

class Employee {
    // 멤버 변수 == 속성 == 프로퍼티 : 클래스 안에서 생성된 변수
    empName : string;
    age : number;
    empJob : string;
    
    // 멤버 함수 == 메소드 
    printEmp = () : void => {
        console.log(`${this.empName}의 나이는 ${this.age}이고, 직업은 ${this.empJob}입니다.`);
    }
}

let employee1 = new Employee(); // 객체 생성
employee1.empName = 'kim';
employee1.age = 20;
employee1.empJob = '개발자';

employee1.printEmp();