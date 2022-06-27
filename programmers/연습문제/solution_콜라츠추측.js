function solution(num) {
    let n = num;
    let cnt = 0;
    while(true){
        if(n === 1){
            break;
        }
        if(cnt > 500) {
            cnt = -1;
            break;
        }
        else{
             if(n % 2 === 0) {
                n = n / 2;
                cnt++;
            } 
             else if(n % 2 != 0){
                n = (n * 3) + 1;
                cnt++;
            }
        } 
    }
    return cnt;
}
