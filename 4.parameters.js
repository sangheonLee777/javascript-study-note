// 매개변수의 기본값은 무조건 undefined
// 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장됨
// 매개변수 기본값 을 설정할수있는데 Default Parameters 라고 부름 (다음줄로)
// a=1 단 undefined 일경우에만 기본값을 사용 외부에서 값이 주어지면 외부값 사용
function add(a = 1, b = 1) {
  console.log(a);
  console.log(b);
  console.log(arguments); //  '0':1 , '1':2
  console.log(arguments[1]); // 2
}

add(1, 2)




// Rest 매개변수 Rest Parameters
// 얼마나 많은 갯수의 인자가 전달될지 모를때 모든것들을 다 배열로 받고싶을때 사용
function sum(...numbers) {
  console.log(numbers);
}

sum(1, 2, 3, 4, 5, 6, 7, 8, )