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