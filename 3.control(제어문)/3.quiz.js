// 퀴즈!
let num = 4;
// num 의 숫자가 짝수이면 👍 , 홀수라면 👎 을 출력하도록
// if 
// ternary

if (num % 2 === 0) {
  console.log("👍");
} else {
  console.log("👎");
}

num % 2 === 0 ? console.log("👍") : console.log("👎");
//위의 코드는 console.log()가 두번 나온다 이를 간결하게 하기 위해선
let emoji= num % 2 === 0 ? "👍" : "👎";
console.log (emoji);
// 변수에 조건문을 저장해서 참이면 👍 거짓이면 👎을 저장한뒤 따로 출력한다.