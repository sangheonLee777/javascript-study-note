// 조건문  Conditional Statement
// if(조건) { }     (조건이 맞다면)   { }가 실행됨
// if(조건) { }  else {}      (조건이 안맞다면)   { }실행됨 
// if(조건1) { } else if(조건2) {} else {}   조건이 맞을때만 멈취서 {}를 실행 둘다 맞지 않다면 else{} 실행

let fruit = "apple";
if (fruit==="apple") {
  console.log("apple");
}

let fruits = "orange";
if (fruits==="apple") {
  console.log("apple");
} else {
  console.log("!!");
}

let fruitss = "aa";
if (fruitss === "apple") {
  console.log("apple");
} else if (fruitss === "orange") {
  console.log("orange");
} else {
 console.log("!@#$");
}


// if(0) {
//   console.log("출력되면 안됨!");
// }