// 접근자 프로퍼티 (Accessor Property) 클래스의 상태처럼 변수처럼 보이긴한데 실제론 함수
// 원하는 함수 앞에 get을 붙여주면 사용 가능하다.
// fullName을 접근할때 함수를 호출해 준다
// 함수지만 고정된값이 아니라 호출하는 시점에 데이터를 만들어서 return 하는데 속성에 가깝기때문에
// 속성에 한부분이라고 간주되는 이런것들을 함수로 만들어야 할때 get을 붙이면
// 함수호출하는것처럼 호출하지 않고 속성에 접근하듯이 만들수있다.
//  . 해서 값을 읽게되면 get 호출된다
// 값을 할당하면 set 호출되고 할당하고자 하는 value가 인자로 전달됨

class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    // this.fullName = `${this.firstName}${this.lastName}`
  }
  get fullName ()  {
    return `${this.firstName} ${this.lastName}`
  }
  
  // 할당할때 함수 호출됨, 할당하는 값도 받아올수있음 
  // 할당을 하게되면 set이 호출됨
  set fullName (value) {
    console.log(value);
  }
}

const student = new Student('김', "수지");
console.log(student.firstName)  // 속성 프로퍼티처럼 접근 가능함
console.log(student.fullName)  //함수를 호출하듯이 부름 
// 행동을하는게 아니고 객체의 상태를 이름이라는 상태를 얻는건데 함수처럼 호출하니까 조금 이상해보임
// 이때 프로퍼티로 만들어 버릴수있음
// this.fullName=`${this.firstName} ${this.lastName}`
// 여기서 문제점은 학생이라는 객체를 만들고 나서 생성자가 호출되고 난다음에
// fullName 지정되고 난다음에   학생의 firstName을 바꿔도 fullName은 변하지 않음
// 왜냐하면 생성자에서 한번 만들어지고 나서 업데이트 되지 않는다.
student.fullName= "이상헌";