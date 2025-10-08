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