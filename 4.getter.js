// 접근자 프로퍼티 (Accessor Property) 클래스의 상태처럼 변수처럼 보이긴한데 실제론 함수

class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    // this.fullName = `${this.firstName}${this.lastName}`
  }
  // fullName= ()=> {
  //   return `${this.firstName} ${this.lastName}`
  // }
  get fullName() {    
    return `${this.firstName} ${this.lastName}`
  }

  set fullName(value) {
    console.log(value);
  }
}

const student = new Student('김', "수지");
student.firstName = "박";
console.log(student.firstName);
console.log(student.fullName);
student.fullName= "김이박"