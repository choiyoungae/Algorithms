const n = 5;
const a = [7000, 10000, 5000, 8500, 9000];

let prev = Array(20).fill(Infinity);
let curr = Array(20).fill(Infinity);
prev[0] = 0;

for (let i = 1; i <= n; i++) {
    curr.fill(Infinity);
    const price = a[i - 1];
    for (let k = 0; k < 20; k++) {
        if (prev[k] === Infinity) continue;

        // (1) 할인 안 함
        curr[k + 1] = Math.min(curr[k + 1], prev[k] + price);

        // (2) 쿠폰 2장 사용
        if (k >= 2) curr[k - 1] = Math.min(curr[k - 1], prev[k] + price - 1000);

        // (3) 쿠폰 4장 사용
        if (k >= 4) curr[k - 3] = Math.min(curr[k - 3], prev[k] + price * 0.8);

        // (4) 쿠폰 10장 사용
        if (k >= 10) curr[k - 9] = Math.min(curr[k - 9], prev[k] + price * 0.5);
    }
    [prev, curr] = [curr, prev];
}

const answer = Math.min(...prev);
console.log(Math.round(answer));
