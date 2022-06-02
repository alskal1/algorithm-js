function solution(n, m) {
    let answer = [];
    let a = 0; // 최대공약수
    let b = 0; // 최소공배수
    let num = n > m ? n : m;
    for(let i = 0; i <= num; i++){
        if(n % i == 0 && m % i == 0) a = i;
    }
    b = n * m / a;
    answer = [a,b];
    return answer;
}
