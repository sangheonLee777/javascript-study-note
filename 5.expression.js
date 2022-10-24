// 함수 선언문 function name() {}
// 함수 표현식 const name = function () {}    모든 표현식은 문인데 문중에서도 값으로 평가될수있는 것이 표현식이다
// 화살표 함수 const name = () => {}
let add = function (a, b) { //무명 함수
  return a + b;
};
console.log(add(1, 2));


// 화살표 함수 const name = () => {}
// 특별한 일을 하지 않고 어떤 값을 바로 return 값만 return하는 함수라면
// add= (a,b) => a+b; 로 축약 가능
add = (a, b) => {
  return a + b;
};
console.log(add(1,2));

//