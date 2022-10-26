const apple= {
  name:"apple",
  display: function (){
    console.log(`${this.name}: 🍎`)   //객체 안에서 자기자신의 속성에 접근할때는 this 붙이기
  },
};
console.log(apple);
apple.display();