//반복문  Loop Statement
//for(변수선언문; 조건식; 증감식) { } 해당하는 조건이 맞을때까지 코드 블럭을 실행함
// 실행순서
//1. 변수 선언문 실행
//2. 조건식의 값이 참이면 { } 코드블럭을 수행
//3. 증감식을 수행
//4. 조건식이 거짓이 될때까지 2번과 3번을 반복함

// for(let i=0; i<5; i++) {
//   console.log(i);
// }

// for (let i=0; i<5; i=i+2) {
//   console.log(i);
// }

for(let i=0; i<5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(i,j);
    
  }
}



//무한 루프

//for(;;) { }

//반복문 제어 :continue, break;
//break: 특정한 조건에 for 그만두고 싶을때 
//continue: continue가 나오는 순간 그 아래 어떤 코드가 있더라도 무시하고 
//그다음으로 바로증액함 그리고 그 조건이 맞으면 다음 반복문으로 넘어감 

for(let i=0; i<20; i++ ){
  if (i ===10) {
    continue;
    console.log("i가 10");
    break;
  }
  console.log(i);
}
