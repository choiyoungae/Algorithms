/*
https://school.programmers.co.kr/learn/courses/30/lessons/42842

카펫에서 갈색 격자의 수 brown, 노란색 격자의 수 yellow가 매개변수로 주어질 때 카펫의 가로, 세로 크기를 순서대로 배열에 담아 return 하도록 solution 함수

brown + yellow로 전체 칸 수를 알 수 있고 이는 w * h
w든 h든 노란칸 테두리에 갈색칸이 있으니 무조건 3 이상
이때 w가 h보다 크므로 for문에서는 h 기준으로 루트 area를 도는 것이 효율적
그렇게 가능한 두 수의 쌍을 만들고 (w-2)*(h-2)한 것이 yellow의 넓이와도 일치하면 반환
*/

function solution(brown, yellow) {
    // w * h 일 때 w >= h
    const area = brown + yellow;
    
    // 노란 격자 위아래에 갈색 격자가 한칸씩은 있으니 h는 3 이상
    for (let h = 3; h <= Math.sqrt(area); h++) {
        if (area % h === 0) {
            let w = area / h;
            if (w < h) continue;
            if ((w - 2) * (h - 2) === yellow) return [w, h];
        }
    }
}
