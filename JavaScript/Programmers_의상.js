/*
https://school.programmers.co.kr/learn/courses/30/lessons/42578

의상들이 담긴 2차원 배열 clothes가 주어질 때 서로 다른 옷의 조합의 수를 return 하도록 solution 함수
*/

function solution(clothes) {
  let answer = 0;

  let clothesCount = new Map();
  clothes.forEach(cloth => {
    if (clothesCount.has(cloth[1])) {
      clothesCount.set(cloth[1], clothesCount.get(cloth[1]) + 1);
    } else {
      clothesCount.set(cloth[1], 1);
    }
  });

  if (clothes.length > 0) {
    answer = 1;
    for (const value of clothesCount.values()) {
      answer *= value + 1;
    }
  }

  answer --;

  return answer;
}