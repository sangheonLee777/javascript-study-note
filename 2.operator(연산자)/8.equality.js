//동등 비교 관계 연산자  (Equality operators)
// == 값이 같음
// != 값이 다름
// === 값과 타입이 둘다 같음
// !== 값과 타입이 다름

console.log(2==2);    // true
console.log(2!=2);    // false
console.log(2===2);    // true
console.log(2!==2);    // false

let obj1 ={
  name:"js",
};

let obj2 ={
  name:"js",
};

console.log(obj1==obj2);  // false  
//  obj1과 obj2 의 메모리 셀 주소가 다르다
console.log(obj1.name==obj2.name);   //true

let obj3= obj2;
console.log(obj2== obj3); //  true
