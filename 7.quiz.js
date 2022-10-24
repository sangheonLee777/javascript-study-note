// 주어진 숫자만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해야함
// 5 전달하고 순회하는 숫자를 다 출력함
// 5 주고 순회하는 숫자의 두배값을 다 출력함

// 내답
let add = (a) => {
  for (i = 0; i < a; i++) {
    console.log(i);
  }
}

let multi = (b) => {
  for (i = 0; i < b; i++) {
    console.log(i * 2);
  }
}

function iterate(max, action) {
  action(max)
}

iterate(5, add);



// 정답

function iterates(max, action) {
  for (let i = 0; i < max; i++) {
    action(i);
  }
}

function log(num) {
  console.log(num)
}

function multilog(num) {
  console.log(num * 2);
}
iterates(3, log);
//iterate(3,(num)=>console.log(num))
iterates(3, log);

function solution (num1,num2) {
  return num1*num2;
}