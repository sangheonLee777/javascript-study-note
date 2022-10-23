// 증가 & 감소 연산자 Increment & Decrement Operators

let a = 0;
console.log(a);     //  0
 a++;       //a= a+1;   
console.log(a);     // 1

a--;  //  a= a-1;
console.log(a);     //0
// 할당하지 않아도 변수 자기 자신에게 다시 할당함

// 주의 사항
// a++  필요한 연산을 하고 , 그 뒤 값을 증가시킴
// ++a  값을 먼저 증가하고 , 필요한 연산을 함

console.clear();

a= 0;
console.log(a++);     // 0
console.log(a);      //1



let b= a++;
console.log(b);   // 0