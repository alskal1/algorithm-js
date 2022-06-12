function solution(s) {
    let answer = '';
    let midLength = s.length/2;
    if(s.length % 2 != 0){
        answer = s.substring(midLength, midLength+1);
    }
    else if(s.length % 2 === 0){
        answer = s.substring(midLength-1, midLength+1);
    }
    return answer;
}
