// 카운터 만들기
// 0 이상의 값으로 초기화 한뒤 숫자를 하나씩 증가할수있는 카운터 만들기
// counter 클래스 만들기

class Counter {
  constructor(startValue) {
    if(isNaN(startValue)||startValue<0) {
      this.value= 0;
    }else {
      this.value= startValue;
    }
  } 
  increment () {
    this.value++;
  }
}

const counter = new Counter (0);
counter.increment() // 1
//counter.increment() //2
console.log(counter.value);  