
//원시 타입은 값이 복사되어 전달됨

let a = 1;
let b= a ;   // 1

b=2;
console.log(a);  // 1
console.log(b);  // 2   서로 개별적인 값이므로 다름

// 객체 타입은 참조값 (메모리주소,레퍼런스)가 복사되어 전달됨

let apple = {   // 메모리 주소가  0x1234
  name: "사과",
};

console.log(apple);

let orange=apple;   // 오렌지 변수에도  메모리주소(0x1234)가 복사되어 전달됨 


orange.name = "오렌지"

console.log(apple);   // 오렌지
console.log(orange);   // 오렌지


