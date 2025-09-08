/*
https://school.programmers.co.kr/learn/courses/30/lessons/42577

전화번호부에 적힌 전화번호를 담은 배열 phone_book 이 solution 함수의 매개변수로 주어질 때, 어떤 번호가 다른 번호의 접두어인 경우가 있으면 false를 그렇지 않으면 true를 return 하도록 solution 함수를 작성해주세요.
*/

/* 
시도 1

정확성: 83.3
효율성: 8.3
합계: 91.7 / 100.0

문자열 기준으로 정렬을 해야 하기 때문에 sort((a, b) => a - b)는 맞지 않는 정렬 방법
시간복잡도 : 바깥 루프 O(n), 안쪽 루프 O(n), 문자열 startsWith: O(L) → O(n² * L) ≈ O(n²) 이므로 n=1,000,000일 때는 연산량이 최대 10¹² 이상 필요하므로 시간 초과가 무조건 발생
*/
function solution(phone_book) {
    let answer = true;
    let arr = Array.from({ length: 10 }, () => []);
    
    for (let i = 0; i < phone_book.length; i++) {
        const first = Number(phone_book[i][0]);
        arr[first].push(phone_book[i])
    }
    
    for (let i = 0; i < 10; i++) {
        if (arr[i].length < 2) continue;
        arr[i] = arr[i].sort((a, b) => a - b);
        for (let j = 0; j < arr[i].length - 1; j++) {
            for (let k = j + 1; k < arr[i].length; k++) {
                if (arr[i][j].length >= arr[i][k].length) continue;
                if (arr[i][k].startsWith(arr[i][j])) {
                    answer = false;
                    break;
                }
            }
        }
    }
    
    return answer;
}

/*
최종

문자열 기준 정렬 방식 채택
*/
function solution(phone_book) {
    let answer = true;
    const sortedPB = phone_book.sort();
    
    for (let i = 1; i < phone_book.length; i++) {
        if (sortedPB[i].startsWith(sortedPB[i-1])) return false;
    }
    
    return answer;
}

/*
추가

해시 방법
모든 번호를 Set에 저장해두고 Set을 기준으로 각 번호에서 접두어를 찾는 방법
*/
function solution(phone_book) {
    const set = new Set(phone_book);
    
    for (const num of phone_book) {
        for (let i = 1; i < num.length; i++) {
            if (set.has(num.slice(0, i))) return false;
        }
    }
    
    return true;
}
