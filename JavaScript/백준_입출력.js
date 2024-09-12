/* 
백준 1000

문제 : 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

입력 : 첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)

출력 : 첫째 줄에 A+B를 출력한다.
*/

// fs 모듈을 이용해 파일 전체를 읽어와 문자열로 저장
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

console.log(Number(input[0]) + Number(input[1]));

/*
백준 10998

문제 : 두 정수 A와 B를 입력받은 다음, A×B를 출력하는 프로그램을 작성하시오.

입력 : 첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)

출력 : 첫째 줄에 A×B를 출력한다.
*/

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

console.log(Number(input[0]) * Number(input[1]));

/*
백준 10869

문제 : 두 자연수 A와 B가 주어진다. 이때, A+B, A-B, A*B, A/B(몫), A%B(나머지)를 출력하는 프로그램을 작성하시오. 

입력 : 두 자연수 A와 B가 주어진다. (1 ≤ A, B ≤ 10,000)

출력 : 첫째 줄에 A+B, 둘째 줄에 A-B, 셋째 줄에 A*B, 넷째 줄에 A/B, 다섯째 줄에 A%B를 출력한다.
*/

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let a = Number(input[0]);
let b = Number(input[1]);

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(parseInt(a/b));
console.log(a%b);

/*
백준 2588

문제 : (세 자리 수) × (세 자리 수)는 다음과 같은 과정을 통하여 이루어진다.

          4 7 2 --- (1)
        X 3 8 5 --- (2)
    --------------------
        2 3 6 0 --- (3)
      3 7 7 6   --- (4)
    1 4 1 6     --- (5)
    --------------------
    1 8 1 7 2 0 --- (6)

(1)과 (2)위치에 들어갈 세 자리 자연수가 주어질 때 (3), (4), (5), (6)위치에 들어갈 값을 구하는 프로그램을 작성하시오.

입력 : 첫째 줄에 (1)의 위치에 들어갈 세 자리 자연수가, 둘째 줄에 (2)의 위치에 들어갈 세자리 자연수가 주어진다.

출력 : 첫째 줄부터 넷째 줄까지 차례대로 (3), (4), (5), (6)에 들어갈 값을 출력한다.
*/

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const A = input[0];
const B = input[1];

const one = B % 10;
const ten = Math.floor((B % 100) / 10);
const hundred = Math.floor(B / 100);

console.log(A * one);
console.log(A * ten);
console.log(A * hundred);
console.log(A * B);
