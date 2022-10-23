// while(조건) {}
// 조건이 false가 될때까지 { } 코드를 반복실행
// 변수를 초기화하거나 증가하는부분이 없음 외부에서 해줘야함

let num=5;
while (num>=0) {
  console.log(num);
  num--;
}


let isActive=true;
let i= 0;
while(isActive) {
  console.log("still live");
  if(i === 2) {
    break;
  } 
  i++;
}

 do { } while (isActive)    //while 은 조건이맞을때만 실행 do while 일단 먼저 실행하고 조건 검사



do {
  console.log("do-while1");
} while (isActive);