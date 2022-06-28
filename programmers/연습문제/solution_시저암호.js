function solution(s, n) {
     return s.split("").map((str)=>{
        if (str === " ")   return str;
        let tmp = str.charCodeAt();
        return str.toUpperCase().charCodeAt()+n > 90 ? 
            String.fromCharCode(tmp+n-26) : String.fromCharCode(tmp+n);
     }).join("");
}
