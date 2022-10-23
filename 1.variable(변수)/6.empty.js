// null, undefined

let variable;
console.log(variable);   //메모리상 아무것도 없으면 undefined

variable=null;
console.log(variable);  // 변수가 비어있다.

let activeItem; // 아직 활성화된 아이템 있는지 없는지 모르는 상태
activeItem = null; // 활성화된 아이템이 없는 상태


console.log(typeof 123);   //typeof   타입을 출력하는 연산자
console.log(typeof null);   // null 은 object js 자체에서 null 을 표현하기위해
console.log(typeof undefined);