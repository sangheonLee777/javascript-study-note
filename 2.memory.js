function add(a, b) {
  return a + b;
}

const sum = add;

console.log(add(1,2));
console.log(sum(1,2));

// 함수도 객체와 마찬가지로 heap 에 함수를 저장하고 이름은 그 주소를 저장함
// 여기서 변수에 함수이름을 저장하면 그 변수도 주소를 저장함
