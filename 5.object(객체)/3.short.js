const x = 0;
const y = 0;
// 키이름과 참조하는 변수의 이름이 동일한경우에는 짧게 만들수있음
const coordinate = {
  x,
  y
} //{ x:x , y:y};
console.log(coordinate); // {x:0 ,y: 0}


function makeObj(name, age) {
  return {
    name: name,
    age: age,
  };
}

// 위의 내용도 짧게 축약 가능
// function makeObj(name, age) {
//   return {
//     name,
//     age,
//   };
// }
