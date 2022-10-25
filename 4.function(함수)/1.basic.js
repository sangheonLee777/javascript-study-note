function add (num1,num2) {
  const result = num1+ num2;        // 굳이 변수에 저장해서 반환하지않고
  return result;                      // 바로 return으로 반환해서 생략하자.
}

function add (num1,num2) {
  return num1+ num2;        
}

const resul= add(1,2);
console.log(resul);


//example 
function fullName (firstName,lastName) {
  return `${lastName} ${firstName}`;
}

let lastName="김";
let firstName="지수";
// let fullName= `${lastName} ${firstName}`;
console.log(fullName(lastName,firstName));

let lastName2="박";
let firstName2="철수";
// let fullName2= `${lastName2} ${firstName2}`;
console.log(fullName(lastName2,firstName2));
