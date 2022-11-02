// static 정적 프로퍼티, 메서드
// 클래스 레벨의 함수는 클래스 이름으로 접근가능
// 인스턴스 레벨 프로퍼티와 함수는 만들어진 인스턴스를 통해서 접근이 가능하다.
// static은 인스턴스안에 들어있지 않다.

class Fruit {
  constructor(name, emoji) {
    // 인스턴스 레벨 프로퍼티      console.log(Fruit.name) 접근 불가
    this.name = name;
    this.emoji = emoji;
  } 
  // 클래스 레벨의 메서드       클래스 별로 공통적으로 사용할수있고 만들어진 인스턴스 데이터 참조 x
  static makeRandomFruit() {
    // 클래스 레벨의 메서드에서는 this 를 참조할수 없다
    return new Fruit("Banana","🍌");
  }
  // 인스턴스 레벨의 메서드
  display = () => {              
    console.log(`${this.name}:${this.emoji}`);
  };
}

const banana = Fruit.makeRandomFruit();
console.log(banana);

const apple = new Fruit("apple", "🍎")
console.log(apple);
console.log(apple.name);
const oragne = new Fruit("orange","🍊")
console.log((oragne));
apple.display()

// class Fruit {
//   constructor (name,emoji) {
//     this.name = name;
//     this.emoji =emoji;
//   }
//   display = ()=> {
//     console.log(`${this.name}:${this.emoji}`);
//   };
// }