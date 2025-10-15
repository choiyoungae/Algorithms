/*
https://school.programmers.co.kr/learn/courses/30/lessons/43105

삼각형의 정보가 담긴 배열 triangle이 매개변수로 주어질 때, 거쳐간 숫자의 최댓값을 return 하도록 solution 함수
*/

function solution(triangle) {
    for(var i = triangle.length - 1; i >= 0; i--){
        for(var j = 0; j < triangle[i].length - 1; j++){
            triangle[i - 1][j] = Math.max(triangle[i - 1][j] + triangle[i][j], triangle[i - 1][j] + triangle[i][j + 1]);
        }
    }
    return triangle[0][0];
}