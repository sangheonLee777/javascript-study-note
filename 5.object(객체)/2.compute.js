const obj ={
  name: "lee",
  age:28,
}
// 코딩하는 시점에 , 정적으로 접근이 확정될때
obj.name;
obj.age;

//동적으로 속성에 접근하고 싶을때 대괄호 표기법 사용
function getValue (obj,key) {
  return obj[key];
}
console.log(getValue(obj, "name"));    // 전달되는 문자열에 따라서  key 의 값을 찾는다

//동적으로 객체 추가
function addKey(obj,key,value) {
  obj[key]=value;
}
addKey(obj,"job","engineer");
console.log(obj);


//동적으로 객체 삭제하기
function deleteKey(obj,key) {
  delete obj[key];
}
deleteKey(obj,"job");
console.log(obj);
