/*
문제
n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.

입력
첫째 줄에 n (1 ≤ n ≤ 10,000)이 주어진다.

출력
1부터 n까지 합을 출력한다.
*/
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 문자열을 수로 변환할 때 parseInt보다 Number의 속도가 더 빠
let target = Number(input[0]);
let result = 0;

// 방법1 : 숫자 직접 다 더하기
for (let i = 1; i <= n; i++) {
  result += i;
}  
// 방법2 : 등차수열 공식 이용하기
result = target * (target + 1) / 2;

console.log(result);

/*
백준 2739

문제
N을 입력받은 뒤, 구구단 N단을 출력하는 프로그램을 작성하시오. 출력 형식에 맞춰서 출력하면 된다.

입력
첫째 줄에 N이 주어진다. N은 1보다 크거나 같고, 9보다 작거나 같다.

출력
출력형식과 같게 N*1부터 N*9까지 출력한다.
*/
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);

let result = '';

for (let i = 1; i < 10; i++) {
  // 방법1 : 그냥 하기
  result += n + ' * ' + i + ' = ' + n*i + '\n';
  // 방법2 : 템플릿 리터럴을 사용해 문자열 내부에 변수 포함(백틱문자 사용)
  console.log(`${n} * ${i} = ${n*i}`);  
}

console.log(result);

/*
백준 2438

문제
첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제

입력
첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.

출력
첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다.
*/
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);

for (let i = 1; i <= n; i++) {
  let star = '';
  for (let j = 0; j < i; j++) {
    star += '*';
  }
  console.log(star);
}

/*
백준 15552

문제
본격적으로 for문 문제를 풀기 전에 주의해야 할 점이 있다. 입출력 방식이 느리면 여러 줄을 입력받거나 출력할 때 시간초과가 날 수 있다는 점이다.

C++을 사용하고 있고 cin/cout을 사용하고자 한다면, cin.tie(NULL)과 sync_with_stdio(false)를 둘 다 적용해 주고, endl 대신 개행문자(\n)를 쓰자. 단, 이렇게 하면 더 이상 scanf/printf/puts/getchar/putchar 등 C의 입출력 방식을 사용하면 안 된다.

Java를 사용하고 있다면, Scanner와 System.out.println 대신 BufferedReader와 BufferedWriter를 사용할 수 있다. BufferedWriter.flush는 맨 마지막에 한 번만 하면 된다.

Python을 사용하고 있다면, input 대신 sys.stdin.readline을 사용할 수 있다. 단, 이때는 맨 끝의 개행문자까지 같이 입력받기 때문에 문자열을 저장하고 싶을 경우 .rstrip()을 추가로 해 주는 것이 좋다.

또한 입력과 출력 스트림은 별개이므로, 테스트케이스를 전부 입력받아서 저장한 뒤 전부 출력할 필요는 없다. 테스트케이스를 하나 받은 뒤 하나 출력해도 된다.

자세한 설명 및 다른 언어의 경우는 이 글에 설명되어 있다.

이 블로그 글에서 BOJ의 기타 여러 가지 팁을 볼 수 있다.

입력
첫 줄에 테스트케이스의 개수 T가 주어진다. T는 최대 1,000,000이다. 다음 T줄에는 각각 두 정수 A와 B가 주어진다. A와 B는 1 이상, 1,000 이하이다.

출력
각 테스트케이스마다 A+B를 한 줄에 하나씩 순서대로 출력한다.
*/
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let count = Number(input[0]);
let result = '';

for (let i = 1; i <= count; i++) {
  let data = input[i].split(' ');
  let a = Number(data[0]);
  let b = Number(data[1]);
  result += a + b + '\n';
}

console.log(result);
