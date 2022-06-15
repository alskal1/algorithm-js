function solution(s) {
    return s.split(" ").map((i) => i.split("").map((str, idx) => (idx % 2 === 0 ? str.toUpperCase() : str.toLowerCase())).join("")).join(" ");
}
