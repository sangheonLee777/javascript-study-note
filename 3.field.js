// 접근제어자 -- 캡슐화 (한번 만들어진 다음에 외부에서 변경이불가능하게 만들고싶을때)
// 내부상으로 필요한 데이터를 외부에서 보이지 않도록 수정할수없도록 꽁꽁 캡슐화 하다
// private(#), public(기본) , protected        js 는 이런 키워드 없음
// 클래스 내부에서만 사용하는 필드 함수들 #을 붙여서 제어 가능
class Fruit {
  #name;
  emoji;
  type="과일";
  constructor(name, emoji) {
    this.#name = name;
    this.emoji = emoji;
  }
  display = () => {              
    console.log(`${this.#name}:${this.emoji}`);
  };
}


const apple = new Fruit("apple", "🍎")
//apple.name= "오렌지";             // #field는 외부에서 접근이 불가능함
console.log(apple);