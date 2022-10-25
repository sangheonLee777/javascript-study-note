// return 을 명시적으로 하지 않으면 자동으로 undefined이 반환됨

function add(a, b) {
  return a + b;
}
const result = add(1,2);
console.log(result);


//함수에서 값을 return해야하는 함수가 아니라면 굳이 return을 작성안해도됨

function print(text) {
  console.log(text);
}

const outcome= print("ㅁㅁㅁ")
console.log(outcome);   // 값을 반환하지 않아서 undefined


// 숫자가 0보다 크면 출력 0보다작으면 출력X
// return을 함수 중간에 하게되면 함수가 종료됨
//조건이 맞지 않는 경우 함수 도입부분에서 함수를 일찍이 종료함
function prints (num) {
  if(num<0) {
    return;
  }
  console.log(num);
}

prints(12);
prints(-12);