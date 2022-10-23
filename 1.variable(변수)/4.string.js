// 문자열 타입

let string = "Hello World!"
console.log(string);
string = '"안녕하세요"';
console.log(string);

//특수문자 출력하는 법 (이스케이프 표현)
string = '"안녕하세요"';
console.log(string);

string = "안녕!\n나다"   //  \n은 줄바꿈
console.log(string);

string = "안녕!\n나다 \t\t 이상헌"   //  \t은 탭
console.log(string);

// 템플릿 리터럴  (template literal)   ``
let id ="이상헌";
let greetings= "안녕, "+ id + "hi\n 너 죽인다"
console.log(greetings);

greetings=  `안녕,${id}`      //어떤 특정한 변수가 가르키는 문자열읽고 싶을때는
console.log(greetings);     // `` 안에 ${}로 합체하기


let a = 20;
let b = 8;
let c = "자바스크립트";
let str = `저는 ${a+b}살이고 ${c}를 좋아합니다.`;
console.log(str);
