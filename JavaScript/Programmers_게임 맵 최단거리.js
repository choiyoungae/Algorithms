/*
https://school.programmers.co.kr/learn/courses/30/lessons/1844

게임 맵의 상태 maps가 매개변수로 주어질 때, 캐릭터가 상대 팀 진영에 도착하기 위해서 지나가야 하는 칸의 개수의 최솟값을 return 하도록 solution 함수를 완성해주세요. 단, 상대 팀 진영에 도착할 수 없을 때는 -1을 return
*/
function solution(maps) {
    const n = maps[0].length;  // 가로
    const m = maps.length;     // 세로

    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];

    const visited = Array.from({ length: m }, () => Array(n).fill(false));
    const queue = [[0, 0, 1]];
    visited[0][0] = true;

    while (queue.length) {
        const [x, y, dist] = queue.shift();

        if (x === n - 1 && y === m - 1) return dist;

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx >= 0 && ny >= 0 && nx < n && ny < m) {
                if (maps[ny][nx] === 1 && !visited[ny][nx]) {
                    visited[ny][nx] = true;
                    queue.push([nx, ny, dist + 1]);
                }
            }
        }
    }

    return -1;
}
