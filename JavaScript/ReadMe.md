## 코딩테스트용 JavaScript 기본 출력

### 단순 문자 출력
```javascript
console.log('Hello World!');
```

### 템플릿 리터럴을 사용하여 문자열 내부에 변수를 포함(백틱 문자 사용)
```javascript
result = 10;
console.log(`정답은 ${result}입니다.`);
```

### fs 모듈
- 입력 데이터가 텍스트 파일 형태로 주어지는 경우, 파일 시스템 모듈을 사용
- 예를 들어 input.txt 파일에 적힌 텍스트를 읽어오는 경우, 다음과 같이 코드 작성
- **기능** : 전체 텍스트를 읽어온 뒤, 줄바꿈 기호를 기준으로 구분하여 리스트로 변환
```javascript
// readline 모듈보다는 fs를 이용해서 파일 전체를 읽어들여 처리하기
let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

console.log(input);
```

![fs](https://github.com/user-attachments/assets/1bd440f2-51fd-42ab-91d8-5fd18c12a360)

### readline 모듈
- 한 줄씩 입력받아 처리하여 답을 출력할 때
```javascript
const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
rl.on('line', function(line) {
  // 콘솔 입력 창에서 줄바꿈(Enter)을 입력할 때마다 호출
  input.push(line);
}).on('close', function() {
  // 콘솔 입력 창에서 Ctrl + C 혹은 Ctrl + D를 입력하면 호출(입력의 종료)
  console.log(input);
  process.exit();
});
```

---

## JavaScript 문법

### Array.prototype.reduce()
- 배열의 모든 원소에 대해 특정 연산을 순차적으로 적용할 때 사용
- 원소에서 가장 큰/작은 값 찾기, 원소의 합 구하기 같은 각각의 원소를 하나씩 처리하는 연산에서 사용
- **(accumulator, currentValue) => (반환값)**  형태
```javascript
let data = [5, 2, 9, 8, 4];

// minValue 구하기
let minValue = data.reduce((a, b) => Math.min(a, b));
console.log(minValue); // 2

// 원소의 합계 구하기
let summary = data.reduce((a, b) => a + b);
console.log(summary); // 28
```

### 배열 초기화
```javascript
// 직접 값을 설정하여 초기화
let arr1 = [8, 1, 5, 3, 6];

// 길이가 5이고 모든 원소의 값이 0인 배열로 초기화
let arr2 = new Array(5)..fill(0);
```

### 집합 자료형
- 특정한 원소의 등장여부 파악시 사용
```javascript
let mySet = new Set(); // 집합 객체 생성

// 여러 개의 원소 삽입
mySet.add(3);
mySet.add(5);
mySet.add(7);
mySet.add(3);

console.log(`원소의 개수: ${mySet.size}`); // 이때, 집합은 중복된 원소를 포함하지 않으므로 ${mySet.size}는 3
console.log(`원소 7을 포함하고 있는가? ${mySet.has(7)}`);

// 원소 5 제거
mySet.delete(5);

// 원소를 하나씩 출력
for (let item of mySet) console.log(item);
```

![집합](https://github.com/user-attachments/assets/bad0d473-ca92-4b82-9f59-b104ea06d303)

### 소수점 아래 특정 자리에서 반올림
```javascript
// 특정 실수에 대해 toFixed()를 이용해 소수점 아래 둘째 자리까지 출력
let x = 123.456;
console.log(x.toFixed(2)); // 123.46
```

### 이스케이프 시퀀스(Escape Sequence)
- **예약 문자** 혹은 **특수 문자**를 출력하기 위해 사용
![이스케이프 시퀀스](https://github.com/user-attachments/assets/f2f79410-9261-455c-b001-d7c2900eb939)
```javascript
console.log("그는 \"비범함\"을 보였다."); // 그는 "비범함"을 보였다.
```
