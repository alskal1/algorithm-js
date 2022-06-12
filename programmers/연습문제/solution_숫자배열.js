function solution(arr, divisor) {
    var answer = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % divisor === 0) answer.push(arr[i]);
    }
    return answer = answer.length === 0 ? [-1] : answer.sort((a,b) => {
        return a - b;
    });
}
