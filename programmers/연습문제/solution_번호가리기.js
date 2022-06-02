function solution(phone_number) {
    let hide = phone_number.substr(0, phone_number.length-4);
    return  '*'.repeat(hide.length) + phone_number.substr(phone_number.length-4);
  
}
