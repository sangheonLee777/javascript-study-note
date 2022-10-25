// 함수내부에서 외부로부터 주어진 인자의 값을 변경하는것은 좋지 않다 
// 만약 상태 변경이 필요한경우에는 새로운상태(오브젝트,값)를 만들어서 반환해야함.
// 원시값 값에 의한 복사 
// 객체값 참조에 의한 복사 (메모리주소)
function display(num) {
  num = 5; //❌
  console.log(num);
}
const value = 4; //  원시 값은 전달되거나 할당될때 값에 의해 복사됨
display(value);
console.log(value);


//ex
function displayObj(obj) {
  obj.name="kim"    //❌❌❌❌❌❌ 외부로 부터 주어진 인자(오브젝트)를 내부에서 변경❌
  console.log(obj);
}
const lee = {
  name: "lee"
};
displayObj(lee);
console.log(lee);

function changeName (obj) {       //이름부터 변경하는 느낌을 주도록
  return {...obj, name: "kim"};    // 반환할때는 새로운 오브젝트를  만들기
}