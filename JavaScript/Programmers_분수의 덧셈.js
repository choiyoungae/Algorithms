/* 
https://school.programmers.co.kr/learn/courses/30/lessons/120808

첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다.
두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.
*/

function solution(numer1, denom1, numer2, denom2) {
  let answer = [];
  
  let getLCM = (num1, num2) =>{
  let lcm = 1;
   
    while(true){
      if((lcm % num1 == 0) && (lcm % num2 == 0)){
        break;
      }
      lcm++;
    }
    return lcm
}

  let getGCD = (num1, num2) => {
    let gcd = 1;

    for(let i=2; i<=Math.min(num1, num2); i++){
      if(num1 % i === 0 && num2 % i === 0){
          gcd = i;
      }
    }

    return gcd;
  }

  let lcm = getLCM(denom1, denom2);
  let number = numer1 * (lcm / denom1) + numer2 * (lcm / denom2);
  let gcd = getGCD(number, lcm);
  
  answer = [number / gcd, lcm / gcd]
  
  return answer;
}

