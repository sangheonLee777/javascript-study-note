//생성자 함수
// 비슷한 객체를 반복해서 생성해야 하는 경우라면 생성자 함수를 이용해서 객체를 생성 가능

// const apple= {
//   name:"apple",
//   display: function (){
//     console.log(`${this.name}: 🍎`)   
//   },
// };
// console.log(apple);
// apple.display();

// const orange= {
//   name:"orange",
//   display: function (){
//     console.log(`${this.name}: 🍊`)   
//   },
// };
// console.log(orange);

//생성자 함수
function Fruit(name,emoji) {
  this.name=name;
  this.emoji=emoji;
  this.display = () =>{
    console.log (`${this.name}: ${this.emoji}`)
  };
  return this;   // 생략 가능
}

const apple = new Fruit("appele","🍎")
const orange = new Fruit("oragne","🍊")
console.log(apple);
console.log(orange);
console.log(apple.emoji);
apple.display()