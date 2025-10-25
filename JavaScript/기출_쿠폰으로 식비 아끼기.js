/*
문제 설명

당신은 n일 동안 매일 한 번씩 식사를 해야 합니다. 자주 이용하는 식당에서는 쿠폰 제도를 운영하는데, 규칙은 다음과 같습니다.

[쿠폰 적립 규칙]

- 주문할 때마다 쿠폰 1개를 받습니다.
- 당일 할인을 받아도 쿠폰은 지급됩니다.
- 당일 받은 쿠폰은 다음날부터 사용할 수 있습니다.

[할인 규칙]

주문 시 쿠폰을 사용하여 다음 중 하나의 할인을 받을 수 있습니다:

- 쿠폰 2개: 1,000원 할인
- 쿠폰 4개: 20% 할인
- 쿠폰 10개: 50% 할인

단, 한 주문에서 할인은 중복으로 적용할 수 없습니다.

n일 동안의 각 날짜별 식사 가격이 주어질 때, 쿠폰을 잘 활용하여 총 식사 비용의 최솟값을 구하세요.

---

제약 조건

- 1 ≤ n ≤ 5,000
- 1,000 ≤ a[i] ≤ 100,000
- 모든 가격 a[i]는 10의 배수입니다.
    - ex) [7000, 10000, 5000, 8500, 9000]
- 처음 시작 시 쿠폰은 0개입니다.
*/

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
