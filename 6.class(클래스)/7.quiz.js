//정직원과 파트타임 직원을 나타낼수있는 클래스를 만들어보자
//직원들의 정보: 이름, 부서이름, 한달 근무시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할수있다.
// 정직원 시급 10,000원
// 파트타임 시급 8,000원

class Worker {
  constructor(name, partName, workTime) {
    this.name = name;
    this.partName = partName;
    this.workTime = workTime;
  }
}

class FullTimeStaff extends Worker {
  pay() {
    return (this.workTime * 10000);
  }
}

class PartTimeStaff extends Worker {
  pay() {
    return (this.workTime * 8000);
  }
}

const fullTimeStaff = new FullTimeStaff("이상헌", "개발", 20)
console.log(fullTimeStaff);
console.log(fullTimeStaff.pay());

const partTimeStaff = new PartTimeStaff("김덕배", "서빙", 10)
console.log(partTimeStaff);
console.log(partTimeStaff.pay());

class Employee {
  constructor(name, department, hoursPerMonth, payRate) {
    this.name = name;
    this.department = department;
    this.hoursPerMonth = hoursPerMonth;
    this.payRate = payRate;
  }
  calculatePay() {
    return this.hoursPerMonth * this.payRate;
  }
}

class FullTimeEmployee extends Employee {
  // 그냥 숫자를 적으면 보기 힘듬
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, 10000);
  }
}

class PartTimeEmployee extends Employee {
  // 상수변수를 이용
  static PAY_RATE= 8000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, PartTimeEmployee.PAY_RATE);
  }
}

const ellie = new FullTimeEmployee("엘리", "s/w", 30);
const bob = new PartTimeEmployee("밥", "s/w", 20);
console.log(ellie.calculatePay());
console.log(bob.calculatePay());