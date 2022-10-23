/** boolean type
 *   "" 사용 없이 true false 로 사용할수있음
 */

 let 참 = true;
 let 거짓 = false;
 console.log(참);
 console.log(거짓);
 
 // 활용 예제
 
 let isFree = true;
 let isActivated = false;
 let isEnrolled = true;
 
 console.log(isActivated);
 
 console.clear();
 // falshy 거짓인 값       
 console.log(!!0);      //0은 false   특정한 값을 boolean type 으로 변환해주는 연산자 !!
 console.log(!!-0);
 console.log(!!"");
 console.log(!!undefined);
 console.log(!!NaN);
 
 // truthy 참인 값
 console.log(!!1);
 console.log(!!-1);
 console.log(!!"text");
 console.log(!!{});       //objcet
 console.log(!!Infinity);
 
 