/*
https://school.programmers.co.kr/learn/courses/30/lessons/43165

사용할 수 있는 숫자가 담긴 배열 numbers, 타겟 넘버 target이 매개변수로 주어질 때 숫자를 적절히 더하고 빼서 타겟 넘버를 만드는 방법의 수를 return 하도록 solution 함수
*/
function solution(numbers, target) {
    let answer = 0;
    const length = numbers.length;

    function dfs(index, sum) {
        if (index === length) {
            if (target === sum) {
                answer++;
            }
            return;
        }

        dfs(index + 1, sum + numbers[index]);
        dfs(index + 1, sum - numbers[index]);
    }

    dfs(0, 0);

    return answer;
}
