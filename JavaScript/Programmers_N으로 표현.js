function solution(N, number) {    
    /*
    N을 idx개 써서 만들 수 있는 수를 담기 위한 배열
    idx=0인 경우는 안 쓸 거고
    최솟값이 8 초과이면 -1 반환이므로 8까지만 고려하면 됨
    다른 방식으로 같은 수를 만들 수 있기 때문에 중복을 허용하지 않는 Set 활용
    */
    const dp = Array.from({length: 9}, () => new Set());
    
    for (let i = 1; i <= 8; i++) {
        // 1. N이 idx번 연속된 수
        dp[i].add(parseInt(String(N).repeat(i)));
        
        // 2. 이전의 조합들로 만들 수 있는 수
        // dp[k] = dp[n] # dp[k-n] 이라 할 수 있음
        // 이때 #은 양 옆의 모든 경우에 대하여 사칙연산을 수행한 후 합집합임을 표현한 임의의 문자
        for (let j = 1; j < i; j++) {
            for (const a of dp[j]) {
              for (const b of dp[i - j]) {
                dp[i].add(a + b);
                dp[i].add(a - b);
                dp[i].add(a * b);
                if (b !== 0) dp[i].add(Math.floor(a / b));
              }
            }
        }
    if (dp[i].has(number)) return i;
    }
    
    return -1;
}