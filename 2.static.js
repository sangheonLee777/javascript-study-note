// static 정적 프로퍼티, 메서드

class Fruit {
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  // 클래스 레벨의 메서드
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