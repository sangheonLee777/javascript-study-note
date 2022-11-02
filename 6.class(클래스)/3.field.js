// 접근제어자 -- 캡슐화 (한번 만들어진 다음에 외부에서 변경이불가능하게 만들고싶을때)
// 내부상으로 필요한 데이터를 외부에서 보이지 않도록 수정할수없도록 꽁꽁 캡슐화 하다
// private(#)외부에서 접근불가, public(기본) 외부에서 볼수있고접근가능, protected 외부에서 볼수없지만 상속된 자식 클래스에서만 접근가능
//  
// 클래스 내부에서만 사용하는 필드 함수들 #을 붙여서 제어 가능
class Fruit {
  name; //field   외부로 부터 전달받은 데이터로 할당
  emoji; //field   자바스크립트에서는 생성자에서 주어지는 데이터라면 생략가능
  #type = "과일"; // 클래스가 만들어지자마자 과일로 초기화 되어있음  인스턴스 만들때 초기화 되어야한다면 생성자 밖에서 

  constructor(name, emoji) {
    this.name = name;    
    this.emoji = emoji;
  }
  display = () => {              
    console.log(`${this.name}:${this.emoji}`);
  };
}

//한번 과일 객체를 만들때 애플과 이모지를 설정하면 외부에서 변경이 불가능하게 만들고싶을때
// 접근 제어자 사용
const apple = new Fruit("apple", "🍎")
//apple.name= "오렌지";             // #field는 외부에서 접근이 불가능함
console.log(apple);