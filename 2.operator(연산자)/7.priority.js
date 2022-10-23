let a = 2;
let b = 3;
let result = a + b * 4;   // 14
console.log(result);
result = a++  +b * 4;   //  14   이 문이 끝난 다음에 a 증가함
console.log(result);
result = (a+b) * 4;
console.log(result);   //  20   
// 코딩시 우선순위로 필요한것들을 ( ) 로 묶어 주자

