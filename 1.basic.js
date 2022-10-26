// 객체를 손쉽게 만들수있는 템플릿
// 1. 생성자 함수(오래된 고전적인 방법)
// 2. 클래스를 이용한다 (최신)

// function Fruit(name,emoji) {
//   this.name=name;
//   this.emoji=emoji;
//   this.display = () =>{
//     console.log (`${this.name}: ${this.emoji}`)
//   };
//   return this;
// }


class Fruit {
  // 생성자: new 키워드로 객체를 생성할때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  display = () => {
    console.log(`${this.name}:${this.emoji}`);
  };
}
// apple 은 Fruit이라는 클래스의 인스턴스이다.
const apple = new Fruit("apple", "🍎")
console.log(apple);
// orange 는 Fruit이라는 클래스의 인스턴스이다.
const oragne = new Fruit("orange","🍊")