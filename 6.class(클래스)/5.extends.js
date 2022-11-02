// 확장 상속
// 공통된 행동이나 속성이 있다면 상속시켜줄수있다.
// 1. 부모 클래스 만든다
// 2. 자식 클래스를 만들고 extends 부모요소 를 적는다 



// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log("먹자");
//   }
//   sleep() {
//     console.log("잔다");
//   }
// }

// class Dog {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log("먹자");
//   }
//   sleep() {
//     console.log("잔다");
//   }
//   play() {
//     console.log("놀자");
//   }
// }

class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log("먹자");
  }
  sleep() {
    console.log("잔다");
  }
}

class Tiger extends Animal {}
const tiger = new Tiger('노랑')
console.log(tiger);
tiger.sleep()
tiger.eat()

class Dog extends Animal {
  // 자식 클래스에서 생성자를 정의할때는 부모요소의 필요한것도 다 받아와야함.
  constructor (color,ownerName) {
    // super라는 키워드는 상속하고있는 부모를 가르킨다.
    super(color);
    this.ownerName= ownerName;
  }
  // 자식 클래스에서 필요한것이 있다면 함수나 속성을 추가할수있다.
  play () {
    console.log("놀자");
  }
  // 함수를 덮어 씌운다  오버라이딩 overriding
  eat() {
    super.eat();
    console.log("개가 사료를 먹는다");
  }
}
const dog = new Dog ("검정","이상헌")
console.log(dog);
dog.play()
dog.eat()


