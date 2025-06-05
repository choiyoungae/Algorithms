/* 
https://school.programmers.co.kr/learn/courses/30/lessons/120812

최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다.
정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요.
최빈값이 여러 개면 -1을 return 합니다.
*/

function solution(array) {
    const set = [];
    for (let i = 0; i < array.length; i++) {
        const current = array[i];
        const existing = set.find(obj => obj.number === current);

        if (existing) {
          existing.quantity += 1;
        } else {
          set.push({ number: current, quantity: 1 });
        }
    }
    
    set.sort((a, b) => a.quantity - b.quantity)
    
    if (set.length > 1 && set[set.length - 1].quantity === set[set.length - 2].quantity) return -1
    return set[set.length - 1].number
}
