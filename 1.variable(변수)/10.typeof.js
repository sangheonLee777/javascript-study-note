// typeof : 데이터 타입을 확인하는 연산자
// 값을 타입 문자열로 반환해줌

let variable;
console.log(typeof variable);


variable = "";
console.log(typeof variable);

variable = 123;    //js는 동적으로 실행될때 (실시간) 어떤값이 할당되었냐에 따라 타입이 결정된다.
console.log(typeof variable);

variable = {};
console.log(typeof variable);

variable = function () {};
console.log(typeof variable);

variable = Symbol();
console.log(typeof variable);

