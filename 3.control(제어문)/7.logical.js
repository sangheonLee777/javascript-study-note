// 논리 연산자 Logical operator
// && 그리고  조건 전부 해당해야함
// || 또는   조건 중 하나만 해당해도됨
// ! 부정 (단항 연산자 에서 온것)
// !! 불리언값으로 변환 (단항 연산자 응용버젼)

let num = 7;
if (num >= 0 && num < 9) {
  console.log("👍");
}


num = 21
if (num >= 0 || num < 9) {
  console.log("👎");
}

num=8
if (!(num>=0||num>20)) {
  console.log("😘");
}

if (num != 10) {
  console.log("🥰");
}